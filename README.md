# ZOTAANG Website — Version 1 (Streatham / SW16)

Professional Mobile Phone & Laptop Services website starter.

## Structure

- `frontend/` — customer-facing website
- `backend/` — Node.js + Express API
- `frontend/assets/images/` — logos and photos
- `frontend/css/` — styles
- `frontend/js/` — browser JavaScript
- `frontend/pages/` — additional pages
- `backend/src/routes/` — API routes
- `backend/src/controllers/` — API logic

## Run the frontend

The easiest option during development is VS Code + Live Server, or any static server.

From the project root:

```bash
cd frontend
npx http-server -p 8080
```

Then open:

http://localhost:8080

## Run the backend

```bash
cd backend
npm install
npm run dev
```

The API runs on:

http://localhost:3000

Health check:

http://localhost:3000/api/health

## Version 1 philosophy

This version intentionally does NOT include a database, online payment, customer accounts,
or a complicated booking system.

The first release focuses on:

- local SEO-friendly content
- phone + laptop repair services
- clear calls to action
- WhatsApp / phone contact
- responsive mobile design
- simple repair quote form
- a backend endpoint ready for future expansion

## V1 refinements included

- Prominent genuine-parts trust section for selected Apple and Samsung repairs
- Careful wording to avoid implying ZOTAANG is an Apple/Samsung-authorised repair provider
- Optional, unobtrusive AdSense-ready placeholder spaces (no ads are active by default)
- Mobile-friendly layout retained

Before publishing, replace any placeholder pricing and confirm your final public business address, opening hours, domain and parts-programme wording.

## Future versions

1. MongoDB + admin dashboard
2. Online repair quotation
3. Booking system
4. Refurbished phone inventory
5. Accessories shop
6. Trade-in
7. Repair ticket tracking
8. Customer notifications


## Current business location

4A Bank Building, Mitcham Lane, London, SW16 6NG

Primary local positioning:
- Streatham
- SW16
- South London

The project intentionally uses "Streatham, London" rather than "Streatham/London".

## Branding and contact updates
- Header now uses the supplied ZT logo image rather than a CSS placeholder.
- Email: zotaangmobile@gmail.com (clickable in header, footer and contact page).
