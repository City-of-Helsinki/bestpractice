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
