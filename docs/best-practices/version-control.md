---
name: Practices for Version Control
menu: Best practices
route: /version-control
---

# Practices for Version Control

## General Information and Practices
* We use Git for version control which is a modern distributed version control system suitable for projects of any size.
* Source code repositories are hosted on GitHub, under the organization City-of-Helsinki.
* The branching model in use for projects is GitHub flow. Refer to section [Git Workflow](#git-workflow) below for a more detailed explanation.
* Releases are versioned using [semantic versioning](https://semver.org).
  * Note that "API changes" means e.g. breaking URL's that used to work!
* Document changes in a changelog that is called `CHANGELOG.md` and resides at the root of your repository. [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) offers a good model for informing users about changes in a release.

### Commits, Pull Requests and Messages
* Commit as often as possible, but usually not when the code is broken (doesn't work)
  * so try to arrange your changes into small self-contained and minimal commits that keep everything working
* Write commit messages in the following manner
  * Mention the Jira issue key (KUVA-3, for instance) in the commit message
    * A good place for the key is the beginning of the commit message title (ie. the first line of the commit message). This way the key will also be visible in short-format git logs.
  * In the title, write a very short summary of _what_ was done
  * In the commit message body, specify _why_ the change was done (what it will change as result) and why it was implemented in this way
* We have the Github Jira integration which does some magic linking if you mention issues in commit messages, PR's, branch names or Github issues.
  * You can also use commit messages to update Jira issues as mentioned in Smart commits documentation.
* Arrange your work so that it's made in the smallest possible useful increments, and make pull requests out of those.
  * Mention the Jira issue in the PR name.

### Code Reviews
* Code reviews are done as part of normal issue handling.
* Every pull request should be reviewed by at least one other developer.
* Any developer can (and should) do code reviews before taking on new work.
* After doing a review, you should ensure that it gets past acceptance and testing. This means notifying the ticket creator, service owner, or an end user and ensuring they can test that the feature works as it should.

[Accepting outsider contributions](./accepting-contributions.md) has its own instructions.

## Git Workflow
Branching model is [GitHub flow](https://guides.github.com/pdfs/githubflow-online.pdf)

### How it Works

* We only have `master` and feature branches
* Test/staging env runs `master` branch
* We merge the feature branches to `master`
* When we release, we create a tag to `master` branch
* Feature flags are used to hide unfinished features to keep master deployable

#### Creating a Release

* Create a tag `release-x.x.x` to `master` branch

#### Creating a Hotfix

In general hotfixes should be avoided, but there can be emergency cases where a critical bug is found from production and for some reason `master` is not deployable.
* Create a branch from release tag `git checkout -b hotfix/release-x.x.x release-x.x.x`
* Implement emergency fix to that branch (cherry pick from `master` or make a new commit if you cannot cherry pick)
  * If you cannot cherry pick, the fix needs to be implemented to `master` as a new commit also
* Tag the hotfix branch to get it deployed, tag name: `release-x.x.x-hotfix`
* Never merge the hotfix branch (just leave it there or eventually delete it)
