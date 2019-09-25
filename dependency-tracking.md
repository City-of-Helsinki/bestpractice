# Desired features
- support both Python and Node
- Email and slack notifications
- PR capability (creates patches with newer dependencies)
- Checks without CI (i.e. can send notifications on inactive repos)

Nice to have
- cli tool for dev/CI use (checking before pushing, seeing status in PRs)
- Nice report of all repos
- Configuration without clicking a lot in GUI
  (e.g. to change the email address for notifications)
- OSS

# Cloud dependency checkers

## nodesecurity.io
* No docs apart from frontpage
* No github integration, just asks for email to create an account.

## snyk.io
* Has PRs, can check daily or weekly. Doesn't open automatic PRs initially, has a button
* Has cli tool
* Has slack (with webhook url :( )
* Seems to have email
* Has only CLI for Python. Node has everything
* Automatically filters repos to those that can be supported
* Has a dashboard
* Just got full Python support
* Does subdependencies (called deep dependencies)
* Checks only for security problems, not all updates
* Three Python repos couldn't complete the test, refreshing didn't help. No error messages.
* Problem with Pillow CVE that is already fixed
* Uses python2.7 and installs with pip; cannot handle dependencies that require python3 or headers like gdal

## pyup.io
* Only Python
* OSS
* Can check commit status without CI
* Can make PRs to update dependencies, and can batch them or send them immediately for every update, and send only security or all updates
* Can integrate to dev and CI
* Can ask less permissions for just read access to public repos, or read/write to private (Github doesn't support read only for private repos)
* Initial pullrequest doesn't list severity, only versions and full changelogs.
* configuration with a file in repo
* Only PRs, not notifications (relies on GH sending notifications for PRs).
* Has a dashboard
* Shows all repos, not just supported ones

## requires.io
* Only Python with requirements.txt
* Can pin version ranges (like # rq.filter: >=1.8,<1.9) or exclude versions (pytest==2.8.5  # rq.filter: !=2.8.6)
* Can ask less permissions for just read access to public repos, or read/write to private (Github doesn't support read only for private repos), but does ask write permission for hooks.
* Bad docs: frontpage claimes badges, emails and PRs, but docs show only badges. Docs have nothing about digest options etc.
* Can configure global notifications for all organization repos.
* Doesn't have a dashboard showing status of all projects, but shows status of all dependencies in one project (which is crucial since PRs don't have that info).
* PRs have zero information

## david-dm
* Only supports badges, no notifications or automatic PRs

## Versioneye
* Free for max 4 OSS projects
* Says it's OSS (on about page), but no installation instructions to run on own servers

## Gemnasium
* Python, node and many others
* Slack integration, email notifications
* PRs only for Gemfiles, and hasn't changed since 2014...
* Really nice dashboard
* Doesn't warn about security problems in deep dependencies
* Doesn't recognize dev dependencies for Python

## Touchpine
* Doesn't do dependencies, is more focused on getting email for software updates (email servers, WordPress etc.)

## Libraries.io
* Didn't see repos under organization, only personal...

## Greenkeeper
* Only node
* Only does Github PRs

## sourceclear.com
* Free version has 10 scans a month, no GH integration

## Doppins.com
* node and python
* does only PRs, no notifications

# Larger code analysers

## Squale
* Not updated since 2012

## Panopticode
* SourceForge page not updated since 2014, domain dead

## Synopsys, Metrixware, CAST, Veracode
* Don't have free OSS plan, and in fact doesn' even list the price

A lot more at https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis

## SonarQube / SonarCloud, Coverity, landscape.io, scrutinizer-ci.com, codeclimate, bithound
* Integrates only via CI, doesn't check dependencies but actual code.
* Is rather like a smart linter.


+ many tools that are cli only (could integrate to CI)
