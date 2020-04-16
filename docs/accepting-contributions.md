# Practices for Accepting Third Party Contributions

We try to be good players for the open source community and so we should
value outside contributions to our repositories.  However, contributions
vary in (end-user) value, work they require for merging, and quality.
So here are some guidelines about how to handle situations where there
is a new pull request in some of our repositories.

Always:
* Make an issue about merging the PR.
* Notify the service's PO about putting that issue into a sprint.
* Respond to the PR by making a comment.  In the comment, say that
  merging has been added on our backlog and give a pointer to the
  issue.

Some immediate checks:
* If the PR is trivial (e.g. under five changed lines, or just
  additions) and does not make anything worse, just merge it.
* If the PR doesn't merge cleanly or breaks tests, just request the
  contributor to fix it.
* If the PR does something massive but simple (such as renames), and if
  it's a good idea, try to get it merged ASAP.  Take into account how
  many merges it will break for our ongoing work.  Preferably try to
  merge it when there is no ongoing work.
* If the PR does many things that are not really connected to each
  other, request the contributor to split it into multiple independent
  PR's.  Especially if the things done in the PR are on different levels
  (some features, some renames, some trivial fixes, etc).

In backlog grooming:
* Try to make an estimate of work needed by the PR to get merged.
* If the PR makes some bigger changes, discuss whether they are wanted.
* Prioritise the PR by comparing its value to the work needed.  But
  prefer to include it in the next sprint in order to encourage further
  contributions.
* If the PR would seem to need less than one day worth of work and if
  there is space in this sprint, take it to the end of the sprint.

Some practices when reviewing and merging the PR:
* Timebox the work to one or two days.  If it takes longer, reassess the
  issue and maybe request changes from contributors.
* Go over the code and comment.  (Even if it's "LGTM".)
* If it takes only some trivial fixes to merge, the reviewer is the best
  one to do them (in order to cut down communication overhead).
* If it requires more than five fixes, just request them from the
  contributor.

