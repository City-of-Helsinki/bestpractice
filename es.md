### ECMAScript/JS conventions

*   ES7 (with babel and polyfills), not Flow or TypeScript
*   eslint with airbnb style guide
*   yarn and webpack, not bower or grunt
    *   Additional webpack modules need to go through architecture review
*   piwik for analytics and Sentry for error tracking
*   travis for CI
*   Use browserstack/saucelabs or similar to test mainstream browsers and devices
*   Create a visual style guide with the UI components
    *   Test the components visually with gemini
    *   A single page with all the components for human consumption,
      separate pages with component per page for CI
*   process.env can be read only from one file,
    separate ENVs that are read only build time and those that are read runtime
*   Avoid using target="\_blank", and if you do, use noreferrer and noopener
*   Do not include node\_modules in source.
    If you need to build something custom, built it properly so that any (sub)dependencies
    do not get locked.
    If you need to patch upstream versions, make PRs upstream and document the related PR to
    the repo so that the hacked version can be changed back to the official one later.
*   [Use await/async instead of Promises](https://mathiasbynens.be/notes/async-stack-traces).

    Not

    ```javascript
    const fetchAndDisplay = ({ url, element }) => {
      showLoadingSpinner();
      fetch(url)
        .then((response) => response.text())
        .then((text) => {
          element.textContent = text;
        })
        .catch((error) => {
          element.textContent = error.message;
        })
        .finally(() => {
          hideLoadingSpinner();
        });
    };
    ```

    but

    ```javascript
    const fetchAndDisplay = async ({ url, element }) => {
      showLoadingSpinner();
      try {
        const response = await fetch(url);
        const text = await response.text();
        element.textContent = text;
      } catch (error) {
        element.textContent = error.message;
      } finally {
        hideLoadingSpinner();
      }
    };
    ```

    Use `finally` to avoid code duplication and to semantically
    separate cleanup from the other parts.

    If you need to run the Promises in parallel,
    create the promises first and then await for them in a loop,
    or use Promise.all() (or .race()).

    If for some reason you really do need to use the Promise API directly,
    beware [the various gotchas](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
    like promise results falling through `.then`s when the `.then` doesn't get a function,
    or how the error handler in `.then` doesn't catch errors coming from the result handler in the same `.then`.
    And especially always catch the errors, as otherwise they will go to a black hole and you'll never hear from them (at least write a `.catch(console.log.bind(console))`).


#### React

*   react-intl for translations
*   redux as the store
*   redux-actions
*   redux-promise, saga or thunk (needs comments)
*   Separate API HTTP calls to a separate module/file
*   Put component specific styling next to component ES code using webpack css-loader
*   export defaults with same name as the file
  (or the containing folder if using index.js inside a component folder)
*   Write tests with jest, chai and enzyme

### Open issues / ideas

*   Chrome Lighthouse (analyses, but are weak points worth pursuing?)
