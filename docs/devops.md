---
name: DevOps practices
menu: Best practices
route: /devops
---

# DevOps practices

---

## Dockerfile guidelines

From Docker's [_Best practices for writing Dockerfiles_](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/):

> Docker builds images automatically by reading the instructions from a Dockerfile -- a text file that contains all commands, in order, needed to build a given image. A Dockerfile adheres to a specific format and set of instructions which you can find at Dockerfile reference.
> 
> A Docker image consists of read-only layers each of which represents a Dockerfile instruction. The layers are stacked and each one is a delta of the changes from the previous layer.

### TL;DR

*   Use the provided [base images](https://hub.docker.com/u/helsinkitest).
*   Keep the image slim.
*   One service per image.
*   Use multi-stage builds, last stage should be the production build.
*   Containers are run as root by default which is not nice. Drop root with `USER appuser`.
*   Set owner when copying files: `COPY --chown=appuser:appuser`.
*   Define an entrypoint.

### Base image

We have production-ready base images for node, python, and node+python available at [Docker Hub](https://hub.docker.com/u/helsinkitest). These images are based on debian and have

*   a non-root user (`appuser`) for running the application,
*   a directory for application code (`/app`),
*   helpers for installing system packages (`apt-install.sh`, `apt-cleanup.sh`),
*   bash as the shell, and
*   `curl`, `git`, and `wait-for-it.sh` [🔗](https://github.com/vishnubob/wait-for-it).

### Entrypoint

The entrypoint that is defined in the Dockerfile gets run when the image is started unless manually overridden by another entrypoint (`docker run --entrypoint=<entrypoint>`).

By default -- when given no arguments -- the entrypoint should bring up a production server (typically [uwsgi](http://projects.unbit.it/uwsgi) in Django's case) but in many projects some sort of hot-reloading server is used for development purposes and sometimes it's useful to able to run an altogether different command as well.

An example of an entrypoint script that handles all these cases and does some extra setting-up when requested (very useful for local development):

```
#!/bin/bash

# Wait for database
if [[ "$WAIT_FOR_DATABASE" = "1" ]]; then
    wait-for-it.sh "${DATABASE_HOST}:${DATABASE_PORT-5432}"
fi

# Setup local development environment
if [[ "$APPLY_MIGRATIONS" = "1" ]]; then
    ./manage.py migrate --noinput
fi

if [[ ! -z "$@" ]]; then
    # Run the given command
    exec "$@"
elif [[ "$DEV_SERVER" = "1" ]]; then
    # Development server was requested
    exec ./manage.py runserver 0.0.0.0:8000
else
    # Always default to production environment
    exec uwsgi --ini .prod/uwsgi.ini
fi
```

### On keeping it slim

*   Do [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/).

*   Use `.dockerignore` (see [docs](https://docs.docker.com/engine/reference/builder/#dockerignore-file)) to exclude files from getting copied to the image. Usually it’s a good idea to exclude everything (`*`) and whitelist only the needed things (lines starting with exclamation mark).

*   Copy dependency files (`requirements.txt`, `package.json` etc.) first, install dependencies then copy the rest of the application code.

*   Chain commands to do clean-up in the same layer (see lines 40..53 in the Dockerfile example below).

*   Removing files added in a previous layers does **not** make the image smaller.

### Miscellaneous

#### appuser

Containers are run as root by default. That’s usually not a good idea. You should switch to a non-root user with `USER` instruction. The base images have user `appuser` (UID 1000) and group `appuser` (GID 1000) for this purpose.

Use `COPY --chown=appuser:appuser ...` when copying files to the image. The reasoning behind this is that if the files in the build context are not readable by others (something like `chmod o-r` or a non-standard umask `077`) then `appuser` won't be able to read the files as they will be owned by `root:root` after copying.

#### Build arguments

The CI/CD pipeline has support for [build arguments](https://docs.docker.com/engine/reference/builder/#arg). Environment variables prefixed with `DOCKER_BUILD_ARG_` are passed to `docker build` command.

#### .prod/

Use `.prod/` for production specific files in your repository.

### Example of a Dockerfile for Django

A typical Dockerfile for a Django project ([tunnistamo](https://github.com/City-of-Helsinki/tunnistamo/blob/master/Dockerfile)):

```
# Stage for building static files for the project. Derives from a node
# image as that is required for compiling SCSS files.
FROM helsinkitest/python-node:3.6-10-slim as staticbuilder

# Install missing system packages. Note that in this stage we don't care
# about the image size as this stage will get thrown away (no other stage
# derives from it).
RUN apt-install.sh \
      build-essential \
      libpq-dev \
      libxml2-dev \
      libxmlsec1-dev \
      pkg-config

# Copy requirement files and install dependencies.
COPY requirements.txt /app/requirements.txt
COPY package.json /app/package.json
RUN pip install -U pip \
    && pip install --no-cache-dir  -r /app/requirements.txt
RUN npm install

# Copy rest of the application code and build static assets.
COPY . /app/
RUN python manage.py collectstatic --noinput \
    && python manage.py compilescss

# Build a base image for development and production stages.
# Note that this stage won't get thrown out so we need to think about
# layer sizes from this point on.
FROM helsinkitest/python:3.6-slim as appbase

# Copy requirement files.
COPY --chown=appuser:appuser requirements.txt requirements-prod.txt /app/

# Install main project dependencies and clean up.
# Note that production dependencies are installed here as well since
# that is the default state of the image and development stages are
# just extras.
RUN apt-install.sh \
      build-essential \
      gettext \
      libpq-dev \
      libxml2-dev \
      libxmlsec1-dev \
      netcat \
      pkg-config \
    && pip install --no-cache-dir \
      -r /app/requirements.txt \
      -r /app/requirements-prod.txt \
    && apt-cleanup.sh \
      build-essential \
      pkg-config

# Copy and set the entrypoint.
COPY docker-entrypoint.sh /app
ENTRYPOINT ["./docker-entrypoint.sh"]

# Copy static assets from the previous stage and set the owner to
# `appuser:appuser`.
ENV STATIC_ROOT /var/tunnistamo/static
COPY --from=staticbuilder --chown=appuser:appuser /app/static /var/tunnistamo/static

# Build development image using the previous stage as base. This is used
# for local development with docker-compose.
FROM appbase as development

# Install additional dependencies.
COPY --chown=appuser:appuser requirements-dev.txt /app/requirements-dev.txt
RUN pip install --no-cache-dir  -r /app/requirements-dev.txt \
  && pip install --no-cache-dir prequ

# Set environment variables for development.
ENV DEV_SERVER=1

# Copy the application code.
COPY --chown=appuser:appuser . /app/

# Use a non-root user.
USER appuser

# Expose the port that the application is listening on. `EXPOSE` statement
# is actually a no-op but it works as an extra bit of documentation.
EXPOSE 8000/tcp

# Build production image using the appbase stage as base. This should always
# be the last stage of Dockerfile.
FROM appbase as production

# Copy application code.
COPY --chown=appuser:appuser . /app/

# Set user and document the port.
USER appuser
EXPOSE 8000/tcp
```

### Example of a Dockerfile for Node.JS

Use the [Dockerfile](https://github.com/City-of-Helsinki/berth-federation-gateway/blob/develop/Dockerfile) for the Berth Federation Gateway NodeJS app for reference.

Key points:

1.  Since we have Kubernetes handling app lifecycle monitoring, we can afford not to use NodeJS process managers like pm2 and just run the app with the ~ `node dist/index.js` command.

2.  TypeScript (TS) is the preferred language for the source code of NodeJS apps.

3.  In order to run TS source code it first needs to be transpiled to JavaScript with a `tsc` command (the berth federation has [an npm script](https://github.com/City-of-Helsinki/berth-federation-gateway/blob/develop/package.json#L8))

4.  Since the `typescript` package is a dev dependency, we need to transpile the source code in a separate dockerfile stage, where `NODE_ENV` is set to `development` and then copy the `dist` folder to a new clean stage, where `NODE_ENV=production` (again, see the linked Dockerfile for reference).

5.  Ideally, we would use webpack for bundling the entire project, but that is yet to be implemented (some ideas on how to do this can be found [here](https://corpglory.com/s/express-webpack/).)

### See also

*   Docker's [_Best practices for writing Dockerfiles_](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

*   Docker's [_Use multi-stage builds_](https://docs.docker.com/develop/develop-images/multistage-build/)

*   [dive](https://github.com/wagoodman/dive): A tool for exploring each layer in a docker image

*   Base images at [Docker Hub](https://hub.docker.com/u/helsinkitest) ([sources](https://gitlab.com/City-of-Helsinki/KuVa/docker-images))
