# Journal backlog

## How to use this file

This file is the single source of truth for all journal entries, from first draft to published. Claude Code should read this file at the start of any session that involves the journal.

### Adding a new entry

When instructed to add an entry to the journal backlog, do the following:

1. Insert the new entry immediately after the `## Backlog` heading, above any existing entries. Entries are ordered newest first.
2. Use the entry template below exactly. Do not invent new fields or omit existing ones.
3. Set **Status** to `Draft` unless explicitly told otherwise.
4. Set **Date drafted** to today's date in YYYY-MM-DD format.
5. Set **Published** to `—` unless explicitly told otherwise.
6. Derive the **Slug** from the entry title: lowercase, spaces replaced with hyphens, no punctuation. Example: "The unglamorous work" → `/journal/the-unglamorous-work`.
7. If the content passed in is rough notes or bullet points rather than a full draft, write a proper draft in the established voice before inserting. See ## Publishing conventions below for voice and format guidance. See DECISIONS.md → ## Writing Rules for grammar and style rules.
8. If no publishing notes are provided, leave the ### Notes for publishing section with a placeholder: `No notes yet.`
9. Separate each entry with a `---` rule above the `##` heading.

### Entry template

~~~
---

## [Entry title]

**Status:** Draft / Ready to publish / Published  
**Date drafted:** YYYY-MM-DD  
**Published:** YYYY-MM-DD (or —)  
**Slug:** /journal/[url-slug]

### Notes for publishing
[Layout decisions, images needed, component variants, open questions, anything relevant to implementation. If none, write: No notes yet.]

### Draft

[Full text of the entry]
~~~

### Updating an existing entry

When instructed to update an entry — revising the draft, changing status, adding publishing notes — locate the entry by title, make only the specified changes, and leave everything else untouched.

### Marking an entry as published

When instructed to mark an entry as published:
1. Change **Status** from `Draft` or `Ready to publish` to `Published`
2. Set **Published** to the publication date in YYYY-MM-DD format
3. Do not move the entry or change its position in the file

### Status definitions

- **Draft** — entry exists but is not ready to publish. May need revision, missing images, or open decisions.
- **Ready to publish** — draft is final, publishing notes are complete, all open decisions resolved. Safe to build the page.
- **Published** — live on the site.

---

## Publishing conventions

- Format: Design journal entries written in first person, reflective voice. Sections separated by horizontal rules. Section headers are short, declarative, lowercase with no trailing period. No numbered lists in body prose — ideas run as paragraphs.
- Writing rules: see DECISIONS.md → ## Writing Rules
- Component variants: see DECISIONS.md → ## Solution Section Layout Variants & Image System
- Entries are ordered newest first on the site
- Each entry needs: a hero image or a diagram/visualization, a title, a subtitle, and a dateline

---

## Backlog

---

## The unglamorous work

**Status:** Draft  
**Date drafted:** 2026-04-16  
**Published:** —  
**Slug:** /journal/the-unglamorous-work  

### Notes for publishing
- The agentic workflow diagram (Option C / editorial style, four rows: Plan & design · Execute · Refine & redirect · QA & publish) should appear as the hero visual or inline after the "Building the pipeline" section. No lightbox needed — it contains no UI text.
- No hero image exists yet. Options: (1) use the workflow diagram as the hero, (2) a screenshot of DECISIONS.md in a code editor, (3) commission or generate a simple typographic hero. Decision deferred.
- Layout: likely Stack variant for the body, since this is a single-column narrative with no solution images. If the diagram is inline, it sits between sections as a full-width element.
- The final section ("What I'd tell someone") may need a tone revision before publishing — currently reads slightly more instructional than the rest of the piece. Consider rewriting in the same reflective voice or cutting and redistributing those ideas into earlier sections.
- Title alternative to consider before publishing: "The system is what scales" — stronger thesis statement, less self-deprecating than "The unglamorous work." Decision deferred.

### Draft

**The unglamorous work**
*On building a design system alone, fast, and with AI doing half the lifting*

---

There's a version of this post where I tell you I architected a comprehensive design system before writing a single line of code. That would be a lie. What actually happened is that I built things, broke things, noticed patterns in how I was breaking them, and wrote rules to stop breaking them the same way twice.

The design system didn't precede the work. It emerged from it.

---

**Why this is worth writing about**

Design systems are usually a team sport. You need someone to audit the existing patterns, someone to document the decisions, someone to enforce consistency, and someone to actually build the components. For a project at any real scale, those are different people with different calendars and competing priorities.

I did this alone. Not because I'm especially fast or especially talented, but because I had a workflow that compressed the handoffs.

The short version: Claude for strategy, planning, and canonical decisions. Gemini CLI for execution. Claude again for review, course correction, and anything touching deployment. Repeat until done.

What made this work wasn't the AI. It was the system I built around the AI.

---

**The file that ran the project**

Every decision that mattered went into a file called DECISIONS.md. Not a Figma library. Not a Storybook. A plain text file that lived in the project root and got read at the start of every session.

It started small. A color token here, a typography rule there. Over time it accumulated everything: which hover state we'd tried and rejected, why we'd landed on a specific breakpoint, what the image export resolution should be and why 1× wasn't good enough. Not just the answers — the reasoning behind them, and the alternatives we'd ruled out.

The file exists because AI agents have no memory between sessions. Every new session starts from zero. DECISIONS.md was the fix for that — a persistent brain that any agent could read and immediately understand the project's constraints.

But it turned out to be useful for more than that.

---

**Naming is architecture**

At some point I needed to talk precisely about layout variants — the different ways a solution section could be structured on a case study page. I had been describing them in long, clunky phrases: "two column, two solution section," "one column with the image on the right." Functional but slow. And when you're writing instructions for an AI agent, slow and imprecise produces inconsistent output.

So I named them. Split, Feature, Stack. Twelve characters total.

Split: two columns, two solutions. Feature: two columns, one solution, text left, image right. Stack: one column, one solution, full width.

That's it. Three words that now do the work of three paragraphs. When I write a prompt that says "use the Feature layout," the agent knows the column structure, the responsive behavior, the image sizing starting point, and the mobile reflow rules — because all of that is documented against that name in DECISIONS.md.

Naming isn't pedantic. It's the difference between instructions that produce consistent output and instructions that produce plausible-but-wrong output.

---

**The boring stuff is the load-bearing stuff**

Here's what the exciting version of this project looks like from the outside: a designer builds a portfolio site using AI. Here's what it actually looked like from the inside on a random Tuesday: thirty minutes debating image export resolution.

Specifically, whether 1× exports were acceptable for solution images that contain UI text, or whether 2× was mandatory. It sounds like the kind of thing you'd defer. It isn't. At 1× on a retina display, the text inside a screenshot gets soft. Not unreadable, but not crisp. And because my case studies are about content design, every screenshot has copy in it. Soft copy in a screenshot on a portfolio about writing is a problem.

So we made the rule. 2× minimum for solution images. 1× allowable for hero images where no text legibility is required. Documented. Done. Never revisited.

That's what a design system actually is, most of the time. It's a collection of decisions like that one. Individually unremarkable. Collectively, the thing that makes the product feel coherent.

---

**What the AI gave me**

Not the system. I designed the system. What the AI gave me was a partner who never got bored of the details.

You can't ask a colleague to re-implement an image sizing rule for the fourth time because the third implementation didn't account for the responsive edge case. Eventually they'll push back, reasonably. The AI won't. It will implement the rule, watch it break, hear the revised rule, implement that. No resentment, no lost context, no "I thought we already solved this."

The feedback loop got tight in a way it rarely does on real projects. Design a rule, implement it, see where it fails, revise the rule. Normally that cycle takes weeks. Here it took an afternoon.

The constraint was — and still is — that the quality of the output is exactly proportional to the quality of the system I gave it to work within. Vague instructions produce vague output. Sloppy names produce sloppy components. The AI will execute whatever you give it with equal confidence whether the instructions are good or not.

That kept me honest in a way that working alone usually doesn't.

---

**What I'd tell someone starting this**

Write the decision down before you forget why you made it. Not just what you decided — why, and what you ruled out. Future you will not remember. Future AI will not know. The file is the only thing that persists.

Name things precisely, earlier than feels necessary. The name is the interface between your intent and the agent's execution. A bad name is a broken interface.

Do the unglamorous work first. The image resolution question, the breakpoint logic, the component naming — none of it is interesting, all of it is foundational. If you defer it, you're not avoiding the work. You're just doing it later, under worse conditions, after the inconsistencies have already shipped.

The system is what scales. Not you.

---