# Configuration for City of Helsinki Django projects

Configuration for all new projects should be done using environment variables if at all possible.

Projects should use (django-environ)[https://pypi.org/project/django-environ/] for reading environment
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


