# Nomika Studio Free Excel Tracker Landing Page

This folder contains a static GitHub Pages landing page connected to the MailerLite embedded form **tcU9FA**.

## Files

- `index.html` — landing page
- `styles.css` — Nomika Studio responsive styling
- `script.js` — dynamic year and FAQ behaviour
- `privacy.html` — basic privacy notice
- `mailer-form-embed.html` — MailerLite form code supplied by the account owner
- `assets/dashboard-preview.png` — workbook preview with fictional demo data

## Recommended deployment path

For an existing Vite site, copy this folder into:

```text
public/free-excel-tracker/
```

Then rebuild and deploy the site. The expected URL is:

```text
https://nomikawebdev-max.github.io/nomika-studio/free-excel-tracker/
```

For a plain static GitHub Pages repository, copy the folder to the repository root as:

```text
free-excel-tracker/
```

## Important

1. Do not place the blank Excel download directly inside this public folder if email collection is required.
2. Deliver the workbook through the MailerLite automation after double opt-in confirmation.
3. Test the form with an email address you control before publicly sharing the page.
4. Ensure the MailerLite form remains assigned to `Nomika Free Tracker Subscribers`.
5. Review the privacy notice for your actual data practices and applicable requirements.

## Local test

From the repository root, run a local server rather than opening `index.html` directly because the page loads the form HTML using `fetch()`.

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/free-excel-tracker/
```
