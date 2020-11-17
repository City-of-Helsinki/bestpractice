---
name: Authentication
menu: Best practices
route: /authentication
---

# Authentication

Most of the projects requiring any sort of user authentication should use Tunnistamo.
Tunnistamo is a service that authenticates users against several different identity sources,
including Espoo, Vantaa and Helsinki internal accounts, Facebook, Google and Github.
Tunnistamo also keeps a running session for the user, meaning the user won't be needing
to login again to access another service using tunnistamo.

The actual line protocols are OAuth2 and OIDC. New applications should always use OIDC.

*Nomenclature alert*: Tunnistamo will soon be changing names, as the implementation will switch from your own implementation (named "tunnistamo") to Keycloak based implementation. Keeping the same name would be too confusing. We're not sure of the upcoming name yet.

## Getting necessary Tunnistamo identifiers

To get started you will either need a locally setup instance of Tunnistamo or get access to one of shared instances available within Helsinki infrastructure. It is recommended that you try and get access to the shared instances, unless you must develop offline. 

Current instances are:
* Kanslia (executive office) instance: default instance used by projects, both during development and production
* KuVa (culture and leisure) instance: instance used by KuVa projects during their development. Very flexible registration

To get access to Kanslia instance, pop by the slack channel #tunnistamo.
For KuVa instance the onboarding process has already told you the right channels.

Things can be faster if you can include in your initial message:
* responsible person for your application
* your OpenID Connect flow type. Currently we can only support "Authorization Code" and "Implicit" flow types.
* your callback url

Flow type depends on your application. Typically, if your application has some sort of backend running server-side, you will be using Authorization Code flow. Conversely, if your application exists only as Javascript files served to the client browser ("SPA"), you will be using Implicit flow. Implicit flow has some security weaknesses, and is being replaced by "Authorization code flow with PKCE". We unfortunately cannot support it yet.

Callback URL is the address within your application for finalizing the authentication. You will have at least two callbacks:
* one within "localhost", for using on your local development box
* one or more, that refer to public instances of your application

As a concrete result you will have three pieces of data:
* the URL for your tunnistamo instance (like https://api.hel.fi/sso/, the executive office instance)
* your client ID
* your client secret (only for Authorization Code flow)

Armed with those, and knowledge of your callback URL, you can begin attaching authentication to your application.

## Handling authentication (user login)

Actual usage is abstracted behind libraries:

Django based backends: [django-helusers](https://github.com/City-of-Helsinki/django-helusers)

JS based frontends: no specific library at the moment, would be beneficial

For django-helusers, the README should get you up and running. For JS frontends you will currently have to ask around, Google and look into other JS projects within github.com/City-of-Helsinki

## Logout

Logout on SSO systems is always kind of tricky. Do you want to only close the session in
your application and purge any ephemeral state? In that case user will be automatically
logged back in through their tunnistamo session, should they press login again.

The more thorough logout is to call tunnistamo logout. This has been woefully 
undocumented. Currently suggested procedure is:

1. Destroy any local state (tokens usw.)
1. Open a popup to the OIDC end_session_endpoint available through OIDC discovery document
   (https://api.hel.fi/sso/.well-known/openid-configuration ). You can use this regardless
   of whether your application uses OAuth2 or OIDC.
1. SSO will include a code in the popup that will close it automatically

The authentication libraries you use might handle all these steps automatically.

The logout popup will inform the user that they will need to log out of any upstream IdPs
(like YLE or Facebook), if they are on shared computer.

SPA can additionally listen for postMessage hel:logout. This is supposed to indicate that
the logout actually succeeded. (This is not actually implemented at the moment).
