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
   * HTTP
      * HTTP/2
      * OCSP Expect-Staple (and Must-Staple)
      * Certificate Transparency monitoring
      * Certificate Authority Authorization
   * Abstraction level
      * Hardware
      * Paas
      * Used services (GCE, Heroku)
   * Availability requirements
   * Privilege separation
   * CD
   * Automatic branches for PRs, automatic master to dev, manual promotes to test and prod
   * Store passwords with argon2i, or bcrypt for legacy (argon2 is better against FPGAs) —
     PBKDF2 and SHA256 are too easy to crack on 32bit GPUs, SHA512 on 64bit GPUs,
     and scrypt requires too much resources on multi user machines and has TMTOs
   * Be sure that your random source is appropriate for cryptography, when necessary
     (most aren't, and are instead fast, physically random or have some other goals)
* Coding
   * Used languages, libs and frameworks: see [tech choices](./technology-choices.md)
   * Supported clients
      * Deprecation policy
   * Style and conventions: see [coding standards](./coding-standards.md)
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
   * Distribution: see [tech choices](./technology-choices.md)
   * UI translations
   * github specials
      * technology and concept topics
      * quite a few tools specific to github
      * like indentations in this list
   * feature flags
   * Do not commit commented code, just remove it
      * This happens often when you "try things out", but eventually you should choose one way
      * Old versions belong to version control history
      * If you really need alternative implementations, use feature flags, command line options etc.
        and document them (with the raison d'être)
   * Don't duplicate/repeat code (like use two functions for almost same things)
     aka DRY (Do not Repeat Yourself)
      * Especially do not do things *almost* the same so that it's difficult to see the difference
      * Multiple implementations double the number of bugs,
        and make it harder to compose a mental model of the whole
   * Counter to DRY – do not create elaborate architectures prematurely. Use refactoring when needed.
* Process
   * Method
      * Kanban/scrum
      * Peer review
         * Review queued before new tasks
         * Review guide, list of things to check for
            * Passing automatic stuff (CI/tests/lint)
            * Verify visual changes match design (if using visual diffs)
            * Race conditions
            * Input handling/escaping
            * OWASP
         * Reviewer (autosquashes,) rebases and merges
         * https://web.archive.org/web/20151009202810/http://smartbear.com/all-resources/articles/best-practices-for-peer-code-review/
           * Try to make PRs of less than 400 lines
           * Don't do review mork for more than hour at a time
           * Make/improve checklists
      * Dev in branches
         * Use master, not develop (don't leave master empty or delete it, just use it)
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
* Licenses
   * Just use MIT
   * Unless specific reasons (have to use license-incompatible components?)
* Docs
   * Create automatically when possible
   * Design defense
      * Compare alternatives
   * Rudimentary performance analysis
      * Estimate of limits, biggest bottleneck
* External relations
   * Comm channel
   * Handling (pull) requests
   * Document contribution protocol in every README.md
   * Clear way to communicate security problems
* OWASP
   * https://www.owasp.org/index.php/Category:OWASP_Code_Review_Project has 2.0 in August
   * https://www.owasp.org/index.php/Category:OWASP_Testing_Project
   * https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
   * https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet
   * https://www.owasp.org/index.php/Category:Cheatsheets
   * https://www.owasp.org/index.php/Mass_Assignment_Cheat_Sheet
* Threat modeling
