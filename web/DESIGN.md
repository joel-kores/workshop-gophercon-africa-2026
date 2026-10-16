# Magical Kenya

Brief: vibrant, classy, premium Kenya tourism experience. One home page, grounded in real wildlife observations. User chose forest green, warm ivory and sunset orange, large photo cards with animal search, and (in their latest answer) a sun rising over a mountain logo.

CSS properties in assets/css/app.css: --forest #173F35, --ivory #FFF8EC, --orange #BA481E (white button text), --sunset #ED8C50 (decorative accents), --muted #53655B, --line #D9DFD5. --heading Playfair Display with Georgia fallback; --body Inter with Arial fallback.

Roomy editorial layout: 1280px content width, 90px desktop section spacing, 50px mobile; 3–5px corners for buttons and cards. Header and footer share the wordmark and section links. Scenic photographic banner with dark overlay, oversized serif heading, orange exploration button. Ivory introduction, pale green wildlife section, abstract mountain illustration beside the closing invitation. Three card columns on desktop, two on tablets, one on phones. Photo slots 4:3, cover, lazy loaded. Missing photos have a branded placeholder; observers always displayed with a missing-data fallback.

Home handler selects Kenya only, up to 120 sightings. Search filters the rendered cards by animal, scientific name, place or observer; counts and an empty result message update without fetching. All cards remain accessible without JavaScript. Header links navigate to sections; no booking workflow or invented tour availability. Independent experience attribution in footer.

Keep visible keyboard focus, a skip link, readable text contrast, reduced-motion support, and 375px layouts. Avoid flashy motion, dense controls, fake testimonials and fabricated prices. Google Fonts and the scenic Unsplash hero are external; system fonts and the green hero background remain as fallbacks.
