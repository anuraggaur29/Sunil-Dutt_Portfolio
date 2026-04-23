# Full-Stack LIC Agent Website – Executive Summary  

This report outlines a comprehensive plan for a production-ready website for LIC agent Sunil Dutt.  It begins by defining a **clear sitemap** and page content for all key sections (Home, About, Plans, Premium Calculator, Claims/Service, Contact, Blog, Testimonials, Client Portal, Privacy/Terms).  It then specifies a **system architecture** and recommended tech stack (e.g. React or Next.js frontend, Node.js/Python backend, PostgreSQL database, AWS hosting with CDN, OAuth/JWT auth, integration options) along with API design, data models, and security/scalability measures (load balancing, HTTPS, data encryption, backups, automated CI/CD).  UI/UX requirements are detailed: fully **responsive**, high-performance, SEO- and accessibility-friendly design, using clear typography and “Pinterest-style” inspirational quote images.  The report includes sample wireframes and guidance on image sourcing/licensing (e.g. Unsplash/CC0).  

Crucially, the site will integrate **up-to-date LIC product information**.  We gather plan details from official LIC sources and summarize key attributes (plan type, eligibility, benefits, premium modes, and claim process) in a comparison table. For example, *LIC’s Jeevan Umang* is a non-linked participating whole-life plan (entry age 30 days–55 years) offering annual survival benefits (8% of sum assured) plus a lump sum at maturity or death【12†L15-L23】.  Similarly, *LIC’s Bima Kavach* is a pure risk (term) plan with flexible terms up to age 100 and two death-benefit options【16†L28-L36】.  Each table entry cites LIC’s official brochure/PDF.  

We also specify **lead-capture and CRM features**: contact/quote forms, click-to-WhatsApp links (using WhatsApp Business API for instant chats)【41†L81-L89】, Google Analytics, and a simple agent dashboard to track leads and client policies.  Performance targets (Lighthouse ≥90, page loads ~2 sec) are set【35†L301-L304】【37†L177-L184】, with a testing plan (functional, performance, security/OWASP tests) to meet them.  Finally, we provide a **project roadmap**: deliverables, milestones, and an implementation checklist with estimated effort (hours) and priorities (must/should/could).  Sample content snippets (e.g. home page headline) and SEO meta tags for key pages are included.  Legal/compliance notes cover IRDAI rules: e.g. displaying agent LIC/IRDAI license numbers and disclaimers (“Insurance is a subject matter of solicitation”), and stating that plan benefits follow LIC policy documents【48†L541-L549】.  

This plan ensures a feature-rich, compliant LIC agent site that is secure, scalable, and optimized for performance and search.  

## 1. Sitemap & Page-by-Page Content Outline  

We propose the following **site structure** (top navigation) for an LIC agent website, with brief content notes:  

- **Home** – Engaging overview; agent introduction; key value propositions (e.g. “LIC insurance for your family’s security”); calls-to-action (CTA) to *Get Quote* or *Contact*.  Hero banner with agent photo; sample motivational quote image.  Highlights of featured plans.  Testimonials slider.  Lead-capture form or click-to-WhatsApp CTA.  
- **About (Agent Profile)** – Bio of Sunil Dutt (LIC agent, experience, credentials, awards, license number).  Why choose LIC (stability of LIC, trust).  Agent’s photo, certifications, and any local/community involvement.  May include a short video or image montage.  Testimonials preview (clients’ quotes).  
- **Plans/Products** – Categorized summary of LIC plan offerings.  Subsections (tabs or cards) for Endowment, Whole Life, Money Back, Term, Pension, ULIPs, etc.  For each plan category, list popular plans with brief bullet-point highlights and links to details (or PDF brochures).  Possibly an interactive plan comparison table (see section 4).  Emphasize “LIC’s official brochure” and note IRDAI UIN.  
- **Premium Calculator** – Interactive tool for quote estimation.  For example, a form to input age, sum assured, term, and it computes approximate premium (based on insurer rates or formula).  This can be a basic custom calculator or embedded widget.  Show multiple premium modes (annual/monthly).  Provide call-outs explaining tax benefits (as per current Indian regulations) and a disclaimer about estimates.  
- **Claim & Service** – Information for policyholders on post-sale support.  Explain claim settlement process (documents required for death/maturity claims) in simple steps【50†L119-L128】【50†L140-L149】.  Provide LIC Branch locator and online portals (e.g. LIC customer portal links【3†L119-L128】).  FAQ: policy servicing, premium payment options, policy status.  Downloadable claim forms or LIC form references.  Contact details for service queries (phone/WhatsApp email).  
- **Contact** – Agent contact info: phone, email, office address (with map embed).  Social media links.  Form for general inquiries or quote requests (name, contact, message, query type).  Prominently display WhatsApp chat button or link (e.g. `wa.me/918976862090`) for instant messaging.  Safety note on privacy (data use policy) to build trust.  
- **Blog/Resources** – Articles and resources on insurance topics (e.g. “Why term insurance”, “LIC tax benefits”, “Health riders explained”).  Posts optimized for SEO with keywords (“LIC agent Jind”, “best LIC plans 2026”, etc.).  Downloadable LIC pamphlets or news updates (e.g. LIC press releases).  Useful links (LIC official site, IRDAI policyholder portal).  This also boosts organic traffic【29†L250-L259】.  
- **Testimonials** – A dedicated page or section featuring client quotes and success stories.  Each testimonial with client name/location (with permission).  Graphical elements (client photos or quote images) to build credibility.  Possibly video testimonials.  
- **Agent Dashboard / Client Portal** – Secure login area for the agent (and optionally clients).  For Agent: dashboard listing leads, active policies, reminders for follow-up, commission tracking.  For Clients (optional): portal to view their policies, payment receipts, renewals.  *Note:* This requires user auth and data privacy considerations.  Could start as admin area only.  
- **Privacy, Terms & Disclaimers** – Required legal pages.  Privacy Policy (data use, cookies, Google Analytics opt-out).  Site Terms of Use.  Disclaimers: “Life insurance is the subject matter of solicitation.”  Agent’s IRDAI/LIC registration numbers and license.  Copyright and content usage disclaimers.

These sections should be accessible via a logical menu (e.g. Home, About, Plans, Calculator, Claims, Contact, Blog, Testimonials). A footer can repeat key links plus address, regulatory disclosures, and social icons.  The sitemap and content flow above ensure all user needs (information, lead capture, support) are met and that search engines find rich, relevant content【29†L234-L242】【29†L257-L266】.

## 2. System Architecture & Tech Stack  

We recommend a modern, scalable **web architecture**.  A typical setup: the *frontend* is a fast static/web app (e.g. using React, Angular, or Vue with Next.js/Nuxt for SEO-friendly server-side rendering).  The *backend* can be Node.js (Express) or Python (Django/Flask) serving a REST/GraphQL API.  Alternatively, a Jamstack approach (Next.js + API) or PHP/Laravel are options.  **Database**: a relational DB (PostgreSQL or MySQL) to store user data (leads, clients, policies, admin info).  For quick prototyping, a managed DB (Amazon RDS) is ideal; for simplicity, even SQLite or SQLite for dev.  If using NoSQL, MongoDB (Atlas) could store flexible lead records.  

**Hosting/CDN:**  Deploy on a reliable cloud (AWS, Azure, GCP, DigitalOcean). Use a CDN (e.g. CloudFront or Cloudflare) to cache static assets (JS/CSS/images) globally for speed.  SSL via Let’s Encrypt or cloud provider.  Use auto-scaling and load balancers to handle traffic spikes.  For backup/HA: daily DB snapshots, code in version control (Git), rolling deployments.  CI/CD pipeline (GitHub Actions, GitLab CI, or Jenkins) to auto-test and deploy.  

**Authentication & Security:**  User auth for agent/client portal using secure OAuth2 or JWT tokens.  Implement password hashing, account lockouts, HTTPS-only cookies, and OAuth or email verification.  Follow OWASP best practices (input sanitization, parameterized queries, CSP headers, XSS/CSRF protection).  Integrate 2FA for admin if needed.  Store secrets (API keys, DB passwords) securely (e.g. AWS Secrets Manager or environment variables not in code).  Regular dependency updates and security scans are mandatory.  

**API Design & Data Models:**  Key API endpoints might include: `/plans` (GET for listing plan info from DB), `/calculate` (POST for premium calculations), `/leads` (CRUD for contact form submissions), `/users` (for client portal), `/auth` (login/register).  Use REST conventions or GraphQL.  Data models: `User` (id, name, role (agent/client), contact, hashed_password), `Lead` (id, name, contact, enquiry details, status), `Policy` (id, client_id, plan_id, sum_assured, premium, start_date, etc.), `Plan` (id, name, type, premium_mode, features, UIN).  Protect APIs with role-based access (agent vs public).  

**Integration Options:**  - **LIC Data:** No public LIC API exists, so plan info must be manually entered or periodically updated via LIC PDF/brochure data.  We can implement an admin interface to update plan attributes.  - **Payment Gateway:** If selling riders or collecting fees, integrate RBI-approved gateways (PayU, Razorpay, or LIC’s own online payment gateway link【50†L119-L127】 for premium).  - **WhatsApp API:** Use WhatsApp Business API (through Twilio or Karix/WATI) for automated messaging or click-to-chat.  - **Analytics:** Add Google Analytics/Tag Manager for traffic, and Facebook Pixel for marketing.  - **CRM:** For leads, use either a lightweight custom CRM or integrate an external CRM (HubSpot, Zoho) via their API.  An embedded chat/contact widget (e.g. HubSpot Live Chat) could help.  

**Scalability & Reliability:**  Design for horizontal scaling (stateless web servers, separate DB).  Use caching (Redis) for session storage or rate-limiting.  Configure alerts (CloudWatch/Azure Monitor) for uptime.  Performance: Optimize images (lazy loading), minify JS/CSS, leverage HTTP/2.  For backup, set up automated DB dumps plus versioned backups of static content.  Code deployment via CI/CD ensures rapid, repeatable releases.

```mermaid
graph LR
    Browser[User Browser] -->|HTTPS| CDN["CDN/Edge Cache"]
    CDN --> WebServer[Web Server (React/Node.js)]
    WebServer --> Database[(Relational DB, e.g. PostgreSQL)]
    WebServer --> AuthService[OAuth/JWT Service]
    WebServer --> ExtAPI[Payments/Third-Party APIs]
    subgraph Admin
      Dashboard["Agent/Client Dashboard"]
    end
    WebServer --> Dashboard
    style CDN fill:#faebd7,stroke:#333
    style WebServer fill:#f4f4f4,stroke:#333
    style Database fill:#bbdefb,stroke:#333
    style AuthService fill:#c8e6c9,stroke:#333
    style ExtAPI fill:#ffe0b2,stroke:#333
```  

_**Figure:** System architecture diagram (CDN, web servers, DB, auth service, external APIs)._

## 3. UI/UX Requirements  

- **Responsive Design:** The site must work seamlessly on all devices (desktop/tablet/mobile).  Use a mobile-first CSS framework (e.g. Bootstrap or TailwindCSS) or custom flexbox/grid layouts.  Ensure navigation collapses to a hamburger menu on small screens.  Buttons and form fields must be touch-friendly.  

- **Performance & Speed:** Optimize for fast load times. Minimize render-blocking CSS/JS. Compress images and use WebP if possible. Preload critical assets. Aim for **Lighthouse Performance score >90**【35†L301-L304】.  Monitor Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS). Target LCP <2.5s and CLS <0.1 for good UX【37†L177-L184】.  

- **SEO-Friendly & Content:** Use semantic HTML5 (header, nav, main, article, footer).  Proper `<h1>..h6>` heading hierarchy with keywords.  Unique descriptive title and meta-description tags per page (front-loaded with key terms like “LIC agent”, “life insurance” for the location)【44†L155-L164】【44†L168-L174】.  Use canonical URLs.  Alt text for all images (descriptive for SEO and accessibility).  Structured data markup (schema.org) for organization and local business (agent office address).  Content should include relevant local keywords (e.g. “LIC agent Jind, Haryana”) for local search.  Maintain a fast, crawlable site: avoid AJAX-only links for core navigation.  

- **Accessibility:** Follow WCAG guidelines. Provide sufficient contrast, resizable text (no fixed font sizes), and keyboard navigability.  Use ARIA roles if needed.  Ensure forms have labels.  For example, implement semantically labeled buttons and form fields.  This benefits all users and also SEO【33†L156-L164】.  Avoid carousels or animations that hinder usability.  

- **Visual Style & Branding:** Design a clean, trust-inspiring look. Use LIC’s color scheme (navy blue, white, orange) for brand consistency.  Include professional stock or original images (high-res, licensed) of families, happy clients, LIC offices.  For “Pinterest-style quote images”, periodically feature an image overlay with an inspirational/insurance-related quote (e.g. “Protect your family’s future today”). Use sites like Unsplash or Pixabay (CC0 images) for backgrounds. Credit not required for CC0 (e.g. Unsplash license【31†L1-L4】).  Overlay text with readable fonts and subtle LIC logo watermark for branding.  

- **Wireframes/Layout:** Home page wireframe example: hero section with agent photo/text, three-column features (plans, calculator, contact), testimonial slider, footer. About page: sidebar with photo/bio, main area with credentials and story. Plans page: tabs or grid of plan cards with “Read More” linking to detail PDFs or pop-ups. Calculator page: large form on left, summary on right. Claims page: vertical process steps. Contact page: two-column (form + map). Use consistent header and footer across pages.  

- **Legal/Disclaimers on UI:** Always include a footer note: “Life Insurance is a subject matter of solicitation.”  And the agent’s IRDAI code (if known).  On plan pages or quotes, include “For full benefits and exclusions, refer to LIC policy document【3†L119-L128】.”  Use small-print footers for disclaimers but ensure legibility.  

## 4. LIC Plan Details & Comparison  

Below are sample summaries of select LIC plans, drawn from official LIC sources (brochures and site PDFs), to integrate into the “Plans” section. Key attributes are listed: plan type, entry-age, key benefits, premium mode, and claim/benefits.  All data are referenced to LIC brochures.

| **Plan**                        | **Type & UIN (Coverage)**      | **Eligibility & Term**                     | **Key Benefits**                                                            | **Claim/Benefit Payout**                                                                      |
|---------------------------------|--------------------------------|--------------------------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| **Jeevan Umang (Plan 745)**      | Par, Non-Linked *Whole Life* (UIN:512N312V03)【12†L15-L23】 | Entry age: 30 days – 55 yrs (depending on PPT)【12†L30-L39】<br>Sum Assured ≥₹200,000; PPT 15–30 yrs (option); Maturity age 100 yrs【12†L31-L39】. | Annual survival benefit (8% of basic SA) from end of PPT to maturity; Lump sum at death or maturity【12†L15-L23】.  High-SA rebates; riders optional. | **Death:** Sum Assured on Death + vested bonuses (paid annual income + lumpsum). **Maturity:** Basic SA + vested bonuses【12†L20-L23】.  (Bonuses declared by LIC.) |
| **Single Premium Endowment (717)** | Par, Non-Linked *Endowment* (UIN:512N283V03)【21†L16-L24】 | Entry age: 30 days – 65 yrs; Policy term 10–25 yrs; Max Maturity age 75 yrs【21†L34-L42】.<br>Min SA ₹100,000; Single premium only【21†L34-L43】. | Single lump premium. Provides life cover + savings.【21†L16-L24】  Can choose term length. Option to take benefits (death/maturity) in installments. High-SA rebates; loan available.  | **Death (during term):** Sum Assured on Death (higher of 125% SA or 7× annualized prem) + vested bonuses【21†L16-L24】. **Maturity:** Basic SA + vested bonuses【21†L16-L24】.  (Non-guaranteed bonuses may apply.) |
| **New Money Back – 20 yrs (720)** | Par, Non-Linked *Money Back* (UIN:512N280V03)【25†L10-L18】 | Entry age: 13–50 yrs; Policy term 20 yrs; PPT 15 yrs【25†L34-L43】.  Min SA ₹200,000【25†L38-L42】. | Protection + periodic payouts. Survival benefits paid at specified durations (e.g. 5-yearly) during term【25†L10-L18】, lump sum at maturity. Death cover throughout term. Rider option (Premium Waiver Rider). | **Death:** On death during term (premiums paid), beneficiaries get SA + bonuses. **Survival:** Periodic payouts (sum assured fractions) during term. **Maturity:** Basic SA + vested bonuses【25†L14-L23】.  (Surrender values available.) |
| **Bima Kavach (887)**           | Non-Par, Pure Risk *Term* (UIN:512N360V01)【16†L8-L16】 | Entry age: 18–55 yrs (can extend cover up to age 100)【16†L28-L36】. Policy term up to age 100. Premium mode: Single/Regular/Limited (5/10/15 yrs)【16†L28-L36】. | Pure protection. Two death-benefit options: **Level SA** or **Increasing SA**. Flexible terms; special rates for women【16†L28-L36】. Option to increase cover at milestones. Death benefit can be paid lump-sum or installments. | **Death:** Guaranteed Sum Assured (Level or Increasing) payable on death during term【16†L8-L16】. No maturity benefit (pure term). (Non-participating → no bonuses.)  Claim in 10-15 days after LIC’s process. |
| **Jeevan Tarun (734)**         | Par, Non-Linked *Children’s Savings* (UIN:512N299V03)【18†L10-L19】 | Entry age: 30 days – 12 yrs; Maturity at 25 yrs【18†L40-L48】. PPT = term = 25 yrs. Min SA (multiple of ₹50,000). | For child plans: Annual survival benefit from age 20–24 (user-chosen fractions of SA) + lumpsum at 25. Provides both protection and education fund【18†L10-L19】. Premium Waiver Rider available. | **Death:** On child/insured’s death, SA + vested bonuses to nominee. **Survival:** Chosen survival benefit portions paid at ages 20–24. **Maturity (25 yrs):** Remaining SA + vested bonuses【18†L17-L24】.  (Bonuses add to payouts.) |

Each entry above is based on official LIC brochures/PDFs.  For example, LIC’s brochure for Jeevan Umang states it is a “Whole Life Savings Plan” with annual survival benefits and lump-sum on death/maturity【12†L15-L23】.  Similarly, the Bima Kavach brochure highlights “financial protection” (death benefit) and flexible premium options【16†L8-L16】.  (Where we lacked LIC site text, we used brochure PDFs as sources.)

**Claim Process:**  On the “Claim/Service” page, we would describe how to claim. For example, LIC mandates that for a death claim (after 3 years), the claimant submits “Claim Form A”, death certificate, nominee proof and original policy【50†L140-L149】.  For maturity claims, the policyholder submits the discharge form with bank/ID documents【50†L119-L128】.  We’ll summarize these steps clearly (point to LIC’s “Claims Settlement Requirements” page for details【50†L119-L128】【50†L140-L149】).  

## 5. Lead Capture, Forms & CRM Features  

To generate leads and manage clients, the site will include:  

- **Contact & Quote Forms:** On “Contact” and “Get Quote” sections, include simple forms asking for name, age, contact, desired plan/coverage. Limit fields to essential info (GDPR/Indian privacy principle: “minimal data” policy). On submission, save data to the backend (and CRM). Send automatic acknowledgment email or WhatsApp message. Avoid long surveys (higher drop-off).  

- **WhatsApp Integration:** A prominent WhatsApp chat button (using `wa.me/` link) so visitors can instantly message the agent. For automation, integrate WhatsApp Business API via a provider (AiSensy, Twilio, WATI)【41†L81-L89】. This enables auto-responses (e.g. a chatbot to collect lead info) and rich messages. For compliance, follow WhatsApp’s business policy. Display agent’s WhatsApp number and allow direct chat for quotes and follow-ups.  

- **Lead Tracking & Basic CRM:** Each contact form or WhatsApp inquiry generates a lead record in a simple CRM. For example, use an open-source CRM (HubSpot CRM free tier or Bitrix24) or custom mini-CRM. Key fields: prospect name, contact, plan interest, status (new, contacted, quoted, closed). The agent dashboard (part of admin area) should list pending leads, with ability to add notes (e.g. meeting scheduled). Set reminders for follow-ups (via email/SMS or integration with Google Calendar). Include a CSV export option for reporting.  

- **Analytics:** Insert Google Analytics and Google Search Console to track traffic, bounce rate, conversion funnels (form submissions). Set goal for “Submit Quote” or “Click-WhatsApp”. Use Google Tag Manager for flexibility. Optionally use Facebook Pixel for any paid ads. Review metrics monthly to improve UX/SEO.  

- **Basic Agent Dashboard:** Under secure login, the agent should see: total leads this month, conversion rate, list of clients (name + policy details), pending tasks, and contact info. Also integration with LIC agent dashboard if available (if LIC provides an e-portal API). If building from scratch: use admin templates (React Admin, Django Admin) to quickly scaffold. Prioritize data security for any PII.  

## 6. Performance Targets & Testing Plan  

**Performance Goals:**  Aim for Google Lighthouse scores in the green (>90) for Performance, Accessibility, Best Practices, and SEO【35†L301-L304】【33†L156-L164】.  Target *Largest Contentful Paint* (LCP) under 2.5 sec and *CLS* <0.1. Minimize TTFB by using fast hosting and CDN.  Compress images and use responsive image sizes.  Use lazy loading for below-the-fold images (with placeholders).  Ensure all scripts/CSS are minified and combined where possible.  

**Testing Plan:**  
- *Functional Testing:* Unit tests for critical functions (premium calc, form submission). Integration tests for API endpoints. Manual QA on major browsers (Chrome/Firefox/Edge) and devices.  
- *Performance Testing:* Use Lighthouse or WebPageTest on pages (Home, Plan Detail) to catch regressions. Monitor real-world performance via tools (e.g. GTmetrix or Google’s CrUX).  
- *Accessibility Testing:* Run automated checks (axe, Lighthouse Audit) and manual checks (keyboard-only navigation, screen-reader). Ensure contrast and ARIA attributes.  
- *Security Testing:* OWASP Top 10 compliance scan. For example, perform dynamic scans with tools like OWASP ZAP. Ensure no SQLi/XSS vulnerabilities. CSRF tokens on forms. Review storage of passwords/secrets. Plan a formal penetration test (in-house or third-party) before launch.  
- *Load Testing:* Simulate traffic (e.g. 100–1000 concurrent users) using tools like JMeter or k6, especially for critical flows (lead form, login, major pages). Ensure server stays responsive or autoscaling triggers.  

**Monitoring:** After deployment, set up logs and alerts (error rates, 5xx responses). Use services like UptimeRobot for basic uptime. Periodically re-run Lighthouse and review Google Analytics for performance dips.  

## 7. Project Deliverables & Implementation Checklist  

We suggest an agile rollout with these **deliverables and milestones** (estimated hours and priority labeled):  

- **Requirements & Sitemap (Must):** Confirm sitemap and content outline. (8h)  
- **Design/Wireframes (Must):** Create low-fi wireframes for key pages and style guide (colors, fonts, imagery). (16h)  
- **Content Writing (Must):** Draft copy for Home, About, Contact, Privacy, key plan blurbs. (24h)  
- **Tech Setup (Must):** Set up code repo, CI/CD pipeline, staging hosting. (8h)  
- **Frontend Layout (Must):** Build responsive pages (Home, About, Plans, Contact, etc.) (50h)  
- **Backend & API (Must):** Develop core API endpoints (Leads, Auth, Plan data) and connect DB. (40h)  
- **Calculator & Forms (Should):** Implement premium calculator logic and contact forms. (20h)  
- **Authentication (Should):** Agent admin login and password reset flows. (12h)  
- **WhatsApp & Analytics (Should):** Integrate WhatsApp link/API and Google Analytics. (8h)  
- **Agent Dashboard (Could):** Basic CRM interface for leads/policies (if time). (30h)  
- **Testing & QA (Must):** Perform full testing (functional, performance, security). (24h)  
- **SEO & Accessibility (Must):** Optimize meta tags, alt text, semantic markup. (8h)  
- **Deployment (Must):** Go-live on production hosting; perform smoke tests. (8h)  
- **Post-Launch (Should):** Address user feedback, security audit, backups. (12h)  

_Total estimated effort: ~228 hours (~6 person-weeks)._  Prioritize *must* items first (sitemap, core pages, basic functionality) before *should* and *could* enhancements.  The Gantt chart below outlines an example timeline for a single-developer schedule:

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Project Timeline
    section Planning
    Requirements & Sitemap     :done,    req, 2026-04-24, 2d
    UI Design & Wireframes     :active,  design, after req, 5d
    Content Drafting           :after design, 7d
    section Development
    Frontend Implementation    :start, frontend, 2026-05-05, 10d
    Backend/API Implementation :after frontend, 2026-05-15, 12d
    Forms & Integrations       :parallel, forms, 2026-05-15, 8d
    section Testing
    QA & Performance Testing   :after backend, 2026-06-01, 6d
    Security Audit             :2026-06-08, 4d
    section Launch
    Production Deployment      :2026-06-15, 3d
    Post-Launch Review         :2026-06-20, 5d
```

_Assumptions:_ Weeks of full-time work. Overlap where possible (wireframe in parallel with content writing). Adjust for team size.  Sprints of 1–2 weeks recommended with demo at each milestone.

## 8. Sample Content Snippets & SEO Meta Tags  

**Home Page Title:** “Sunil Dutt – Trusted LIC Agent in Jind, Haryana”  
**Meta Description:** “Sunil Dutt (LIC Agent) offers life insurance and pension plans with LIC. Secure your family’s future with expert advice on premium plans and claims. Contact today!”  

**About Page Snippet:**  
“Sunil Dutt is a licensed LIC agent serving Jind and surrounding areas in Haryana. With 10+ years of experience in life insurance, Sunil specializes in LIC’s endowment, term, and money-back plans. He holds the IRDAI license #XXXX and has helped 300+ families secure their future. Sunil’s dedication to client care has earned him awards and grateful testimonials.”  

**Meta (About):** Title “About LIC Agent Sunil Dutt | Chandigarh University Alumni”; Description “Learn about Sunil Dutt’s expertise as an LIC agent. Based in Jind, Haryana, he offers genuine LIC plan guidance. Read awards, experience, and client testimonials.”  

**Plans Page Snippet:**  
“LIC India offers a wide range of insurance plans. Below are highlighted plans:  
- *Jeevan Umang:* Whole-life savings plan with lifelong coverage【12†L15-L23】.  
- *New Money Back 20:* Savings plan with periodic payouts during term【25†L10-L18】.  
- *Bima Kavach:* High-sum term insurance with flexible term and premium options【16†L28-L36】.  
Use our premium calculator or contact us for tailored quotes.”  

**Meta (Plans):** Title “LIC Plans & Premiums – Jeevan Umang, Money Back, Term Insurance”; Description “Compare LIC’s latest insurance plans (Jeevan Umang, Bima Kavach, etc.) offered by agent Sunil Dutt. View plan features, eligibility, and benefits.”  

These snippets balance keywords (“LIC agent”, “life insurance”, location) for SEO, while sounding natural.  For each page, the title is ~50–60 chars and meta-description ~150 chars as per best practices【44†L155-L164】.

## 9. Legal & Compliance Notes  

Per IRDAI regulations, agent websites have strict rules.  Key compliance points:  

- **Registration Number:** Display agent’s LIC/IRDAI registration number prominently (e.g. footer)【48†L541-L549】.  
- **Disclaimers:** Include “Insurance is a subject matter of solicitation.” as per IRDAI.  State that the information is only general (no guarantee of future bonuses).  For example: *“LIC plans are subject to terms and conditions as per LIC policy document. Read the official brochure for details. Only licensed agents can offer advice”*. Avoid any claims like “best returns” that could mislead【48†L418-L427】【48†L530-L537】.  
- **Privacy:** Follow Indian IT rules. Have a Privacy Policy on data usage (cookies, analytics)【48†L541-L549】.  Use secure data handling.  
- **Copyright:** Credit any reused content; do not copy LIC brochure text verbatim (use quotes with attribution).  For images, use royalty-free or properly licensed photos.  
- **Content Approval:** If advertising LIC products, use only official plan names and approved descriptions. Agents’ own ads must be generic (agent name, contact, lines of insurance) or insurer-approved【48†L529-L537】. We will not publish unapproved promotional content.  
- **Navigation:** Include link to IRDAI policyholder’s portal and relevant sections of LIC site (for transparency).  

Following these guidelines ensures the site is compliant with Indian insurance regulations and avoids penalties【48†L541-L549】.

---

**Sources:** We referenced official LIC materials (LIC India website pages and brochures) for plan details【12†L15-L23】【21†L34-L42】【25†L34-L42】【16†L28-L36】【18†L17-L24】.  Web design and SEO recommendations draw on modern best practices【29†L191-L199】【33†L156-L164】【35†L301-L304】.  Regulatory citations come from IRDAI regulations【48†L541-L549】.  Where direct references were unavailable, standard industry guidelines were applied. The plan ensures a robust, user-friendly LIC agent website that is technically sound, content-rich, and compliant with Indian insurance rules.