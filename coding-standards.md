# Coding standards

## Architecture target

There is a quite recent (if very ambiguous) description [in Teams](https://teams.microsoft.com/_#/apps/a2da8768-95d5-419e-9441-3b539865b118/pptx/viewer/teams/https:~2F~2Fhelsinginkaupunki.sharepoint.com~2Fsites~2FKUVAmuutostoimisto~2FJaetut%2520asiakirjat~2FDigiryhm%C3%A4n%2520kokoukset~2F2019~2F20190927~2FTavoitteet%2520-%2520Loogiset%2520arkkitehtuurit%2520-%252020190916.pptx?baseUrl=https:~2F~2Fhelsinginkaupunki.sharepoint.com~2Fsites~2Fkuvamuutostoimisto&fileId=%7BD83BB983-F9E8-403A-B11E-343CA8E55E34%7D&ctx=search&viewerAction=view&q=asiointipalveluiden%20arkkitehtuuri&threadId=19:97d0f252a1f3492696989ab9ec78ff70@thread.skype).

## Backend code standards

- The standard tech stack for the backend is Python + Django.
- Suggested versions for the new projects are Python 3.7 and Django 2.2 LTS.
- Most of the projects use [Django REST framework](https://www.django-rest-framework.org/), but currently we started also to experiment with GraphQL, using [Graphene-Django](https://docs.graphene-python.org/projects/django/en/latest/). For example, the [backend of Venepaikka project](https://github.com/city-of-helsinki/berth-reservations) uses Graphene-Django.
- We use [black](https://github.com/ambv/black) for Python code formatting. We follow the basic config, without any modifications. It should be required for new projects and is warmly welcome for the old ones.
- We also use [isort](https://github.com/timothycrosley/isort) for keeping all the imports nice and clean. To make it compatible with black add the following line either to your project's setup.cfg file's `[isort]` section or to isort.cfg: bash multi_line_output=3 include_trailing_comma=True force_grid_wrap=0 use_parentheses=True line_length=88
- Lastly, we ensure that [PEP-8 standards](https://www.python.org/dev/peps/pep-0008/) are upheld with the help of [flake8](http://flake8.pycqa.org/en/latest/).

### Python conventions

*   Use [pep8](https://www.python.org/dev/peps/pep-0008/)
    With the exceptions
    that the closing brace/bracket/parenthesis on multi-line constructs must be lined
    up under the first character of the line that starts the multi-line construct,
    and the absolute maximum line length is 119 characters
    if it increases readability.
    The recommended line length for most cases is still 79.
    https://www.python.org/dev/peps/pep-0008/#maximum-line-length

*   Write [Pythonic code](https://speakerdeck.com/pyconslides/transforming-code-into-beautiful-idiomatic-python-by-raymond-hettinger-1),
    not [Java (< 5) with pep8](https://www.youtube.com/watch?v=wf-BqAjZb8M)

    Not

    ```python
    colors = ['red', 'green', 'blue']
    for i in range(len(colors)):
        print(colors[i])
    ```

    but
 
    ```python
    for color in colors:
      print(color)
    ```
    (CC-BY-SA Raymond Hettinger)

*   Use a code style checker like [flake8](https://pypi.python.org/pypi/flake8)

*   Make [pytest](https://docs.pytest.org/en/latest/) tests,
    and run tests against latest released Python 3.

*   Use [pyenv](https://github.com/pyenv/pyenv) to install up to date (or older!) Python versions not available in your distribution repos

*   Use `pyenv virtualenv` (or `python -m venv` if not using pyenv) for creating virtualenvs, not `virtualenv` or other alternatives when using virtual environments in scripts.

*   Do not use print unless you really specifically want to print to stdout
    (for example with a cli tool).
    Write status, error, debug etc. messages using the logging module.
    This allows a main program using the code from elsewhere to configure
    the logging target (to stderr, file, syslog, or logging server).
    Do not use the warnings module.

*   Use Travis for automatic testing

*   Prepare the project for distribution in the same way as the
    [pypa sampleproject](https://github.com/pypa/sampleproject):
    Write a setup.py, setup.cfg, README.rst,
    LICENSE (in most cases the MIT license)
    and .travis.yml files,
    create a directory for tests (named `tests`),
    *but* make a top level directories for the actual package code
    named `src`, *not* [the same as the package](https://blog.ionelmc.ro/2014/05/25/python-packaging/#the-structure).
    In case the project is not a reusable part of a bigger application,
    but a standalone app requiring a more complex installation
    (like a Django project requiring a database setup etc.),
    you can skip the setup.py setup.cfg.

*   Use semantic versions

*   Use static typing for APIs instead of comments.
    That way IDEs can give better info, and we can do some static checking (so the type info will not get stale, unlike comments).

    *   Not like this:
        ```python
        def func_with_docstring(foo, bar):
            """Return the baz of foo and bar
 
            Args:
                foo: int
                bar: float
            Returns:
                float
            """
            return bar/foo
        ```

        But like this:
        ```python
        def func_with_typing(foo: int, bar: float) -> float:
            """Return the baz of foo and bar"""
            return bar/foo
        ```

    *   Use mypy for checking
    *   Use your editor tooling (for example PyCharm can benefit from types)
    *   Check
        PEP 3107 (function annotations),
        PEP 484 (defined format for annotations + comment annotations) and
        PEP 526 (syntax for variable annotations)
    *   https://github.com/zulip/zulip is and example of
        type annotated Django project.

*   Use a doctest to illustrate use and also run the doctests
    (again, so that they won't get stale).
*   Use https://docs.python.org/3/library/secrets.html for cryptographic needs, not the `random` module
*   Use whitelists for reading `POST` data to avoid mass assignment problems https://coffeeonthekeyboard.com/mass-assignment-security-part-10-855/
*   Do not use truthiness to check for existence, since values like None, False, 0, and '' will fail the check.
    *   Use `is not None` or `not in iterable_instance` and so on, as appropriate
*   Do not use assert for normal runtime checks (for example to validate incoming data)
    as they will be disabled with debug off (in cpython). Use plain ifs and then raise assertions explicitly
    *   Testing uses the assert as syntax sugar, which is fine. You don't run tests in production.
*   Do not use tuples as placeholder for lists you think will not change.
    Tuples are semantically limited in length, lists inherently might be of different length even if
    in one particular case they aren't.
    *   Compare the concepts of coordinates (always `(x, y)`, `(x, y, z)` etc.) to a list of Django plugins.
        Coordinates never have different length, that would simply be a different data type,
        but different Django projects have different length of plugin lists even if *your* app's doesn't change.


#### Hints

Try ipython for exploration, ipdb for debugging and vmprof for profiling.

#### Python Ideas

* doctests
* deployment options
    * container image
    * vagrant image
    * git clone
    * pip install from pypi
    * wheels
    * debs
    * How much Python/Django knowledge is required?
* state
    * how to handle database migrations
* docs
    * formatting (md, rst)
    * systems (sphinx, mkdocs)
    * publication (rtd.org, hel.fi)
    * API Swagger docs need to be made by hand until
      https://github.com/encode/django-rest-framework/issues/4502 is fixed
* cookiecutter
* pip-tools, prequ
* devpi for faster rebuilds
* Specifying Django settings
    * /etc, dotfile in user's home
    * ENV
    * command line options
* even Django projects should be testable
* codecov, not coveralls
* Django database settings should have timeout to handle Kubernets services being down
* check that imagemagick isn't used
* Run tests with deprecation warnings on
* https://pypi.python.org/pypi/check-manifest
* namedtuples or attrs (https://github.com/python-attrs/attrs), https://pypi.python.org/pypi/aenum
    * In Python 3.6:

        from typing import NamedTuple

        class Foo(NamedTuple):
            """Foo is a very important class and
            you should totally use it.
            """
            bar: int
            baz: int = 0

            def grand_total(self):
                return self.bar + self.baz

    * attrs:

        import attr
        @attr.s
        class Point:
            x = attr.ib(default=42)
            y = attr.ib(default=attr.Factory(list))

    * Tuples have problems where Point2D(x=12, y=15) == Time(h=12, m=15).
      See https://github.com/ericvsmith/dataclasses/blob/master/pep-xxxx.rst



## Frontend code standards

### React/JSX style guide

KuVa style guide follows [Airbnb's style guide for React/JSX](https://github.com/airbnb/javascript/blob/master/react/README.md) with few exceptions which are listed below.

Main difference between KuVa and Airbnb style guides is in the file structure.

### Folder structure

It is recommended to structure projects so that files are grouped together by feature or route. https://reactjs.org/docs/faq-structure.html

If file count in a folder starts to get out of hand, it might be better to create subfolders for that folder (check `product/` in the image below). Then again you should avoid having [too much nesting](https://reactjs.org/docs/faq-structure.html#avoid-too-much-nesting).

There is no "right" answer here so it is up to you to find the folder structure that works best for the project. As projects grow larger, it might be necessary to rearrange files into a different folder structure. So choosing the “right” one, in the beginning, isn’t very important.

```
footer/
  Footer.jsx
  Footer.test.jsx
  footer.css
user/
  UserProfile.jsx
  userProfile.css
  UserList.jsx
  userList.css
  utils.js 
product/
  page/
    ProductPage.jsx
    ProductPage.test.jsx
    productPage.css
  list/
    ProductList.jsx
    ProductList.test.jsx
    productList.css
  create/
    CreateProduct.jsx
    CreateProduct.test.jsx
    createProduct.css
  edit/
    EditProduct.jsx
    EditProduct.test.jsx
    editProduct.css
home/
  home.jsx
  home.css
```

#### Separating domain and common files

This section is based on DDD ([Domain driven design](https://techbeacon.com/app-dev-testing/get-your-feet-wet-domain-driven-design-3-guiding-principles))

The idea is that we should divide project files between `/domain` and `/common` -folders.

**Domain**: Domain files are the project specific files that are tied to the projects business logic.

**Common**: Common files are the files that aren't tied to the projects business logic. Basically, you could share these files between projects, and even maybe make them as npm packages. Though, this is not a requirement for a common file.

```
common/
  utils/
    APITools.js
  button/
    Button.tsx
    button.css
  form/
    textField/
      TextField.tsx
      textField.css
    radio/
      Radio.tsx
      radio.css

domain/
  product/
    list/
      ProductList.tsx
      productList.css
    page/
      ProductPage.tsx
      productPage.css
    productHelpers.ts
  user/
    UserPage.tsx
    userPage.css
  home/
    Home.tsx
    home.css
```


### Naming

Airbnb style guide has root component name as folder name and the folder has `index.jsx` file. This makes it possible to import the root component by just writing the folder name into import path. This is not something KuVa style guide recommends.

Example below shows the main difference between KuVa and Airbnb when importing *components*:

```javascript
// Airbnb way
import Footer from './Footer';
// Kuva way
import Footer from './footer/Footer';
```

- **Extensions**: Use .jsx or .tsx extension for React components depending on if you use TypeScript or not. eslint: [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
- **Filenames**
  - Use PascalCase for *component* and *component test* filenames. E.g., `ReservationCard.jsx`, `ReservationCard.test.jsx`.
  - Use camelCase for *style* filenames. E.g., `reservationCard.css`, `reservationCard.less`.
  - Use camelCase for *jsx* and *.tsx* files that are not component files. E.g., `index.jsx`, `helper.jsx`, `apiTools.jsx`
- **Folder name**: Use camelCase for folder names. E.g., `./reservationCard`, `./footer`.
- **Folder structure**: Group folders by features. More detailed documentation [here](frontend-folder-structure.md).
- **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```jsx
// bad
import reservationCard from './reservationCard/ReservationCard';

// good
import ReservationCard from './reservationCard/ReservationCard';

// bad
const ReservationItem = <Reservation />;

// good
const reservationItem = <Reservation />;
```

- **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of *ReservationCard*. Folder name should in most cases be the camelCase version of the component name *reservationCard*. Even though in some cases the folder name might be something more generic than the component name itself.

```javascript
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// bad
import Footer from './Footer';

// good
import Footer from './footer/Footer';
```


### General syntactic guides

- **Promises**: Try to use await/async when possible.

```javascript
// bad
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

// good
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

If you need to run the Promises in parallel, use `Promise.all()` (or `Promise.race()`).
