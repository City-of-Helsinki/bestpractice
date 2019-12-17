# Project Management Practices When Using Scrum

We use Scrum with planning, reviews, and retrospectives.  We also have
issue-specific grooming sessions to prepare for sprint plannings.

## Scrum practices

* Backlog grooming: called separately to prepare well-sized and defined tickets for next sprint.
  * split backlog items (stories) into tasks the size of at most two days.
  * people can suggest stuff for raising on the backlog.
  * will be done with small focused teams with a frontend dev, backend dev, designer and architect (and facilitator).
* Planning: one half-day (or less) to decide on what to do next sprint
  * See the sprint planning checklist below
* Reviews: one hour to show the sprint increment to stakeholders and get feedback

  * Reviews are split by the service worked on
  * This is the place to make a final check on how the sprint went
  * try to get comments and suggestions for further work
* Retrospectives: one hour to improve on ways of working
  * check on earlier retrospective items and how they are progressing
  * tell things that suck in our way of working
  * pick the most painful ones (e.g. by vote)
  * decide what is to be done about them, when and by whom

## Sprint planning checklist

Before planning:

  * Product owner has a suggestion of what to do in the next sprint
  * The suggestion adheres to the definition of ready

After planning:

  * Sprint has a goal and is named after the goal (in Jira)
  * sprint backlog is realistic
  * sprint backlog produces the most value with the current sprint: most productive issues by value of implementing the issue divided by story points
  * sprint backlog is ready for development (see the defitition of ready)
  * team has a clear view of what will be done during the next two weeks
  * issues in sprint have story points (0-7 each)
    * issues that are expected to be more than a few days' work are split into smaller ones
    * There should be 4-8 tasks per developer (as they should be of a maximum size of two days)
  * team availability has been calculated (available developer-days / full sprint developer-days)
    * full sprint worth of developer-days is typically 9 days * number of developers
  * team capacity has been calculated (team velocity * team availability)
  * sprint backlog contains team capacity worth of work
  * sprint backlog is documented in Jira

## Definition of Ready

The definition of ready (DoR) is a requirement list for an issue to consider "implementable" = developers can start work on the issue. It's the product owner's responsibility to ensure that issues fulfill the DoR when they are offered for implementation.

To be considered for implementation, an issue must have

  * For features: [see the template](https://helsinkisolutionoffice.atlassian.net/browse/KUVA-358)
    * user story: once the feature is implemented, who will be able to do what, and how?
    * description of how it works (what actually happens in the story, in a technical sense)
    * acceptance criteria
    * descriptions of handling of special situations
    * designs (for frontend/UI features)
    * state charts / flowcharts (for many-phase UI features)
    * background services needed
    * where is the information available?
    * example API calls and how to test them
    * Translations for texts (and l10n in general) (for UI features that have localisation)
    * firewall openings (for backend features)
  * For bugs:  [see the template](https://helsinkisolutionoffice.atlassian.net/browse/KUVA-359)
    * directions for reproducing the bug
    * what should have happened instead

## Definition of Done

The Definition of Done (DoD) is a specification of what needs to be done for an issue to be considered "Done" = not in need of development anymore. This page collects suggestions for items on the DoD; they are disputable and not everything applies to every issue.

To be considered Done, an issue must have

  * an implementation
  * regression tests for the happy path and most common error cases
  * documentation updated (preferably machine readable documentation; see the documentation practices)
  * accessibility taken into account (works without mouse, works with WCAG guidelines)
  * all components offered to Helsinki Design System
  * does not degrade performance (automatic tests on CI?)
  * localisation infrastructure in place for user-visible text that is in some language
  * code review done, code reviewer checklist:
    * Coding style neat
    * Test coverage ok
    * code architecture sensible
    * security handled properly (input validation etc, OWASP top 10)
    * other things in DoD done
  * UX review done (check with designer that the UI/API/whatever works as it should)
  * leftover tasks made into issues

## Responsibilities of Scrum Masters

Ensure that we follow agile principles and scrum to your best abilities:

  * Organise and facilitate scrum ceremonies: Daily Standup, Sprint planning, Sprint review and Sprint retrospective
  * Assist Product Owner with keeping backlog in order
  * If insufficient number of issues in backlog fulfill the DoR, make PO enrich them and arrange a backlog grooming/refinement for upcoming work
  * During sprint: see that the sprint is proceeding at least somewhat according to the plan; raise the issue and investigate reasons
    *   Check that reviews are being done quickly (check their WIP) - remind developers to push stuff into review, preferably f2f with the reviewer
    *   Check that PO is accepting reviewed work (check “acceptance” WIP) - remind developers to push issues into acceptance
  * Help team members keep each other accountable when reviewing stories and pull requests: Do they fulfil requirements in DoR and DoD
  * Identify, keep track of and resolve impediments (also in form of work blocked because of dependencies).

In general, see:

  * [scrum master responsibilities](https://scrummasterchecklist.org/pdf/ScrumMaster_Checklist_12_unbranded.pdf)
  * [scrum checklist](https://www.crisp.se/wp-content/uploads/2012/05/Scrum-checklist.pdf)
