## Project-section update

The Projects section now uses the supplied eight-page `Ismail_Akinwale_BA_Project_Portfolio.pdf` as its primary source, packaged unchanged as `assets/Ismail-Akinwale-Project-Portfolio.pdf`. It contains six projects: HMRC GDPR (p.2), HMRC DWIT/HIP (p.3), Accenture DPS (p.4), Barclays (p.5), Octopus Energy (p.6), and NHS EPR (p.7). Each includes the documented challenge, contributions, outputs, reported outcome and applied skills. Accenture includes the documented process controls. These replace the earlier CV-inferred project framing; metrics remain self-reported and not independently verified. The CV remains the source for other website sections. The new source PDF retains its original contact details. For any adaptation, use the current `case-studies.json` and HTML over the earlier five-project descriptions below.

When rebuilding in Lovable, include all six current JSON records, preserve document-source labels and page links, and do not restore the earlier inferred-framing labels. Include the project portfolio PDF alongside the CV and portrait.

# Ready-to-paste Lovable prompt

Create a professional, responsive portfolio for **Ismail Akinwale, Senior Business Analyst**. Use my attached portfolio HTML, stylesheet, JavaScript, case-studies JSON, original CV and portrait as the design and content source. Recreate it as a clean React/TypeScript project using your supported tooling. Preserve the content and evidence labels exactly; adapt implementation rather than inventing new biography. If attachments are unavailable, use the following brief and ask me to provide the original portrait and CV rather than substituting placeholders or unrelated images.

Design: crisp white background, deep navy #102d39, dark teal #106759, mint #94e4d6 accents and light blue-grey #f1f6f7 section backgrounds. Use generous whitespace, restrained borders and strong editorial typography. Hero headline: “Turning complexity into clear direction.” Use italic serif styling for “clear direction.” Keep body text in a readable sans serif. Present the supplied portrait in an arch-topped image panel with a navy caption area. Use subtle hover changes, with reduced-motion support. Do not add stock imagery, gradients, testimonials, fake logos or decorative dashboards.

Build these sections in order:

1. Header with IA monogram, name, role and navigation. Accessible mobile menu with expanded state, Escape dismissal and keyboard focus.
2. Home/Hero: “I’m Ismail Akinwale, a Senior Business Analyst connecting business needs, people and technology to deliver meaningful change.” State 9+ years of experience as reported in the CV. Actions: Explore my work and Download CV.
3. About: requirements engineering, stakeholder workshops, process mapping, impact assessment and solution validation across government, consulting, financial services, energy and healthcare. Explain connecting business, operational and technical teams. No invented personal narrative.
4. Experience timeline, all contract roles:
   - HMRC, Telford: Senior Business Analyst, July 2022–Present (Present follows the CV).
   - Accenture, Manchester: Business Process Analyst, January 2021–July 2022.
   - Barclays, London: Business Analyst, August 2019–December 2020.
   - Octopus Energy, London: Digital Business Analyst | Agile product delivery, September 2018–July 2019.
   - Black Country Healthcare NHS Foundation Trust, West Bromwich: Business Analyst, June 2017–August 2018. Retain employer naming as supplied in the CV.
5. Six project case studies using the complete current `case-studies.json`: HMRC GDPR deletion and retention; HMRC DWIT data migration and HIP integration; Accenture DPS impacting process; Barclays credit-limit decisions; Octopus smart meter installations; NHS EPR requirements and procurement. Preserve every project's documented challenge, contributions, analysis outputs, outcome and applied skills. Include Accenture's bottleneck-to-control details. Use the supplied project portfolio as the source, linking pages 2–7 respectively through `assets/Ismail-Akinwale-Project-Portfolio.pdf`. These challenges are source-backed summaries, not CV-inferred framing. Outcomes remain self-reported and unverified. Do not assert completed migration or EPR rollout beyond the document.
6. Skills: requirements elicitation/traceability, stakeholder engagement, workshops, business case support, MoSCoW, user stories, epics, Gherkin, BPMN, UML, process mapping, gap analysis, user journeys, wireframes, implementation planning, risk/dependency management, solution validation, Agile/Waterfall, SQL, Power BI, Jira, Confluence, Azure DevOps, Microsoft 365, Visio and Miro. No invented proficiency percentages.
7. Certifications and membership, as CV-reported: BCS Foundation in Business Analysis; BCS Foundation in Agile; APMG Agile PM Foundation & Practitioner; Professional Scrum Product Owner; Professional Scrum Master; AWS Certified Cloud Practitioner; UiPath Academy Robotic Process Automation — Business Analyst Foundation; Member, BCS — The Chartered Institute for IT. Do not invent award dates, levels, credential IDs or current validity.
8. Education: Post Graduate Diploma in Transport Management, Ladoke Akintola University of Technology, Nigeria (2014); HND Mechanical Engineering, Lagos State Polytechnic, Nigeria (2010).
9. Contact and CV: `mailto:akinwaleismail@yahoo.com`; LinkedIn `https://www.linkedin.com/in/ismail-akinwale-mbcs-aa058833`. External links use rel=noopener noreferrer and indicate a new tab. Download the real attached PDF, never a placeholder. Do not add a form that pretends to send messages.

Privacy and accuracy: show no telephone number, personal address, unrelated public information or clearance badge on the webpage. The original CV is unchanged and contains its supplied contact/clearance details. No independently corroborated extra career facts were found online. The LinkedIn URL comes from the CV; its current page content was not verified. Retain visible project-portfolio source labels and the note that “Present” follows the CV. Do not turn ambiguous percentages into stronger claims.

Implementation: componentise Header, Hero, About, ExperienceTimeline, ProjectCard, Skills, Qualifications, Contact and Footer. Keep project content as typed data using the supplied JSON. Put portrait and PDF under public/assets and correct all paths. Use semantic landmarks, one H1, meaningful alt text, a skip link, visible focus, keyboard-accessible native details/summary or equivalent accessible disclosure controls. All essential text must render without waiting for external data. No backend, accounts, analytics, external fonts or API keys are needed.

Verify at 375px, 768px and 1440px, plus 200% text enlargement. Ensure no horizontal overflow, menu and disclosures work with keyboard/touch, internal links reach correct sections, portrait loads and CV download returns the actual PDF. Preserve British English. Return a finished preview and explain any remaining verification limits.


## Skills section update

Use the current HTML and `skills.json` for six Core Competencies cards and seven Tools & Technologies groups, following the supplied screenshot layout examples. Content comes from the CV (competencies, tools and techniques) and project portfolio (particularly DWIT/HIP and DPS). Screenshots are visual references, not evidence of additional skills. Do not add proficiency bars or unsupported tools such as Tableau, Python, Power Platform or Salesforce. Denodo and HIP are labelled programme context; AWS and UiPath are foundation-level context. `skills.json` is an adaptation reference, not a live source; keep it aligned with HTML edits.
