# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two co-primary audiences, neither secondary to the other:

- **Prospective jamaah, roughly 45–70.** The person who will actually travel. Reads on a mid-range Android phone, often on a slow connection. Evaluating whether this agency is real and whether they will be looked after.
- **Adult children, roughly 30–50.** Research, compare agencies, and frequently pay on behalf of a parent. Move between phone and desktop, and will scrutinize legitimacy claims more aggressively than the elder will.

A third, high-volume path: **local sub-agents and community contacts** who forward links into WhatsApp groups. Most arrivals are a shared link opened on a phone, not a homepage visit — any page can be the first page.

The job in both cases is the same: decide whether to trust Aljamtour with a once-in-a-lifetime, high-cost religious obligation, and then start a conversation.

## Product Purpose

Aljamtour is a licensed Indonesian Umrah and Haji Khusus operator. The website exists to establish that the company is legitimate, competent, and led by a pembimbing worth traveling with — and then to hand the visitor to WhatsApp.

Success is a qualified WhatsApp conversation with a named consultant. Not a form fill, not a page view, and not an online booking.

## Positioning

People book Aljamtour to travel with its **pembimbing ibadah**. The draw is a specific person's guidance and presence throughout the journey, not price, not itinerary, and not hotel class. A competing agency can copy a package; it cannot copy who leads it.

This makes the pembimbing the product's central asset. Future work must treat that person as a named, visible figure with a real face and a real voice on the site — not an anonymous "professional guidance" claim.

## Operating Context

- Indonesian Umrah buying is a **fraud-wary market**. Prospective jamaah have seen agencies collapse and departures fail. Verification behavior is explicit: people look for Kemenag permit numbers, check them, and ask family and majelis contacts before committing.
- Comparison is the norm. Visitors arrive already holding two or three other agencies' prices in mind.
- Purchases are discussed across a family, and often across a majelis or community network, over days or weeks. The site gets revisited and re-shared.
- WhatsApp is the medium of the entire market — for inquiry, for negotiation, for document collection, and for the departure group itself.
- Departures are scheduled events with fixed dates, fixed pricing in IDR, named hotels and airlines, and a pre-departure manasik.
- Money and documents move offline, through consultants, agents, and the office.

## Capabilities and Constraints

- **Scope: brochure and trust site.** No online booking, no payment, no traveler registration, no user accounts. Conversion is a WhatsApp handoff.
- **Language: Bahasa Indonesia only.** IDR currency, Indonesian date formats. No internationalization layer and no English fallback.
- **Stack (existing):** Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript. Bun as package manager. The repository is currently an untouched `create-next-app` scaffold; nothing in `app/` is product code yet.
- **Performance is a functional requirement, not a nicety** — mid-range Android on a weak connection is the primary delivery target.
- **Honesty constraint:** every legitimacy claim on the site must correspond to a document the company actually holds. This is a legal and reputational constraint in a regulated market, not an editorial preference.

### Confirmed 2026-09-15

- Legal entity: **PT Al Jamarat**.
- Umrah permit (PPIU): **U 93/2022**, Kementerian Agama RI.
- Haji Khusus permit (PIHK): **9120.5091.5251.10008**, Kementerian Agama RI.
- Service line: Haji, Umrah, and Wisata Halal.

These are real and now published on the landing page. Everything under **Evidence on Hand** about not fabricating permit numbers still binds for any credential not listed here.

### Open product decisions — record, do not invent

- Pembimbing's name, photo, and biography.
- Home city, office address, and operating hours.
- WhatsApp number(s) and consultant names.
- Whether Haji Khusus is actively sold on the site or only Umrah is, with Hajj handled by inquiry.
- Whether the sub-agent network gets any dedicated surface.
- What **Wisata Halal** covers as a product, and whether it needs its own packages and surface. The tagline claims it; the site does not yet describe it.

## Brand Commitments

- Name: **Aljamtour**.
- No logo, color palette, typeface, or existing brand asset has been supplied or made binding. The Next.js scaffold's appearance carries no brand authority.

## Evidence on Hand

All of the following exists and is real. None of it is in the repository yet; paths to be established when the client supplies files.

- **Real trip photographs** — actual departures, jamaah groups, hotels, and the Haram, from the company's own trips. Stock photography is not needed and should not stand in for these.
- **Real testimonials** — publishable quotes and video from past jamaah.
- **Legal documentation** — Kemenag PPIU and PIHK SK numbers, company registration, accreditation and association credentials.
- **Package and price list** — real departure schedules, IDR pricing, hotel names, airline, and per-package inclusions.

Do not fabricate testimonials, permit numbers, jamaah counts, years of operation, departure statistics, hotel names, or prices. Where a real value is not yet supplied, leave a marked placeholder that is obviously unfilled rather than a plausible invention.

## Product Principles

1. **Verifiability beats assertion.** In a market shaped by agency collapses, a checkable permit number outweighs any adjective. Show the documents; do not describe how trustworthy the company is.
2. **The pembimbing is the product.** Every surface should make it clear who leads these departures and why that matters. Anonymity here forfeits the only defensible position.
3. **Any page is the first page.** Traffic arrives through forwarded links. Every page must independently establish who this is, that they are licensed, and how to start a conversation.
4. **Two readers, one page.** The elder must be able to read it comfortably; the adult child must find the substance to scrutinize. Neither gets a compromised version.
5. **End every path at WhatsApp.** The site's only conversion is a conversation with a named human. Nothing should compete with it.

## Accessibility & Inclusion

- Presbyopic readers are a primary audience. Generous body type, high contrast, and large tap targets are requirements, not stylistic choices.
- Must remain fully usable on a mid-range Android phone over a slow mobile connection.
- Content is religious and consequential; tone and imagery must be respectful of the ibadah itself, never treating it as a holiday product.
