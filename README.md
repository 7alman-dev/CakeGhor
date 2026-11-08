# CakeGhor — Static Frontend Demo

## Requirements
- Node.js (LTS recommended)
- VS Code
- Internet connection for Google Fonts and opening WhatsApp Web

## Run on Windows PowerShell
1. Extract the `CakeGhor` folder.
2. Open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```powershell
npm install
npm run dev
```

5. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Demo interactions
- English is the default language. Use the header switch to change to বাংলা.
- Product filters, Add to Cart, cart quantity controls and remove action work in the browser.
- Product Order opens the order details popup.
- The popup closes only with its X button. Clicking the dark backdrop does not close it.
- Complete Order opens WhatsApp with a pre-filled message using a fake placeholder number.
- Custom Cake options are copied into the order popup.

## Important demo limitations
- The WhatsApp number is a fake placeholder (`8801000000000`). It is not a CakeGhor contact and cannot receive real orders.
- No backend, database, payment, login, live delivery check or real WhatsApp order processing exists.
- District and Upazila are fixed to Sylhet and Sylhet Sadar. Area choices are sample values.
- Delivery charge is a fixed demo amount of ৳60.
- Product illustrations, reviews, prices and contact details are sample content.
- Google Fonts need an internet connection; local fallback fonts are used if unavailable.

## Production build test
```powershell
npm run build
```
