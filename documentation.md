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
