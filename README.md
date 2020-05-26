# Best practices for developing for City of Helsinki

This documentation covers the practical details for developing open source code for the City of Helsinki. The target audience is software development consultants working for Helsinki codebases, Helsinki software development staff, and people offering contributions to Helsinki software. This documentation is produced jointly by the software developers of the Executive Office and the divisions of the city. Not all practices stated here will apply to all projects within the city but these are intended as general outlines of best practices.

The site is built with [docz](https://www.docz.site/).

## Deployments
Production environment: https://dev.hel.fi/

## Issue tracking
Jira: https://helsinkisolutionoffice.atlassian.net/projects/DEV/issues/?filter=allissues

## Contributing
See [contributing.md](.github/contributing.md)

## Development

### Run the dev env

```
# Clone the repo
git clone https://github.com/City-of-Helsinki/bestpractice.git
cd bestpractice

# Install dependencies
yarn

# Start dev server, watch for changes
yarn start
```

With your dev server up, you can access the site at http://localhost:3000/ start writing your documentation.

### Writing documentation

The documentation is written as md/mdx files in the `docs/` folder. Docz doesn't care for the subfolders, but for the sake of clarity, the folder structure should mirror the menu hierarchy. Once you create a new markdown file under `docs` it will be added in the documentation automatically (given it's valid of course).

In addition to the markdown, the file contains a frontmatter header that will be used to give the page it's settings (see [Document settings](https://www.docz.site/docs/document-settings)).

### Deployment

```
# generate static site
yarn build
```

If everything goes well, you'll find the static site at `public/`.

### App configuration

Docz configuration is handled via the [`doczrc.js`](doczrc.js). Follow the [Project Configuration reference](https://www.docz.site/docs/project-configuration).

## License
Usage is provided under the MIT License, except for the contents of the [docs](/docs) folder. The best practices documentation content found therein is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), unless noted otherwise in the documentation.

## Sources
The docz site reuses substantial parts of code from the [Helsinki Design System documentation site](https://github.com/City-of-Helsinki/helsinki-design-system/tree/master/site) codebase, also licensed under the MIT License.
