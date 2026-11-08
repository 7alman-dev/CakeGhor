# CakeGhor Demo Website

A responsive, frontend-only cake shop preview built with React and Vite.

## Run locally

From the project folder, run:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite. Do not open `index.html` directly or use
Live Server: the React entry file needs Vite to compile it.

## Build and publish

```powershell
npm run build
```

Publish the contents of the generated `dist/` folder on your static hosting
provider. The project is configured to work from a domain root or a
subdirectory. If the provider has separate build settings, use `npm run build`
as the build command and `dist` as the output/publish directory.

## Demo limitations

- No backend, database, authentication, payment or real API.
- Cart data is kept only in the current browser session and resets on refresh.
- Delivery areas and charges are fictional sample data.
- Order Now opens WhatsApp with a pre-filled demo message using the no-number
  contact-selection link. No real number is configured, and nothing is sent
  unless a user chooses a contact and presses Send.
- Google Fonts need an internet connection; fallback fonts are included.
