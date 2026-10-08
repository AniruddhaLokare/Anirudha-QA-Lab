ANIRUDDHA QA LAB
================

HOW TO RUN
1. Extract this folder.
2. Double-click run_portfolio.bat on Windows.
3. The portfolio opens in your default browser.

EDIT YOUR CONTENT
=================
Edit ONLY data.js for normal content changes.
You can change:
- name, role, tagline
- email, LinkedIn, GitHub, resume
- skills
- statistics
- dashboard metrics
- projects
- framework architecture
- CI/CD stages
- defect lifecycle
- portfolio test names

QA CHARACTER CREW
=================
The portfolio now includes three animated QA characters:
- Astra — Automation Engineer
- Hunter — Defect Hunter
- Pixel — CI/CD Guardian

The characters are built with HTML/CSS, so there are no external image files or dependencies.

NOTE
====
Dashboard numbers are demo metrics until you replace them with your real values.


VERSION 2 — INTERACTIVE QA CHARACTER PIPELINE
Click RUN PORTFOLIO TESTS to animate Astra, Hunter, and Pixel moving through the CI/CD stages.


VERSION 3 — INTERACTIVE REALISTIC QA STORY
==========================================
- QA characters now remain visible throughout the portfolio.
- Click each character to see their role.
- Live test execution includes 8 demo tests.
- One test intentionally fails (Profile API response).
- Hunter creates BUG-1042 and shows defect lifecycle.
- Astra applies a simulated fix.
- Hunter retests it successfully.
- Final report shows 8 passed / 0 failed after retest.
- This is a visual simulation for portfolio demonstration, not a claim that live backend tests are running.
- data.js remains the separate content file for editable portfolio text/data.


ANI CREW EDITION — BASED ON STANDALONE V3
=========================================
- No React/Vite/localhost is required.
- Open index.html directly or use run_portfolio.bat.
- Astra, Hunter and Pixel remain the original v3 QA crew.
- Ani is now a fourth QA character, not a mouse follower.
- Ani calmly walks to different areas, pauses to think, and coordinates the QA crew.
- During Run Portfolio Tests, Ani approaches Astra, Hunter and Pixel and assigns work.
- Ani intentionally stays near the lower edge so he does not sit in the middle of portfolio content.
- data.js remains the separate editable portfolio-data file.


QA TEAM + AUTOMATION LAB EDITION
================================
- Standalone v3 architecture retained: no localhost/npm required.
- Added Automation Lab before Contact.
- Contact is moved to the end when an identifiable Contact section exists.
- Ani acts as QA Lead.
- Astra, Hunter and Pixel now make occasional short movements instead of remaining static.
- QA characters occasionally talk to each other like a working QA team.
- Ambient conversations are intentionally infrequent so they do not distract the visitor.
- Automation Lab demonstrates Requirements -> Automation -> API -> Defect -> CI/CD -> Reporting.
- Characters collaborate during the lab workflow.
- Existing v3 portfolio test simulation remains.
- data.js remains the editable content file.


CORRECTED CHARACTER EDITION
===========================
- Uses the ORIGINAL v3 Astra, Hunter and Pixel character elements already in the portfolio.
- Does NOT create duplicate Astra/Hunter/Pixel characters.
- Adds only Ani as the fourth QA Lead character, matching the supplied cyan QA robot design.
- Dialogue bubbles are dynamically anchored above the character who is speaking.
- Original crew characters make only small temporary movements.
- Ani walks short distances, thinks, coordinates the team and participates in test/lab stories.
- Standalone architecture retained: index.html + data.js + run_portfolio.bat; no localhost.


BUBBLE + SECTION ORDER FIX
==========================
- Speech bubbles are now measured and centered over the active speaker.
- Bubble width reduced to avoid covering the whole character group.
- Added a speech-tail pointer toward the speaking character.
- Astra and Pixel temporarily spread outward during Live Portfolio Test Execution.
- Original crew positions are restored after execution.
- Live Portfolio Test Execution is moved directly above Contact when detected.
- Contact remains the final portfolio section.


PROFESSIONAL PROFILE UPDATE
===========================
Portfolio content has been updated from the supplied resume.
Added Experience & Impact section with banking/enterprise and telecom automation experience.
Actual resume is included as Aniruddha_Lokare_Resume.pdf.
Contact remains the final section.
Demo dashboard metrics remain explicitly demo/simulation values.


INTERACTIVE QA CASE STUDIES
===========================
Added four interviewer-focused case studies:
1. Playwright + TypeScript POM Framework
2. Enterprise Regression Automation
3. API, SQL & Backend Quality Validation
4. Telecom UFT Automation Suite

Each case study follows Challenge -> Approach -> Architecture/Automation -> Validation -> CI/CD -> Impact.
Content is grounded in the supplied professional resume; no invented employer/project metrics were added.
Contact remains the final section.


FINAL VISUAL LAYOUT PASS
========================
Rebuilt from the clean Interactive QA Case Studies base instead of accumulated spacing patches.
Order: About -> Experience -> Case Studies -> Skills -> Projects -> Framework -> Automation Lab -> Live Portfolio Test Execution -> Contact.
One consistent spacing system and one safe transition system are used.
All reveal sections remain visible by default.


AUTOMATION LAB ALIGNMENT + QA TEAM BONDING
==========================================
- Automation Lab converted to a precise 3-column x 2-row CSS grid.
- All six module cards now have identical dimensions and equal spacing.
- Existing Ani/Astra/Hunter/Pixel characters are reused; no duplicate crew added.
- Added several professional QA-team conversation scenarios.
- Conversations cover stand-ups, risk analysis, negative testing, defect handoff, CI/CD retest, regression, maintainability and release sign-off.
- Conversation frequency is intentionally moderate to avoid distracting interviewers.

FUNCTIONAL POLISH v1
- Removed conflicting secondary speech controller.
- Uses original three QA characters.
- Refined Automation Lab grid and responsive sizing.

CASE STUDIES EXPANDED UPDATE
- Removed the requested case-study disclaimer line.
- Expanded case studies layout, typography and cards.
- Removed demo-only QA Dashboard section and its JavaScript bindings.

RECRUITER READY v2
- Mobile navigation menu and keyboard-operable QA Crew dock.
- Single shared speech bubble used by simulation; no duplicate fixed popup.
- Demo clearly labeled; simulated metrics not represented as actual tests.
- Resume download; GitHub hidden until a real link is configured in data.js.
- Both run buttons trigger interactive QA simulation.
