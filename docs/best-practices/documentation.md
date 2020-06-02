---
name: Documentation practices
menu: Best practices
route: /documentation
---

# Documentation practices

## What should README.md contain?
* Short description of what the service or product is
* Installation instructions
  * How to run the software from the ready-made Docker image
  * Prerequisites
  * How to get the software up and running locally
  * Dependent services needed to run (pointers)
  * Configuration instructions
* How to enable debug output
* Links to public information
  * Where the issue tracking is i.e. link to backlog
  * API documentation (OpenAPI / GraphiQL)
  * Whether builds are working or failing
  * Links to CI/CD and monitoring dashboards
* How to contribute to the software (PR and whom to contact if it's not getting merged), can be a separate CONTRIBUTING.md
* Contact points, people responsible or a role (email?) address for its developers - e.g. service-dev@hel.fi.
* Open dev / test / staging / production environments (to try it out)
  * Frontend links to "normal user" and staff / admin user entry points
  * Backend links to interactive API browser (swagger/GraphiQL/Django's API browser)
* Connected services (dependents and dependees)

## What should CONTRIBUTING.md contain?
Example template:

```
Contributions are accepted as pull requests.  Please observe our coding
practices at https://github.com/City-of-Helsinki/bestpractice/ .
Please make your pull requests short, elegant and only handling one
issue at a time!
 
If you make a pull request, you may also want to contact
<INSERT SERVICE'S ROLE ADDRESS> to tell about your contribution.
 
Our contribution handling guidelines are at
https://github.com/City-of-Helsinki/bestpractice/blob/master/accepting-contributions.md
```

Also see the contributing.md of [this developer site](https://github.com/City-of-Helsinki/bestpractice/blob/master/.github/contributing.md).

## GitHub templates
Templates for [pull requests](https://github.com/City-of-Helsinki/bestpractice/blob/master/.github/pull_request_template.md), [bug reports](https://github.com/City-of-Helsinki/bestpractice/blob/master/.github/ISSUE_TEMPLATE/bug_report.md) and [feature requests](https://github.com/City-of-Helsinki/bestpractice/blob/master/.github/ISSUE_TEMPLATE/feature_request.md) can be found [in the repository](https://github.com/City-of-Helsinki/bestpractice/tree/master/.github). Modify these to suit the project if needed. Read more about templates on [GitHub](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates).

### Pull request template

```
## Description

## Issues
### Closes
**[DEV-XXX](https://helsinkisolutionoffice.atlassian.net/browse/DEV-XXX):** 

### Related

## Testin
### Automated tests

### Manual testing

## Screenshots

## Additional notes

```

### Bug report
```
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.

```

### Feature request
```
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.

```
