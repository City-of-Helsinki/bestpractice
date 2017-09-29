### ECMAScript/JS conventions

* ES7 (with babel and polyfills), not Flow or TypeScript
* eslint with airbnb style guide
* yarn and webpack, not bower or grunt
    * Additional webpack modules need to go through architecture review
* piwik for analytics and Sentry for error tracking
* travis for CI
* Use browserstack/saucelabs or similar to test mainstream browsers and devices
* Create a visual style guide with the UI components
    * Test the components visually with gemini
    * A single page with all the components for human consumption,
      separate pages with component per page for CI
* process.env can be read only from one file,
  separate ENVs that are read only build time and those that are read runtime
* Avoid using target="\_blank", and if you do, use noreferrer and noopener


#### React

* react-intl for translations
* redux as the store
* redux-actions
* redux-promise, saga or thunk (needs comments)
* Separate API HTTP calls to a separate module/file
* Put component specific styling next to component ES code using webpack css-loader
* export defaults with same name as the file
  (or the containing folder if using index.js inside a component folder)
* Write tests with jest, chai and enzyme

### Open issues / ideas

* Chrome Lighthouse (analyses, but are weak points worth pursuing?)
