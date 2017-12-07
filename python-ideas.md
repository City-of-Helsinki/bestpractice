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
