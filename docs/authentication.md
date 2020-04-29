# Authentication

Most of the projects requiring any sort of user authentication should use Tunnistamo.
Tunnistamo is service that authenticates users against several different identity sources,
including Espoo, Vantaa and Helsinki internal accounts, Facebook, Google and Github.
Tunnistamo also keeps a running session for the user, meaning the user won't be needing
to login again to access another service using tunnistamo.

The actual line protocols are OAuth2 and OIDC.

## Handling authentication (user login)

Actual usage is abstracted behind libraries:

Django based backends:  

JS based frontends: no specific library at the moment, would be beneficial

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
(like YLE or Facebook), if they wish to.

SPA can additionally listen for postMessage hel:logout. This is supposed to indicate that
the logout actually succeeded. (This is not actually implemented at the moment).
