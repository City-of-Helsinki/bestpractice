# Best practices

* Follow digi.hel.ninja?
* Servers
   * Tracking boxes
   * Auth
      * Login methods
      * Tracking accounts
      * pam-ssh-agent-auth
      * two factor
      * keys only, ed25519
      * https://stribika.github.io/2015/01/04/secure-secure-shell.html
   * Tracking updates
      * Policy for OS versions
      * Tracking OS deprecation
      * Ubuntu LTS
   * Monitoring
      * Server and service
      * User interaction: piwik, ga
      * Errors: sentry
      * Perf and availability
   * Abstraction level
      * Hardware
      * Paas
      * Used services (GCE, Heroku)
   * Availability requirements
   * Privilege separation
   * CD
   * Dev, beta, prod
* Coding
   * Used languages, libs and frameworks
      * Python, ES7
      * Django, DRF
   * Supported clients
      * Deprecation policy
   * Style and conventions
      * Airbnb
      * Comment language
   * Automatic checks
      * Lint
      * Tests
         * Functional, tox
         * End to end, browser testing
         * Visual tests
         * User tests
         * Bugfix includes a test for the bug
   * Supported versions
   * Logging
   * Semver
   * cookiecutter
   * External dependencies
      * Caching
      * Tracking updates
   * Distribution
      * Docker, rkt
      * Pypi
      * CI
   * Webpack vs grunt, npm vs yarn
   * UI translations
* Process
   * Method
      * Kanban/scrum
      * Peer review
         * Review queued before new tasks
      * Dev in branches
         * Rebase (or merge?), squash to sensible pieces, not in one commit
   * Meetings
      * How to have efficient meetings
   * Issue tracking
      * Not just code issues
      * Handling debt
   * Sharing knowledge
      * Scrum of scrums
   * Graphical design management
   * UX design
      * UI flow graph / state machine
      * User stories
* Docs
   * Design defense
      * Compare alternatives
   * Rudimentary performance analysis
      * Estimate of limits, biggest bottleneck
* External relations
   * Comm channel
   * Handling (pull) requests
