---
name: Testing requirements
menu: Best practices
route: /testing-requirements
---

# Testing requirements

... or, what kind of regression tests should City of Helsinki services
have?

> well-tested program -
> adapting to all change -
> no surprises here!
-- Panu Kalliokoski, programming haikus

## Tests that should be written

- integration tests that cover the happy paths of each feature and user
  story
  - this means a program that does what the user would do (against a
    real service) and checks that what happens is what should happen
- integration or unit tests that cover forbidden behavior
  - a program that does what a hacker would do and checks that it fails
- unit tests for every method/function whose logic is "complicated"
  - "complicated" means there are at least three execution paths in the
    method/function
- integration or unit tests that provide full code coverage at least for
  all code that implements the running service
  - this is meant to exclude build-time helper scripts and similar
    stuff.  But consider testing them, too!

## Tests that would be nice

- at least rudimentary performance tests: how long does it take to load
  each view 1000 times?
  - these produce an important time series where you can find when you
    made a performance blunder
- randomised fuzz testing to see that the service doesn't break (or
  reports errors correctly)
- state invariants if your data has interdependencies
  - these can be made on database level

## How tests should be written

- Prefer integration (and e2e) tests over unit tests.
  - Use unit tests for stuff that is hard to understand even on a local
    (unit) level.
  - Integration tests are good for covering a lot of stuff quickly.
    Unit tests are good for finding exactly where a problem is.  
- Don't use mocks unless it simplifies tests considerably.  That is,
  don't redo software components in a simplified way.
  - instead, use the real components for tests, too.
  - if the real component is really hard to use, then a mock (or fake
    version) might be feasible.  Consider fixing the real component,
    though.
- Don't overtest or undertest.  (This is hard.)
  - Undertesting means that broken things go unnoticed.  Write enough
    tests to cover all execution paths and test the results are right
    from the unit/service user's point of view.
  - Overtesting means that change is hard because most of the time goes
    into fixing tests.  In the test, don't check for details that are
    irrelevant and might change.
- Use fixtures (such as prepopulated data in the database) if your tests
  need it.
  - However, don't make your tests depend very much on the detail of
    testing data.  Testing data will inevitably have to be updated
    someday.

## How to write easily testable code

- Build stateless services if you can.  Put state into specialised
  stateful services (buckets, databases).
  - This way, the state can always be initialised (by fixtures) so that
    tests work predictably.
- Use stateless handlers (pure functions/components) wherever you can.
  - Model your program as functions that process input data into output
    data.  Hoist all I/O and other interaction onto as high level in the
    program as possible.
- In UI programs, separate state handling from the rest of the program.
  - You can test your reducers (state update functions) separately if
    they are "complicated".

