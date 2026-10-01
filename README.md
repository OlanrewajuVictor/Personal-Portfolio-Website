## Project-section update

The Projects section now uses the supplied eight-page `Ismail_Akinwale_BA_Project_Portfolio.pdf` as its primary source, packaged unchanged as `assets/Ismail-Akinwale-Project-Portfolio.pdf`. It contains six projects: HMRC GDPR (p.2), HMRC DWIT/HIP (p.3), Accenture DPS (p.4), Barclays (p.5), Octopus Energy (p.6), and NHS EPR (p.7). Each includes the documented challenge, contributions, outputs, reported outcome and applied skills. Accenture includes the documented process controls. These replace the earlier CV-inferred project framing; metrics remain self-reported and not independently verified. The CV remains the source for other website sections. The new source PDF retains its original contact details. For any adaptation, use the current `case-studies.json` and HTML over the earlier five-project descriptions below.

# Ismail Akinwale — portfolio website

A complete, responsive portfolio based on the supplied CV and portrait. Includes Home/Hero, About, Experience, six expandable Projects, Skills, Certifications, Education, Contact and downloadable CV.

## Open in VS Code

1. Extract the ZIP and open the `ismail-akinwale-portfolio` folder in VS Code (File → Open Folder).
2. For an immediate preview, open `index.html` in your browser. All content, images, links and case-study disclosures work without a build.
3. For a local development server, install Node.js 20 or later if needed, then open the VS Code terminal in this folder and run:

   ```sh
   node server.mjs
   ```

4. Visit `http://127.0.0.1:4173`. Save edits and refresh the browser to see changes. Stop the server with Ctrl+C.

If npm is available, `npm run dev` does the same thing. No dependency installation, API key, database or build step is needed. The optional `npm run check` checks JavaScript syntax. If port 4173 is occupied, use `$env:PORT=4174; node server.mjs` in PowerShell, then visit port 4174.

## Files and editing

| File | Purpose |
| --- | --- |
| `index.html` | Complete, readable HTML content and all sections |
| `styles.css` | Design tokens, layout, responsive breakpoints, focus states and reduced-motion styles |
| `script.js` | Accessible mobile navigation and experience-to-case-study links |
| `assets/ismail-akinwale.jpeg` | Original supplied portrait, unchanged |
| `assets/Ismail-Akinwale-CV.pdf` | Original supplied three-page CV, unchanged |
| `case-studies.json` | Structured copy of all six case studies for adapting into React/Lovable |
| `server.mjs` | Dependency-free local preview server, bound to your computer only |
| `LOVABLE-PROMPT.md` | Ready-to-paste build/adaptation brief |
| `SOURCES.md` | Source provenance, research decisions and outstanding verification limits |
| `VERIFICATION.md` | Checks performed and their limits |

Edit `index.html` for visible content. `case-studies.json` is a migration reference, not a live data source; keep it aligned when editing case studies. Change colours in `:root` in `styles.css`. Replace the portrait or PDF at their existing paths to keep links working. Do not infer current certification validity, availability or security-clearance status from the historical CV.

## Lovable adaptation

Paste `LOVABLE-PROMPT.md` into Lovable and provide `index.html`, `styles.css`, `script.js`, `case-studies.json`, the portrait and the CV as supporting files using the attachment/import options available in your workspace. The prompt also contains a content brief, so it remains useful if source upload is limited. Ask Lovable to recreate the site as React components and move the assets into its public directory.

This is a portable source package, not a claim of a verified one-click Lovable import. No Lovable account or project was accessed. If its interface does not accept an asset type, use its supported asset workflow or add the file in the generated project. Verify the image and CV links in the resulting preview.

Suggested components: Header, Hero, About, ExperienceTimeline, ProjectCard, Skills, Qualifications, Contact and Footer. Use `case-studies.json` as the typed project data. Keep the project-portfolio source labels and page-specific links.

## Content and privacy

The CV is the primary source. The portrait is user-provided. Public research did not yield additional career claims that could be confidently corroborated. The exact LinkedIn URL comes from the CV; automated access to that page failed, so its current contents and availability are not verified.

The page shows the supplied professional contact email and LinkedIn link. It does not display a phone number, residence, personal records or a security-clearance badge. The downloadable original CV retains its original phone number and clearance wording. If you later want a public CV with fewer details, replace the PDF with a reviewed public version before publishing.

All role dates, qualifications and metrics are CV-reported. “Present” follows the source CV and should be kept up to date. The NHS employer name is reproduced as supplied, without independently validating the organisation's historical naming. Project titles and challenges are now summarised from the supplied project portfolio. No invented clients, testimonials, certification dates, credential IDs, project artefacts or outcome metrics are included.

## Deployment

This handoff is a local source package for VS Code and Lovable. No public deployment was made. To host it as a static site, publish only `index.html`, `styles.css`, `script.js` and `assets/` together at the web root. Keep the documentation, local server and research notes out of the public upload. There is no backend form: email links open the visitor's email application, and LinkedIn opens a separate tab.

## Accessibility and maintenance

The site uses semantic landmarks, one main heading, a skip link, descriptive portrait alt text, keyboard-visible focus, native expandable case studies, reduced-motion support and responsive layouts. Content remains readable when JavaScript is disabled. There are no trackers, third-party fonts, cookies or external scripts. Browser checks do not replace a full assistive-technology audit; retain these behaviours during future edits.


## Skills section update

Use the current HTML and `skills.json` for six Core Competencies cards and seven Tools & Technologies groups, following the supplied screenshot layout examples. Content comes from the CV (competencies, tools and techniques) and project portfolio (particularly DWIT/HIP and DPS). Screenshots are visual references, not evidence of additional skills. Do not add proficiency bars or unsupported tools such as Tableau, Python, Power Platform or Salesforce. Denodo and HIP are labelled programme context; AWS and UiPath are foundation-level context. `skills.json` is an adaptation reference, not a live source; keep it aligned with HTML edits.
