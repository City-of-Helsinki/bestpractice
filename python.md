### Python conventions

* Use [pep8](https://www.python.org/dev/peps/pep-0008/)

* Write [Pythonic code](https://speakerdeck.com/pyconslides/transforming-code-into-beautiful-idiomatic-python-by-raymond-hettinger-1),
  not [Java with pep8](https://www.youtube.com/watch?v=wf-BqAjZb8M)

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

* Use a code style checker like [flake8](https://pypi.python.org/pypi/flake8)

* Make [py.test](https://docs.pytest.org/en/latest/) tests,
  and run tests against latest released Python 3 and optionally pypy
  using [tox](https://tox.readthedocs.io/en/latest/).

* Use [pyenv](https://github.com/pyenv/pyenv) to install up to date (or older!) Python versions not available in your distribution repos

* Use `pyenv virtualenv` (or `python -m venv` if not using pyenv) for creating virtualenvs, not `virtualenv` or other alternatives when using virtual environments in scripts.

* Do not use print unless you really specifically want to print to stdout
  (for example with a cli tool).
  Write status, error, debug etc. messages using the logging module.
  This allows a main program using the code from elsewhere to configure
  the logging target (to stderr, file, syslog, or logging server).
  Do not use the warnings module.

* Use Travis for automatic testing

* Prepare the project for distribution in the same way as the
  [pypa sampleproject](https://github.com/pypa/sampleproject):
  Write a setup.py, setup.cfg, README.rst, LICENSE.txt and .travis.yml files,
  create a directory for tests (named `tests`),
  *but* make a top level directories for the actual package code
  named `src`, *not* [the same as the package](https://blog.ionelmc.ro/2014/05/25/python-packaging/#the-structurehttps://blog.ionelmc.ro/2014/05/25/python-packaging/#the-structure).

* Use semantic versions

#### Hints

Try ipython for exploration, ipdb for debugging and vmprof for profiling.
