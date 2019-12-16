# Configuration for City of Helsinki Django projects

Configuration for all new projects should be done using environment variables if at all possible.

Projects should use [django-environ](https://pypi.org/project/django-environ/) for reading environment
variables. This makes it easy to inspect available settings from settings.py

## Usage example

Specify the available variables using the `environ.Env` constructor. Include types and default values here.
This makes for a nice single-point-of-truth for available settings.

```
env = environ.Env(
    DEBUG=(bool, True),
    SECRET_KEY=(str, ''),
    ALLOWED_HOSTS=(list, []),
    ADMINS=(list, []),
    DATABASE_URL=(str, 'postgis://mvj:mvj@localhost/mvj'),
    CACHE_URL=(str, 'locmemcache://'),
    EMAIL_URL=(str, 'consolemail://'),
    SENTRY_DSN=(str, ''),
    TOKEN_AUTH_ACCEPTED_AUDIENCE=(str, ''),
    TOKEN_AUTH_ACCEPTED_SCOPE_PREFIX=(str, ''),
    TOKEN_AUTH_AUTHSERVER_URL=(str, ''),
    TOKEN_AUTH_FIELD_FOR_CONSENTS=(str, ''),
    TOKEN_AUTH_REQUIRE_SCOPE_PREFIX=(bool, True),
)
```

Access parsed values using your defined `env`. Authentication config is a typical case:

```
OIDC_API_TOKEN_AUTH = {
    'AUDIENCE': env('TOKEN_AUTH_ACCEPTED_AUDIENCE'),
    'API_SCOPE_PREFIX': env('TOKEN_AUTH_ACCEPTED_SCOPE_PREFIX'),
    'ISSUER': env('TOKEN_AUTH_AUTHSERVER_URL'),
    'API_AUTHORIZATION_FIELD': env('TOKEN_AUTH_FIELD_FOR_CONSENTS'),
    'REQUIRE_API_SCOPE_FOR_AUTHENTICATION': env('TOKEN_AUTH_REQUIRE_SCOPE_PREFIX'),
}
```

## Authentication config for APIs

Software implementing an APIs need to often need the ability to authenticate
incoming requests, fe. when personal data is requested. City of Helsinki
projects use a token authentication based on OIDC/Oauth stuff.

The software component handling this is `django-helusers`. Which needs
OIDC_API_TOKEN_AUTH dict filled as seen above. For easier operations the
configuration variables should be mapped to environment variables as seen
above.

### Meaning of the environment variables

`TOKEN_AUTH_ACCEPTED_AUDIENCE`: specifies the "aud"-field that should be
present in the token presented by the client. This is an URL identifying
a single deployment of your API software. However, it is not the url where
the API is located, but instead an identifier in the namespace used by
authentication server. For example: `https://api.hel.fi/auth/haravadev`

`TOKEN_AUTH_AUTHSERVER_URL`: specifies the URL the the authentication server
standard OIDC-endpoint. As opposed to the "accepted audience" setting, this
is a honest to goodness URL. The libraries handling OIDC will expect to find
`.well-known/openid-configuration` path under this url. Example:
`https://api.hel.fi/sso-test/openid/`

There are also other variables. I've forgotten what they mean.
