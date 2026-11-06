---
name: career-roadmaps
description: Standards and requirements for all roadmaps in this repo. Use when you edit, create, or update a roadmap.
---

# General Idea
These Roadmaps are built for people who have some degree in engineering or another STEM field.
The general idea is to recommend future profiles with high demand in the medium term (2 to 5 years aprox) and the long term (5 to 10 years or to 15 years aprox).

# How to Do It
To do that, we present roadmaps in the style of university career paths, made up of Courses, Phases (like university semesters, but each Phase lasts 3 months and contains a few Courses), and Roadmaps/Careers (each with several Phases). Every Course has optional prerequisites; take care to respect them.

# Composition of Roadmaps
The roadmaps are career paths, each with an interactive prerequisite graph and a long-form reference document, plus a career-strategy essay that argues which path to commit to. Every path has Specializations when necessary. It is normal for some paths to share courses, since roadmaps sometimes have shared knowledge. However, if more than 50% of a roadmap is shared with another, it may be a specialization of that Roadmap. Merge them into one if necessary.
The hierarchy is Roadmap (a few roadmaps) -> Specialization (2 to 4 per Roadmap) -> Phase (5 to 8 per Specialization) -> Course (2 to 5 per Phase).

# Objective
The generated roadmaps must be usable by people to study and acquire the knowledge and valuable skills needed to perform in that area/roadmap.
Every Course must include a reference for how to acquire the knowledge: books, courses, videos, etc. Present the best match.
Classify every course in critical, desirable or frontier, for every Roadmap.

# Optional
Based on current knowledge of the market, try to identify the most useful knowledge for every roadmap.
Before making any claim about market demand, read `references/market-sources.md` and follow its usage rules.

# Naming the Knowledge, Not the Reading
A reader who finishes a course must know *what they now understand*, not merely *what they opened*. Two rules follow, and they apply to every course in every roadmap and in every `*_malla.js` `res` string.

**Resources must say which knowledge they carry.** A reference to a body of material (official documentation, a user guide, a reference manual, a labs site, a video channel, a long book) is useless on its own, because the reader cannot tell which part of it is the point. Every such resource carries a `why:` clause that names the specific concepts to take from it, and where it helps, what to leave alone:

    - PostgreSQL docs (free), why: indexes, EXPLAIN plans and MVCC; the administration chapters are not the point

A finite, self-describing unit (a single named course, one paper, one talk, a book read for its whole argument) does not need the clause. Never write "visit", "browse", "see the documentation" or "follow the guide": those tell the reader to go somewhere instead of telling them what to learn.

**`Study approach` states the knowledge, not a reading order.** It is not a sequence of resources ("read X cover to cover, then take Y"), and it is not a checklist of tasks. It explains the concepts the course is built on, why each one matters, what breaks when it is missing, and what is safe to skip. A reader should finish the paragraph able to say what the course is *about* before touching any resource. Resources may be named inside it only when a specific one is the right instrument for a specific idea.

Both fields are prose, not lists, so that the reader ends up understanding the subject rather than following instructions.
