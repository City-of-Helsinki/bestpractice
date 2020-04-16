---
name: Technology choices
menu: Best practices
route: /technology-choices
---

# Technology choices

Document about the tech stack used for developing code in the City of
Helsinki.

Backend services
----------------

- For most things: Python 3 with Django.
  - Suggested versions for the new projects are Python 3.7 and Django 2.2 LTS.
  - [Django REST framework](https://www.django-rest-framework.org/) for REST APIs
  - Graphene for GraphQL APIs, using [Graphene-Django](https://docs.graphene-python.org/projects/django/en/latest/).
  - Postgres / PostGIS for background databases
- For stateless GraphQL proxies / API gateways:
  - Node.js with Apollo
- For serving static files of React apps:
  - Node.js with express (and server-side rendering)
- Make all APIs available through api.hel.fi

Frontend services
-----------------

- For most things: React with "standard" extensions (= just use
  create-react-app).
  - preferably TypeScript
  - yarn and webpack
  - redux for state
  - Always set up and use server-side rendering
- always use components from Helsinki Design System
  (https://github.com/City-of-Helsinki/helsinki-design-system).
  - Contribute your components into HDS and use them by including the
    package as a dependency
- Usually, the front pages of citizen directed services should be made
  with Wordpress.  (So that they can be changed without coder
  intervention)
  - don't customise wordpress if you can avoid it
    - if you can't, adhere to their coding standards to try to make the
      code work across upgrades

Creating Libraries
------------------

- use npm and PyPI for distribution
- always include own libraries via npm/PyPI, never directly via version
  control / local installation

Helpers & tooling
-----------------

- docker (and Dockerfiles) for creating runnable, publishable images
  - make the image so that `docker run XXX` (with environment variables)
    brings up a working service
  - test, stage, and production environments are always installed by the
    Docker images in dockerhub
  - docker-compose for reproducibly bringing up dev environments
- Use bash (for simple tasks) or Python 3 (for complex ones).
  - if it has more than one loop, or any data processing, it's complex
- Gitlab or Travis for build, test and deployment automation
  - the build instructions should be one command only.  If it's multiple
    commands, put it in a script.
- Ansible for remote configuration of hosts
- Terraform for remote configuration of deployment environments
- Helm for remote configuration of Kubernetes

