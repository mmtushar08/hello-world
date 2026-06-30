# Takshvi Agency Website

Source for the Takshvi.agency marketing site — a HubSpot CMS theme plus a standalone static preview of the same pages.

## Structure

```
takshvi-theme/        HubSpot CMS theme — upload this to HubSpot
  modules/             Reusable HubL modules (nav, hero, services, service-page, etc.)
  templates/           Page templates, including templates/services/ for the 5 service pages
  css/, js/            Theme-wide styles and scripts

preview.html           Standalone homepage preview (no HubSpot required)
services/               Standalone service page previews + shared.css

STRATEGY.md             Market research, SEO, and keyword strategy
```

## Local preview

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000/preview.html`. The `services/*.html` pages are linked from the homepage's service cards and footer.

## Deploying to HubSpot

1. Install the CLI:
   ```bash
   npm install -g @hubspot/cli
   ```
2. Authenticate (creates `hubspot.config.yml` locally — never commit it, it holds your Personal Access Key):
   ```bash
   hs init
   ```
   Or copy `hubspot.config.yml.example` to `hubspot.config.yml` and fill in your portal ID + access key manually.
3. Upload the theme:
   ```bash
   hs upload takshvi-theme takshvi-theme
   ```
4. For live development with auto-sync on save:
   ```bash
   hs watch takshvi-theme takshvi-theme
   ```
5. In HubSpot, go to **Design Tools** to confirm the templates and modules landed, then build pages under **Pages → Website Pages** using `home.html` and the `templates/services/*.html` templates.
