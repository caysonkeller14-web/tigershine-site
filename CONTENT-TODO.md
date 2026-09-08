# Content to fill in

Everything below shows up on the site as an orange-highlighted `[bracketed]`
placeholder. Search the repo for `class="ph"` or `[` to find each spot.
Once you replace a placeholder, delete the `<span class="ph">…</span>` wrapper so
the text stops being highlighted.

## Business facts (used in several places)
- [ ] **Founded / years in business** — `about.html`
- [ ] **Owner name + short story** (3–4 sentences) — `about.html`
- [x] **Licensed & Insured** — NOT licensed or insured (owner confirmed 2026-09-08).
      All such claims removed; the slots now read "Free on-site estimates" /
      "Same-day replies". Re-add if that changes.
- [ ] **Satisfaction guarantee** — confirm the real wording and the time window
      (currently "[7 days]"). Appears in: `index.html` guarantee band + FAQ,
      `services.html` FAQ. (Owner has not confirmed a guarantee — leave or remove.)
- [x] **Business hours** — no set hours (owner confirmed). Hours lines removed from
      every footer and the contact page.
- [x] **Typical response time** — confirmed: "we usually reply the same day".

## Reviews / social proof
- [ ] **Google rating + review count** — `index.html` stats row ("4.9" / "[NN]").
- [ ] **Google Business Profile URL** — link the stars/review count to it once you
      have it (currently not linked).
- [ ] **3–5 real testimonials** — name, town/neighborhood, job type — `index.html`
      testimonials section. Replace the placeholder quotes.
- [x] **Homes-cleaned count** — confirmed as "200+" on the homepage stats row.

## Service area
- [ ] **Exact towns you serve** — `services.html` (#service-area chips) and
      `contact.html` info card. Currently: Auburn, Opelika, Lake Martin +
      placeholder chips (Notasulga, Smiths Station, Loachapoka, Waverly, Salem,
      Beauregard) — keep the real ones, delete the rest.

## Service details (confirm on `services.html`)
- [x] Pressure washing — rust / irrigation / battery stains: confirmed ("treated
      where possible").
- [x] House washing — plant pre-water/rinse claim removed (owner: not done).
- [x] Window cleaning — tracks/frames detailing and skylights/hard-to-reach glass: confirmed included.
- [x] Christmas lights — Tiger Shine supplies the lights, bulbs, and timers;
      off-season storage included. Confirmed.
- [ ] Do you bring your own water / power? (FAQ, both home + services page)
- [ ] Does the customer need to be home? (services FAQ)
- [ ] Plant/pet safety specifics (services FAQ)
- [ ] Accepted payment methods + timing / deposit policy (FAQ on both pages)

## Photos
- Crew photo (`img/team.jpg`) on the About page.
- Window-cleaning action shots added: `img/window-action.jpg`, `window-reach.jpg`,
  `window-pole.jpg`, `window-side.jpg` — used on Services (#window-cleaning),
  the homepage window card, and a Gallery "on the job" strip.
- [ ] **House-washing photo** — Services #house-washing still uses a concrete
      after-shot (`street-after.jpg`). Replace with a real siding/soft-wash photo.
- [ ] **More before/after pairs** — `gallery.html` is built to hold a dozen+.
      Name each `img/<slug>-before.jpg` / `img/<slug>-after.jpg`, then copy one of
      the existing `.ba` blocks and swap the `src` + caption.
- [ ] Neighborhood labels on the 3 existing gallery captions.

## After you have the info — also update
- [ ] `index.html` JSON-LD block near the bottom: add your Google Business Profile
      + any social URLs to `"sameAs"`, add `geo` if you want a service radius.
      (`openingHours` removed — add back only if you set hours.)
- [ ] Decide: is the brand written "Tiger Shine" (two words, used now) or
      "Tigershine" (one word, older footer)? Currently standardized to "Tiger
      Shine" everywhere except the logo art.

## Wordmark note
The nav/footer show the logo image plus the text "Tiger Shine". If the logo
artwork itself reads "Tigershine", that's fine — but pick one for the written
text and I'll make it consistent.
