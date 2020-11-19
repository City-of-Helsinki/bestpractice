---
name: Practices for Version Control
menu: Best practices
route: /version-control
---

# Practices for Version Control

## General Information and Practices
* We use Git for version control which is a modern distributed version control system suitable for projects of any size.
* Source code repositories are hosted on GitHub, under the organization City-of-Helsinki.
* The branching model in use for projects is Gitflow. Refer to section [Git Workflow](#git-workflow) below for a more detailed explanation.
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
This project uses the [Gitflow](https://nvie.com/posts/a-successful-git-branching-model/) workflow which is a popular [Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). The Gitflow workflow is very similar to the [Feature Branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), with the difference that it is more suitable for large and more complex projects, especially those that are in continuous development.

### How it Works

#### Develop and Master Branches
Instead of using a single master branch, Gitflow uses two separate branches; master, and develop. The master branch is used for deploying code to production and the develop branch is used for integrating new features into the code-base.

<p>
  <img width="75%" src="https://wac-cdn.atlassian.com/dam/jcr:2bef0bef-22bc-4485-94b9-a9422f70f11c/02%20(2).svg"/>
  <br />
  <em>Tags are created for each release on the master branch.</em>
</p>

#### Feature Branches
Each new feature should be developed in a separate feature branch. When a feature has been implemented the developer should create a Pull request on Github towards the develop branch. Each Pull request must be approved by at least one (1) developer before it can be merged. Please note that developers may not approve their own Pull requests.

<p>
  <img width="75%" src="https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20(2).svg"/>
</p>

#### Release Branches
Having a separate branch for each release allows us to "freeze" a release, while still enabling us to continue developing new features. Release branches are always forked off the develop branch and only bug fixes are allowed to be made on these branches. When a Release branch is considered stable a Pull request should be created towards the master branch. The Pull requests must be approved by at least one (1) developers before it is merged. Once it's ready to ship, the release branch gets merged into master and tagged with a version number. In addition, it should be merged back into develop, which may have progressed since the release was initiated.

#### Creating a Release
Create a new branch locally that branches out from the develop branch Push the new branch to Github and make a pull request for it. Make sure you set the target branch to master.

[comment]: # (TODO: Document what kind of changes are allowed in Release branches. This should probably be aligned with the changes allowed for Hotfix branches.)

<p>
  <img width="75%" src="https://wac-cdn.atlassian.com/dam/jcr:a9cea7b7-23c3-41a7-a4e0-affa053d9ea7/04%20(1).svg"/>
  <br />
  <em>Release branches allow for bug fixes before releasing to production.</em>
</p>

#### Hotfix Branches
Hotfix branches come in handy when bug fixes need to be deployed to production as soon as possible, instead of waiting for the next release. These branches are always forked off the master branch. When a Hotfix branch is considered ready a Pull request should be created towards the master branch. The Pull request must be approved by at least one (1) developers before it is merged. As soon as the fix is complete, it should be merged into both master and develop (or the current releasebranch), and master should be tagged with an updated version number.

To create a hotfix:
* Create a new branch locally that branches out from master.
* Push the new branch to Github and make a pull request for it. Make sure you set the target branch to master.

[comment]: # (TODO: Document what kind of changes are allowed in Hotfix branches.)

<p>
  <img width="75%" src="https://wac-cdn.atlassian.com/dam/jcr:61ccc620-5249-4338-be66-94d563f2843c/05%20(2).svg"/>
  <br />
  <em>Hotfix branches allow for bug fixes to the production environment.</em>
</p>

#### Naming Release and Hotfix Branches
Release branches should be named release/x.x.x, e.g. release/2.3.0. Use your own judgement on how and when to bump the different parts of the version number. Hotfix branches should be named like hotfix/x.x.x, where x.x.x is the same as the release except for the last number, which should be incremented by one.

Example:
* Someone creates a new release branch named release/2.3.0
* After the release branch has been merged into master and deployed to production, a bug is detected
* Someone creates a new hotfix branch named hotfix/2.3.1
* After the hotfix has been merged and deployed, yet another bug is detected
* Someone creates a new hotfix branch named hotfix/2.3.2

<p>
  <img width="75%" src="https://wac-cdn.atlassian.com/dam/jcr:2bef0bef-22bc-4485-94b9-a9422f70f11c/02%20(2).svg" />
  <br />
  <em>Tagging releases once a release or hotfix has been merged into master, the commit should be tagged. If the branch name was hotfix/2.3.1, the tag should be 2.3.1.</em>
</p>

**Images are licenced under [Creative Commons Attribution 2.5 Australia License](http://creativecommons.org/licenses/by/2.5/au/). Source [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).**
