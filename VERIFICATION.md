## Project-section update

The Projects section now uses the supplied eight-page `Ismail_Akinwale_BA_Project_Portfolio.pdf` as its primary source, packaged unchanged as `assets/Ismail-Akinwale-Project-Portfolio.pdf`. It contains six projects: HMRC GDPR (p.2), HMRC DWIT/HIP (p.3), Accenture DPS (p.4), Barclays (p.5), Octopus Energy (p.6), and NHS EPR (p.7). Each includes the documented challenge, contributions, outputs, reported outcome and applied skills. Accenture includes the documented process controls. These replace the earlier CV-inferred project framing; metrics remain self-reported and not independently verified. The CV remains the source for other website sections. The new source PDF retains its original contact details. For any adaptation, use the current `case-studies.json` and HTML over the earlier five-project descriptions below.

# Verification record

Checked on 1 October 2026.

- Read the actual three-page uploaded CV; all five roles, dates, qualification names, education and quantitative claims are based on it.
- Visually inspected the original 400 × 400 portrait and used it unchanged.
- JavaScript syntax checks passed for both the interaction script and local server.
- Local HTTP checks returned 200 for the page, stylesheet, script, portrait and PDF with appropriate content types.
- Checked every local asset reference and internal anchor; no missing targets or duplicate IDs. One H1 and six native case-study disclosures.
- Downloadable CV is byte-for-byte identical to the original supplied PDF.
- Visually reviewed the desktop hero and project section, plus mobile and tablet hero layouts in the browser.
- Browser layout checks at widths 375, 768 and 1440 pixels found no document-level horizontal overflow.
- Mobile navigation opens and updates its accessible expanded state. Escape closes it. An Experience link opens its corresponding case study, and the native disclosure closes again on activation.
- Browser reported no captured error messages during these checks.
- Email and LinkedIn links match the exact contact values in the CV. No message was sent. Automated retrieval of LinkedIn failed; live profile content and availability remain unverified.

Limits: no employer or credential-body verification; no full screen-reader or cross-browser audit; no dedicated 200% text-enlargement test; no deployment or Lovable import was performed. Responsive CSS, semantic HTML, reduced-motion support and visible focus states are implemented, but these checks do not establish formal WCAG conformance.
