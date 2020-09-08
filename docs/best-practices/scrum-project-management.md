---
name: Project management practices when using Scrum
menu: Best practices
route: /scrum-project-management
---

# Project management practices when using Scrum

We use Scrum with planning, reviews, retrospectives and dailies.  We also have
issue-specific refinement sessions to prepare for Sprint Plannings.

## Scrum practices

* Product Backlog Refinement: called separately to prepare well-sized and defined tickets for next sprint.
  * Split Product Backlog Items (stories) into tasks the size of at most two days.
  * People can suggest stuff for raising on the backlog.
  * Will be done with small focused teams with a frontend dev, backend dev, designer and architect (and facilitator).
* Sprint Planning: one half-day (or less) to decide on what to do next sprint
  * See the Sprint Planning checklist below
* Sprint Review: one hour to show the sprint increment to stakeholders and get feedback
  * Reviews are split by the service worked on
  * This is the place to make a final check on how the sprint went
  * Try to get comments and suggestions for further work
* Sprint Retrospective: one hour to improve on ways of working
  * Check on earlier retrospective items and how they are progressing
  * Tell things that suck in our way of working
  * Pick the most painful ones (e.g. by vote)
  * Decide what is to be done about them, when and by whom
 * Daily Scrum: 15 minutes (or less) for the development team to plan the work for the day.
   * For example, the Development Team members can each answer these 3 questions:
     * What did I do yesterday to help the Development Team meet the Sprint Goal?
     * What will I do today to help the Development Team meet the Sprint Goal?
     * Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?

## Sprint Planning checklist

Before planning:
  * Product owner has a suggestion of what to do in the next sprint
  * The suggestion adheres to the definition of ready
After planning:
  * Sprint has a goal and is named after the goal (in Jira)
  * Sprint backlog is realistic
  * Sprint backlog produces the most value with the current sprint: most productive issues by value of implementing the issue divided by story points
  * Sprint backlog is ready for development (see the defitition of ready)
  * Team has a clear view of what will be done during the next two weeks
  * Issues in sprint have story points (0-7 each)
    * Issues that are expected to be more than a few days' work are split into smaller ones
    * There should be 4-8 tasks per developer (as they should be of a maximum size of two days)
  * Team availability has been calculated (available developer-days / full sprint developer-days)
    * Full sprint worth of developer-days is typically 9 days * number of developers
  * Team capacity has been calculated (team velocity * team availability)
  * Sprint backlog contains team capacity worth of work
  * Sprint backlog is documented in Jira

## Definition of Ready

The definition of ready (DoR) is a requirement list for an issue to consider "implementable" = developers can start work on the issue. It's the product owner's responsibility to ensure that issues fulfill the DoR when they are offered for implementation.

To be considered for implementation, an issue must have

  * For features: [see the template](https://helsinkisolutionoffice.atlassian.net/browse/KUVA-358)
    * User story: once the feature is implemented, who will be able to do what, and how?
    * Description of how it works (what actually happens in the story, in a technical sense)
    * Acceptance criteria
    * Descriptions of handling of special situations
    * Designs (for frontend/UI features)
    * State charts / flowcharts (for many-phase UI features)
    * Background services needed
    * Where is the information available?
    * Example API calls and how to test them
    * Translations for texts (and l10n in general) (for UI features that have localisation)
    * Firewall openings (for backend features)
  * For bugs:  [see the template](https://helsinkisolutionoffice.atlassian.net/browse/KUVA-359)
    * Directions for reproducing the bug
    * What should have happened instead

## Definition of Done

The Definition of Done (DoD) is a specification of what needs to be done for an issue to be considered "Done" = not in need of development anymore. This document collects suggestions for items on the DoD; they are disputable and not everything applies to every issue.

To be considered Done, an issue must have

  * An implementation
  * [Regression tests](./testing-requirements) for the happy path and most common error cases
  * [Documentation](./documentation) updated (preferably machine readable documentation)
  * Accessibility taken into account (works without mouse, works with WCAG guidelines)
  * All components offered to Helsinki Design System
  * Does not degrade performance (preferably verified by automatic tests on CI)
  * Localisation infrastructure in place for user-visible text that is in some language
  * Has testing instructions
  * Code review done, code reviewer checklist:
    * Works (by trying it out with the testing instructions)
    * Coding style neat
    * [Coding standards](./coding-standards) obeyed
    * [Test coverage](./testing-requirements) ok
    * Code architecture sensible
    * Security handled properly (input validation etc, OWASP top 10)
    * Other things in DoD done
  * UX/PO review done (see "who should do acceptance reviews")
  * Leftover tasks made into issues

### Who should do acceptance reviews?

  * FE tasks => designer and PO (really, both, not just one of them)
  * BE tasks => architect and FE developer
  * design tasks => PO and FE developer
  * technical improvements => only code review

## Responsibilities of Scrum Masters

Ensure that we follow agile principles and scrum to your best abilities:

  * Organise and facilitate Scrum events: Daily Scrum, Sprint Planning, Sprint Review and Sprint Retrospective
  * Assist Product Owner with keeping the Product Backlog in order
  * If insufficient number of issues in backlog fulfill the DoR, make PO enrich them and arrange a backlog refinement for upcoming work
  * During sprint: see that the sprint is proceeding at least somewhat according to the plan; raise the issue and investigate reasons
    *   Check that reviews are being done quickly (check their WIP) - remind developers to push stuff into review, preferably f2f with the reviewer
    *   Check that PO is accepting reviewed work (check “acceptance” WIP) - remind developers to push issues into acceptance
  * Help team members keep each other accountable when reviewing stories and pull requests: Do they fulfil requirements in DoR and DoD
  * Identify, keep track of and resolve impediments (also in form of work blocked because of dependencies).

In general, see:

  * [scrum master responsibilities](https://scrummasterchecklist.org/pdf/ScrumMaster_Checklist_12_unbranded.pdf)
  * [scrum checklist](https://www.crisp.se/wp-content/uploads/2012/05/Scrum-checklist.pdf)
