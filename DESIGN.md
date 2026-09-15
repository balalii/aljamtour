---
name: Aljamtour
description: A calm light-editorial field opening on a navy night, where a licensed Umrah and Haji Khusus operator shows its legitimacy instead of asserting it.
colors:
  navy-950: "#071429"
  navy-900: "#0b2044"
  navy-800: "#123163"
  navy-700: "#1b4285"
  navy-600: "#2a57a0"
  navy-500: "#3f6fbd"
  navy-300: "#8ba6cf"
  navy-200: "#c2d1e6"
  navy-100: "#dde6f2"
  navy-50: "#eef3f9"
  amber-600: "#d9930a"
  amber-500: "#fbb117"
  amber-400: "#fdc44c"
  amber-200: "#fde2a8"
  amber-100: "#fef2d6"
  ground: "#f2f1ee"
  ground-deep: "#e8e6e1"
  surface: "#ffffff"
  ink: "#3f4b63"
  ink-soft: "#5e6b85"
typography:
  display:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  quote:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.03em"
  figure-lead:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.05em"
    fontFeature: "tnum"
  figure:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.045em"
    fontFeature: "tnum"
  title:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  body-fluid:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  ui:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
  detail:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  fine:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
  label-sm:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
  micro:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  focus: "4px"
  control: "1rem"
  card: "1.5rem"
  arch-foot: "1.75rem"
  plate: "2rem"
  pill: "999px"
spacing:
  gutter: "1.25rem"
  gutter-lg: "2rem"
  card-pad: "1.75rem"
  card-pad-lg: "2rem"
  block: "3.5rem"
  band: "6rem"
  band-lg: "8rem"
  section: "7rem"
  section-lg: "10rem"
components:
  pill-amber:
    backgroundColor: "{colors.amber-500}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.pill}"
    padding: "0 0.5rem 0 1.5rem"
    height: "3.25rem"
  pill-amber-hover:
    backgroundColor: "{colors.amber-400}"
    textColor: "{colors.navy-900}"
  pill-navy:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0 0.5rem 0 1.5rem"
    height: "3.25rem"
  pill-navy-hover:
    backgroundColor: "{colors.navy-700}"
    textColor: "{colors.surface}"
  pill-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy-800}"
    rounded: "{rounded.pill}"
    padding: "0 0.625rem 0 1.75rem"
    height: "3.75rem"
  pill-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0 0.625rem 0 1.75rem"
    height: "3.75rem"
  card-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "1.75rem"
  card-navy:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.navy-100}"
    rounded: "{rounded.plate}"
    padding: "1.75rem"
  wa-button-inline:
    backgroundColor: "{colors.amber-500}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3.25rem"
  select-field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.navy-800}"
    rounded: "{rounded.control}"
    padding: "0 2.75rem 0 1rem"
    height: "3.25rem"
  nav-bar-hero:
    backgroundColor: "{colors.navy-950}"
    textColor: "{colors.surface}"
    height: "5rem"
  nav-bar-page:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    height: "5rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.875rem"
    typography: "{typography.ui}"
  nav-link-hover:
    backgroundColor: "{colors.navy-50}"
    textColor: "{colors.navy-800}"
  nav-link-on-navy:
    backgroundColor: "transparent"
    textColor: "{colors.navy-100}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.875rem"
    typography: "{typography.ui}"
  nav-link-on-navy-hover:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.surface}"
  notice-band:
    backgroundColor: "{colors.navy-950}"
    textColor: "{colors.navy-200}"
    padding: "0.625rem 1.25rem"
    typography: "{typography.fine}"
  step-marker:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    size: "3rem"
---

# Design System: Aljamtour

## Overview

**Creative North Star: "The Mihrab Window"**

The page opens on a navy night and then walks out into daylight. The first viewport is a full-bleed navy-950 field: one photograph of the haram drained to luminance, tinted back to the brand's own blue, and sunk under a vignette until only the type and the two pills carry light. Everything below it is a calm, light editorial field — warm neutral ground, white plates, navy bands for rhythm — where the only thing that breaks the rectangles is an arch drawn from a mihrab profile, through which the page's portrait photographs are seen. The world is quiet on purpose: its audience is jamaah aged 45–70 and their adult children comparing agencies, and it deliberately refuses the Indonesian umrah-agency default of rotating banner carousels, walls of badge GIFs, and price tables shouting above the fold. Legitimacy is shown — a checkable permit number, a named pembimbing, photographs of real ground — not asserted in loud type.

Density is generous rather than packed. Sections breathe at a 7rem/10rem rhythm inside an 84rem container, plates carry 1.75–2rem of internal padding, and text measures cap around 46rem or 62ch. Navy does the structural work: it is the ink, the dark field, the rule tint at 10–15% opacity, and the marker colour. Amber appears rarely and only where a hand is meant to move, with one measured exception in the hero headline.

The identity device is borrowed straight from the company mark: three bars ascending left to right, with the tallest carrying the J's hook. That rhythm reappears in exactly two places on the page — the section marker that opens every section, and the logo lockup itself — always in navy on light ground, never in the action colour, so it never competes with a call to action. One typeface, Figtree, carries the whole page on weight contrast alone (400 against 800), the same move the mark makes when three bars of one shape climb in height.

**Key Characteristics:**
- A navy-950 night as the first viewport, resolving into a warm light-neutral ground (#f2f1ee) with white plates and navy bands below it
- Amber as the action colour, spent on a countable set of sites, plus one emphasis word in the hero headline
- One mihrab arch, drawn from elliptical radii, as the only non-rectangular silhouette
- One family, two weights (400/800) as the only display device; tabular numerals on every figure
- The whole page arrives on scroll, with each section's reveal derived from what that section is; plus one authored hero arrival and one press feedback
- Photographs carry one shared grade (`graded`) on light ground and the luminance-only `night` grade on the dark field

## Colors

A navy-and-amber pair lifted from the company mark — a deep institutional navy field and the amber of its three bars — set on a warm, slightly grey paper rather than pure white, and on a near-black navy for the two fields that carry the page's ends.

### Primary
- **Permit Navy** (`{colors.navy-800}`): The ink and the working dark surface. It sets every heading, every step marker and numeral plate, the pinned mobile drawer, the highlighted package card, the full-bleed pembimbing band, and the closing plate. Its 10–15% tints draw every hairline rule and card border; its 4–6% tints are the hover wash on ghost controls.
- **Night Navy** (`{colors.navy-950}` / `{colors.navy-900}`): The page's two dark ends and the hero night. It is the hero field, the notice band above the nav, the nav bar's own background while it sits over the hero, the footer, the hero's top and bottom gradients and radial vignette, and the mobile drawer's page overlay at 45%.
- **Mid Navy** (`{colors.navy-700}` / `{colors.navy-600}`): Interaction navy — focus-ring outline, caret and accent-color, hover state on navy fills, the colour tinting the hero photograph through `mix-blend-color`, and the colour of small icons sitting on light ground.
- **Pale Navy** (`{colors.navy-300}` / `{colors.navy-200}` / `{colors.navy-100}` / `{colors.navy-50}`): The on-navy voice. Body copy, small-caps labels, figures, and icons on a navy field use these; scrollbar thumb uses the 300 step; the light-ground nav-link hover wash uses the 50 step.

### Secondary
- **Signal Amber** (`{colors.amber-500}`): The action colour. It fills the primary pill, the Pandu WhatsApp button, the floating WhatsApp action, and the FAQ toggle's open state; it sets type only on navy — the footer's WhatsApp link, a drawer link's hover, and the hero headline's one emphasised word. It carries the bars inside the logo mark, on the mark's own navy field, and it is the focus-ring colour inside any `.on-navy` region. `{colors.amber-400}` is its single hover step.
- **Amber Tints** (`{colors.amber-200}` / `{colors.amber-100}` / `{colors.amber-600}`): Defined in the token layer as the scale's low and deep ends; the shipped page spends none of them on surfaces. Treat them as available, not as licence to add amber sites.

### Neutral
- **Warm Paper** (`{colors.ground}`): The page ground under everything below the hero, and the sticky nav's fill at 85% once it leaves the dark field.
- **Deep Paper** (`{colors.ground-deep}`): Scrollbar track and the recessed wash behind select fields.
- **Plate White** (`{colors.surface}`): Cards, the Pandu plate, and the "most chosen" badge on a navy card.
- **Reading Ink** (`{colors.ink}`): All body copy on light ground (7.75:1).
- **Quiet Ink** (`{colors.ink-soft}`): Small-caps labels, captions, disclaimers, and the lockup's descriptor line (4.75:1).

### Named Rules

**The Action-Only Amber Rule.** Amber marks the places a hand is meant to move. On the light ground it may fill a shape but must never set type — it measures 1.6:1 against the page ground. On navy it clears 6.93:1 and may do both. The shipped page spends it as a fill on the primary pill, the Pandu button, the floating WhatsApp action and the open FAQ toggle, and as type only on navy: the footer WhatsApp link, the drawer link hover, and one emphasised word in the hero headline (about 5.9:1 against the brightest pixel behind it). That last one is the system's single emphasis use of the action colour, and it is allowed because the dark field measures. A new amber site needs a reason and a measurement, not a taste.

**The Navy Voice Rule.** On a navy field, small-caps labels, quote marks, step numerals, figures, and icons take `{colors.navy-100}`, `{colors.navy-200}`, `{colors.navy-300}`, or white — never amber. Amber on navy is reserved for the action and for the one headline emphasis, so decorating with it there costs the page its signal.

**The Borrowed-Ground Rule.** Every text/ground pair in the page clears WCAG AA: body ink at 7.75:1, headings at 11.3:1, quiet ink at 4.75:1, the amber fill with its navy label at 8.74:1, amber on navy at 6.93:1, and the hero's white headline at 10.95:1 against the brightest background pixel in its band. Those hero numbers are held by the vignette and the two gradient scrims, not by the photograph: lightening the radial overlay (currently `rgba(7,20,41,0.58)` at centre to `rgba(7,20,41,0.90)` at 74%) or reducing the navy tint layer breaks them. A new pair earns its place by measuring, not by looking close enough.

## Typography

**Display Font:** Figtree (variable, via next/font, with `ui-sans-serif, system-ui, sans-serif` fallback)
**Body Font:** Figtree — the same family
**Label Font:** Figtree, at 700 uppercase with wide tracking

**Character:** A single humanist grotesque doing every job, distinguished only by how heavy it is. Headlines set a plain-spoken sentence in 400 and pull the one word that carries the claim up to 800; nothing is italic, nothing is a second family, and no heading is ever all-caps. Negative tracking (-0.03em, and -0.04 to -0.05em on large figures) keeps the heavy weight from feeling inflated. The `cv11` and `ss01` features run page-wide.

### Hierarchy

The ramp is a role ladder, not a free scale. Every size below appears in the shipped page and each belongs to a job; a new size is a new role and needs one.

- **Display** (400 mixed with 800, `clamp(2.5rem, 6.6vw, 5rem)`, line-height 1.03): The hero headline, one per page. Three spans: white at 400 for the sentence, amber at 800 for the accented word.
- **Headline** (400 mixed with 800, `clamp(1.9rem, 4vw, 3.25rem)`, line-height 1.08): Section headings, built the same way — navy-800 at 75% for the sentence, solid navy-800 at 800 for the accented word; on navy, navy-100 and white.
- **Quote** (600, `clamp(1.5rem, 3.2vw, 2.5rem)`, line-height 1.22): The pembimbing pull quote, once per page.
- **Figure, lead** (800, `clamp(3.5rem, 7vw, 5.5rem)`, tabular): The one figure that leads the ledger band.
- **Figure** (800, `2.75rem`, -0.045em, tabular): Prices. The ledger's secondary figures sit a step below at `clamp(1.75rem, 3vw, 2.5rem)`.
- **Title** (800, `1.375rem`): Card names and the legality band's permit numbers.
- **Subtitle** (700–800, `1.25rem`): Journey step titles, ledger entry labels, mobile drawer links.
- **Title, small** (700–800, `1.125rem`): The Pandu composer's heading and the price's unit suffix — the step between a card title and a lead paragraph.
- **Lead** (400–700, `1.0625rem`, line-height 1.62–1.7): Section-opening paragraphs, FAQ questions, testimonial quotes, the step numeral, and the lockup wordmark at 800.
- **Body** (400, `1rem`, line-height 1.68–1.7): Running copy in steps, FAQ answers, and panels, capped at 46rem or 62ch. The hero subcopy runs fluid at `clamp(1rem, 1.5vw, 1.1875rem)`.
- **UI** (500–700, `0.9375rem`): The page's default interface size — nav links, medium pill labels, select values, card copy, footer links, inline buttons.
- **Detail** (400–600, `0.875rem`): Card feature lists, small pill labels, the hero proof line, dense secondary copy.
- **Fine** (400, `0.8125rem`): Disclaimers, the notice band, sub-captions under a figure.
- **Label** (700, `0.75rem`, 0.10–0.14em tracking, uppercase): Field labels, definition-list terms, footer column headings, photo captions.
- **Label, small** (700, `0.6875rem`, 0.1em, uppercase): The "most chosen" badge on a package card.
- **Micro** (600, `0.625rem`, 0.16em, uppercase): The logo lockup's descriptor line only, hidden below 400px.

### Named Rules

**The One Family, Two Weights Rule.** Figtree at 400 and 800 is the entire display system. Hierarchy comes from weight and size, never from a second family, an italic, a colour accent inside a heading (the hero's amber word excepted, and it is one word), or all-caps above 0.75rem.

**The Tabular Figure Rule.** Every number a visitor might compare against another number — prices, durations, counts, years, permit numbers — carries `.tnum`. Figures read in columns across cards and tables; proportional digits make them wobble.

**The Sentence-First Rule.** A heading starts with its sentence. No kicker, eyebrow, or category chip sits above it; proof lines sit *under* the action instead, where they confirm rather than delay.

## Layout

One centred container at `84rem` max width with `1.25rem` gutters, rising to `2rem` at the `sm` breakpoint; every section shares it, including the footer, the nav bar, and the hero's content column. Two elements break the container by painting edge to edge while keeping their content on the same grid: the hero's dark field and the pembimbing band. The notice band and footer paint full width as well.

Vertical rhythm is deliberately coarse: sections open at `7rem` top margin, `10rem` from `sm` up; the two quieter bands (legality, footer) sit a step in at `6rem` / `8rem`. Inside a section, a `BarRule` marker sits first, then `3.5rem` to the heading block, then `3rem–5rem` to the content. Two-column sections use an asymmetric split (`0.8fr / 1.2fr` for rail sections, `1.15fr / 1fr` and `0.85fr / 1.15fr` elsewhere) with a sticky left column (`top: 7rem`) on `lg` and above; card grids are one column on mobile, three at `lg`. The Pandu plate is pulled `5rem` up out of the hero's lower edge and overlaps it. Scroll anchoring reserves `6.5rem` of scroll padding for the sticky nav (height `5rem`).

Breakpoints are Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280), plus one project-specific `min-[400px]` guard that hides the lockup's descriptor line on the narrowest phones. The layout is mobile-first throughout: the audience arrives on mid-range Android from forwarded links, and the primary action follows them down the page as a fixed pill after 640px of scroll.

## Elevation & Depth

Mostly flat, with depth carried by tone, by the arch, and — in the hero — by an explicitly built atmosphere. Cards on the light ground are defined by a `1px` navy hairline at 12% and a white fill; navy bands create depth by value contrast alone. The hero stacks five layers to make its night: the photograph under the `night` filter, a `{colors.navy-700}` tint at 70% in `mix-blend-color`, a radial vignette, and top and bottom gradients into navy-950. Only two shadows exist, both navy-tinted rather than grey, and both reserved for elements that genuinely float above the page.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 1px 2px rgb(18 49 99 / 0.04), 0 12px 28px -12px rgb(18 49 99 / 0.16)`): Filled action pills and the Pandu button. Enough to separate the action from the ground; not enough to read as a button bevel.
- **Float** (`box-shadow: 0 2px 4px rgb(18 49 99 / 0.05), 0 28px 60px -24px rgb(18 49 99 / 0.28)`): Elements that truly overlap something else — the Pandu plate bleeding over the hero field, the highlighted package card, the fixed WhatsApp action.

### Named Rules

**The Two Shadows Rule.** There are two shadows and no third. A surface that is not overlapping another surface gets a hairline border, not a new shadow. Both shadows are tinted with the navy ink; a neutral grey or black shadow does not belong on this ground.

## Shapes

Two corner languages and one silhouette.

**The arch** is the page's signature, drawn from elliptical border radii rather than a traced polygon — the polygon faceted its curve at large sizes and read as a blob rather than a dome. `arch` is the wide variant (`border-radius: 50% 50% 1.75rem 1.75rem / 30% 30% 1.75rem 1.75rem`); `arch-sm` is the portrait variant (`50% 50% 1.5rem 1.5rem / 32% 32% 1.5rem 1.5rem`) used on the `4/5` photo blocks in Tentang and the pembimbing portrait plate. Because the shape is now a radius and not a clip, any container carrying it must also clip its contents (`overflow-hidden`, or `overflow-clip` where a scroll reveal is involved) or its image will square off the dome. **`arch` is currently defined but unused**: the hero it was drawn for is now the dark field. It stays in the token layer as the wide variant, the way the unused amber tints stay in the palette — available, not an invitation.

**Corners** run on a small scale: `4px` on the page-wide focus ring, `1rem` on controls (selects, inline buttons, step markers), `1.5rem` on secondary panels and the foot of `arch-sm`, `1.75rem` on the foot of `arch`, `2rem` on plates and package cards, and full `999px` rounding on pills, badges, tabs, and icon buttons. Borders are always hairline navy tints (10–25%) or white tints (10–30%) on navy — never a solid stroke, never a second colour.

**The bar rhythm** is the recurring graphic device: three bars of one width ascending left to right, drawn from the company mark, with the tallest carrying the J's hook in the mark itself. On the page it appears in exactly two placements: the section marker (`BarRule`, paired with a hairline that fades to transparent rather than spanning the page) and the logo lockup, plus one decorative use of the bars alone inside the pembimbing portrait placeholder.

### Named Rules

**The One Arch Rule.** The arch is the only non-rectangular silhouette on the page, and it exists in exactly two variants, both built from radii. A new curved mask, a circular photo crop, or a second decorative shape dilutes it to nothing.

**The Navy Bars Rule.** The three ascending bars render in navy wherever they appear as a page device — the section marker and the lockup on light ground — precisely so they do not compete with the action colour. They are amber only inside the logo mark itself, on the mark's own navy field, and white/pale-navy when the lockup or marker sits on a navy field. The J hook belongs to the mark and appears nowhere else on the page.

## Components

### Buttons
- **Shape:** Fully rounded pill (`{rounded.pill}`), three heights: 2.75rem (sm), 3.25rem (md), 3.75rem (lg). Asymmetric padding — generous on the label side, tight on the badge side — because the pill always carries a circular arrow badge at its trailing end (2rem / 2.375rem / 2.75rem).
- **Primary (amber):** Amber fill with navy-900 label (8.74:1), Lift shadow, navy-800 badge carrying an amber arrow. Hover moves the fill to `{colors.amber-400}` over 200ms and rotates the badge 45° over 300ms on the settle easing.
- **Secondary (navy):** Navy-800 fill, white label, amber badge with a navy arrow. Hover moves to `{colors.navy-700}`.
- **Ghost (outline / outline-light):** A 25% navy hairline with navy label on light ground; a 30% white hairline with white label on navy. Hover deepens the border and adds a 4–10% wash.
- **Inline WhatsApp button:** A `1rem`-cornered rectangle rather than a pill, `3.25rem` tall, used inside cards and panels. Amber-filled on navy cards and on the Pandu plate; ghost-navy on light cards (hover inverts to a solid navy fill); navy-filled with an amber glyph in the FAQ panel. Its WhatsApp glyph scales to 1.1 on hover.

### Cards / Containers
- **Corner Style:** `{rounded.plate}` for package, testimonial, legality, closing, and Pandu plates; `{rounded.card}` for secondary panels.
- **Background:** White, or white at 60–70% on the paper ground; navy-800 for the single highlighted plate in a set and for the closing plate.
- **Shadow Strategy:** None by default — a hairline border only. The highlighted plate takes the Float shadow and steps `1rem` vertically out of its row at `lg`.
- **Border:** `1px` navy at 12% on light plates; internal dividers at 10%. On navy plates, white at 12–15%.
- **Internal Padding:** `1.75rem`, rising to `2rem` at `sm`; the closing plate takes `3.5rem`/`4rem` and the highlighted package plate `3rem` of vertical padding.
- **Badge:** A white fully-rounded chip with a 0.6875rem uppercase navy label, placed *beside* a card's title on a navy plate to mark the most-chosen package. It is a status marker on a card, not a kicker above a heading.

### Inputs / Fields
- **Style:** `1rem`-cornered select, `3.25rem` tall, recessed paper fill at 60%, `1px` navy hairline at 14%, navy-800 semibold value text, native appearance stripped with a chevron placed at the right inset.
- **Label:** Uppercase 0.75rem label at `{colors.ink-soft}`, prefixed by a navy-600 icon.
- **Focus:** A `2px` navy-700 outline at `3px` offset with a `4px` radius, applied page-wide to `:focus-visible`; inside a navy field (`.on-navy`), the outline switches to amber. Hover deepens the field border to 30%.

### Navigation
- Sticky header, `5rem` tall, **tone-aware**. It watches a `#hero-end` sentinel with an IntersectionObserver (80px root margin) and carries two states. Over the hero: `{colors.navy-950}` fill, transparent bottom border, white and navy-100 type, light logo lockup, white-hairline icon button. Past the hero: paper at 85% with a heavy backdrop blur, a 10% navy bottom hairline, `{colors.ink}` links and a navy lockup. The two states cross-fade over 300ms on the settle easing.
- Links are 0.9375rem medium in pill-shaped hit areas; on light ground hover washes navy at 6% and darkens the label to navy-800, on the dark field hover washes white at 10% and lifts the label to white. Links are shown at `lg` and above; the phone number appears at `xl`.
- Mobile is a right-side navy-800 drawer (`min(22rem, 88vw)`) over a navy-950 scrim at 45%, sliding in over 400ms. Drawer links are 1.25rem white semibold, separated by white hairlines at 10%, and hover to amber — one of the three places type takes the action colour, because it sits on navy.

### The Notice Band (signature, conditional)
A full-width navy-950 strip above the nav, `0.625rem` of vertical padding, 0.8125rem navy-200 copy with a white bold opening phrase ("Pratinjau desain."), centred and capped at 70rem. It renders only while `KONTEN_MASIH_CONTOH` is true in `content.ts`: prices, testimonials and contacts are still placeholders, which is regulated territory for an Indonesian PPIU, and a review build must never be mistaken for a live one. It is a state of the build, not a decoration; when the content goes real, the band goes.

### The Hero Dark Field (signature)
A full-bleed `{colors.navy-950}` band, `3.5rem`/`5rem` of top padding and `7rem`/`8rem` of bottom padding, carrying one photograph under the `night` filter (`saturate(0.12) brightness(0.52) contrast(1.22)`) positioned at `center 58%`. Above it: a `{colors.navy-700}` layer at 70% opacity in `mix-blend-color` — the photograph supplies luminance only, the brand supplies the hue — then a radial vignette, top/bottom gradients into navy-950, and a solid navy-950 curtain that rests at `opacity: 0` and only exists to lift on arrival. Content is centred in a 4xl column: the display headline in white with one amber word, navy-100 subcopy at 44rem, two lg pills, then the proof line in navy-100, then an office/permit pair split across a 12% white hairline. A `#hero-end` sentinel closes the section for the nav's observer.

### The Bar Rule (signature)
Three navy bars ascending at `1.5rem` tall, followed by a hairline that fades from 22% navy to transparent rather than spanning the full width. It opens every section. The identity is the bar rhythm, not the rule; a full-width hairline with a speck on its end reads as neither.

### The Journey Rail (signature)
A numbered `<ol>` where each step's marker is a `3rem` navy square with `1rem` corners carrying a tabular white numeral, and the run between markers is a plain `0.125rem`-wide fully-rounded column of navy at 15%. The rail is a quiet spine: it measures the distance between steps and says nothing else. Each run carries `.rail`, which draws itself on a view timeline as the reader passes that stretch; its resting transform is none, so an unsupporting browser or a reduced-motion reader gets the complete rail.

### The Pandu Plate (signature)
A white `2rem`-cornered plate with the Float shadow, pulled `5rem` up over the hero field's lower edge. Three labelled selects and one amber WhatsApp button, `1.25rem`/`1.5rem` of padding. It is not a booking form: it composes the opening WhatsApp message and stores nothing.

### Motion
Motion has four jobs here and no fifth: one authored arrival, arrival and continuity as the reader scrolls, feedback on touch, and nothing decorative.

**Two easings, split by what drives them.** `--ease-settle` (`cubic-bezier(0.16, 1, 0.3, 1)`) carries everything on a clock — the hero arrival, hovers, transitions. `--ease-scroll` (`cubic-bezier(0.38, 0.02, 0.2, 1)`) carries everything on a scroll timeline. The split is not decoration: a hard deceleration spends most of its change in the first pixels of travel, and the scroll reveals built on `--ease-settle` measured 0.76 opacity at the first sample — resolved before the reader could see them move.

**Focal — the hero arrival.** Three layers over the dark field, all inside `prefers-reduced-motion: no-preference`: `curtain` (1.25s) fades a solid navy-950 sheet over the photograph from 1 to 0; `hold-release` (1.6s) settles the photograph back from `scale(1.06)`; `land` (0.62s after a 0.3s delay) brings the amber word "pembimbing" in after the sentence it sits in. The delay is the authored beat — the product's own word lands last — and it is short on purpose: at 0.42s the gap read as a missing word rather than as emphasis. The `settle` ladder (0.9s, `d1` 0.05s through `d6` 0.58s) carries the rest of the hero content.

**Arrival — every section reveals on scroll.** The whole page below the hero arrives as the reader travels it: 41 elements across every section, driven by view timelines inside `@media (prefers-reduced-motion: no-preference)` and `@supports (animation-timeline: view())`. **The reveal a section gets is derived from what that section is**, and that derivation is the whole discipline here — one identical entrance repeated down a page is the failure this avoids, not the effect it wants.

- **`.sr`** (`sr-rise`: opacity, a 3rem lift, `blur(7px)` clearing; range `cover 4% cover 46%`) — the general arrival, on section headings, BarRule dividers, prose, cards, steps, quotes, disclosures, the footer grid.
- **`.sr-wipe`** (opacity, 2.75rem from the left, `blur(5px)` clearing; same base range) — the Tentang ledger's entry rows only: entries written in from the margin of a record.
- **`.sr-unveil`** (opacity, a 4rem lift, scale 1.06 → 1; range `cover 0% cover 40%`) — the two arched photographs only (Tentang, Pembimbing): the arch uncovering what stands inside it.
- **`.sr-come`** (opacity 0.2 → 1, a 2.5rem lift, scale 0.955 → 1; range `cover 0% cover 36%`) — the closing panel only: it steps forward to be answered.
- **`.st1`–`.st4`** — stagger implemented as a *shift of the scroll range* (`cover` 10/16/22/28% to 52/58/64/70%), never as a time delay, so a slow scroll reads the sequence and a fast scroll does not queue a backlog of late animations. Grouped sets cap at `st4`.

**Ranges are measured in `cover`, never `entry`.** An `entry` range is only as long as the element is tall, so the same class made short blocks finish in a blink and tall ones crawl: one ordinary `.sr` heading resolved 0 → 1.00 between 102% and 92% of viewport height — about 58px of scroll, complete while still at the very bottom edge, which is why the reveals could not be felt. `cover` spans the viewport plus the element, so a short heading and a tall card resolve in roughly the same place. Re-measured after the change, an `.sr` element runs 0.00 at 102% of viewport height, 0.06 at 95%, 0.38 at 87%, 0.72 at 78%, 0.89 at 71%, 0.97 at 64%, 1.00 at 57% — 38% of viewport height instead of 10%, resolving as the element reaches the reading zone. Don't simplify these back to `entry`.

**The blur is budgeted.** `sr-rise` and `sr-wipe` clear a small blur because they move type and small plates. `sr-unveil` and `sr-come` deliberately carry none: they are the largest painted surfaces on the page and the filter is not worth it on a mid-range phone. Re-measured at 390x844 with the CPU throttled 4x, a full-page scroll gave a median frame of 16.7ms, p90 17.5ms, p99 18.4ms, and zero frames over 50ms — the blur runs on the compositor, and a new one on a full-bleed surface would not.

The hero keeps its own load sequence and takes no scroll reveal.

**The fallback.** `app/components/Reveal.tsx` mounts once in `page.tsx`, returns null, and does nothing where view timelines exist. Only when `CSS.supports('animation-timeline','view()')` is false *and* reduced motion is not requested does it add `.sr-js` to the root and run a single IntersectionObserver that adds `.sr-in` and unobserves. All the hiding CSS is scoped under `.sr-js`, so a browser where the script never runs shows the full page rather than a blank one.

**Continuity — the journey rail.** The `.rail` span between two step markers is drawn as the reader travels it: `rail-draw` on `animation-timeline: view()` with `animation-range: entry 30% cover 55%`, inside `@supports (animation-timeline: view())` inside the reduced-motion query. Measured across four pinned scroll offsets it runs 0.01 → 0.41 → 0.86 → 1.00, each segment lagging the one above it. This is the only scroll-driven element on the page, and it is scroll-driven because the scroll relationship *is* the meaning: the reader is travelling the five steps.

**Continuity — the package tabs.** A single absolutely-positioned navy pill inside a `relative` tablist translates between two tabs (`transition: transform 0.3s`, `motion-reduce:transition-none`) rather than each tab painting its own fill. The two tabs are deliberately equal width (`w-1/2`, 125px each) so the move is a pure translate and the pill's radius never distorts; sizing tabs to their labels would break it. The 400ms `panel-in` crossfade on the panel below stays.

**Continuity — the FAQ disclosures.** `details.tanya::details-content` transitions `block-size` (0.34s) and `content-visibility` with `allow-discrete`, under `@supports (interpolate-size: allow-keywords)` with `interpolate-size: allow-keywords` on `:root` (measured opening 84 → 206 → 221px and closing back). Unsupported browsers keep the instant open they always had.

**Feedback — press.** The `.press` utility (`transition: transform 0.12s`; `:active { transform: scale(0.975) }`) sits on all five action families: the `Pill`, the Pandu composer button, the package card CTA, the FAQ contact button, and the WhatsApp FAB. It lives *outside* the reduced-motion query on purpose — it confirms a tap rather than decorating one, and that is the distinction reduced motion draws.

Everything else is a 200–400ms colour or transform transition on a state change.

**The Visible-By-Default Rule.** Every animation is wrapped in `prefers-reduced-motion: no-preference` (press feedback excepted, deliberately) and uses `animation-fill-mode: both` on content already in the document. **Every animated element's CSS resting value must equal its final state**, set outside the reduced-motion query. The curtain is the case that proves it: `.anim-curtain` carries `opacity: 0` at rest, and an earlier draft that left it at the default opacity 1 hid the hero photograph entirely whenever motion was reduced. The scroll reveals apply the same principle to a script instead of a media query: nothing is hidden until `Reveal.tsx` has confirmed it is running and can put every element back. It pays a third time in evidence: full-page captures switch these animations off before shooting, because a viewport as tall as the document never completes a `cover` range — safe only because the resting state is the final state. Re-verified: 54 animated elements tracked, 0 hidden, 0 animations running, the rail fully drawn, `.sr-js` not applied, press feedback still active.

## Do's and Don'ts

### Do:
- **Do** spend amber where a hand is meant to move; on light ground it may fill a shape only — it measures 1.6:1 against `{colors.ground}` and cannot set type there.
- **Do** set labels, numerals, quote marks, and icons on navy in `{colors.navy-100}`, `{colors.navy-200}`, `{colors.navy-300}`, or white.
- **Do** render the three ascending bars in navy when they act as a page device; they are amber only inside the logo mark.
- **Do** keep the hero's vignette and gradient scrims at their shipped depth — they are what hold 10.95:1 for the white headline and about 5.9:1 for the amber word.
- **Do** pair the `arch-sm` utility with clipping on its container — the shape is a radius now, not a clip, and an unclipped child will square the dome off — and reach for `overflow-clip` rather than `overflow-hidden` on any wrapper that carries or contains a scroll reveal.
- **Do** put every photograph on light ground through `graded`, and any photograph used as a dark field through `night` under a navy tint layer, so sourced images read as one body of work.
- **Do** build headings from a 400-weight sentence with one 800-weight span, in Figtree, at the established clamps.
- **Do** put `.tnum` on every figure a visitor might compare against another figure.
- **Do** pick a size from the role ladder rather than inventing one; a new size means a new role and needs an argument.
- **Do** keep new motion inside `prefers-reduced-motion: no-preference`, and keep content visible without it — press feedback is the one deliberate exception, because it confirms a tap rather than decorating one.
- **Do** keep embedded provenance on any raster that ships, including replacements.

### Don't:
- **Don't** set amber type on the light ground, and don't add an amber site without a measurement behind it.
- **Don't** put a kicker, eyebrow, or category chip above a heading — proof lines belong under the action, not ahead of the sentence.
- **Don't** introduce a second typeface, an italic, or an all-caps heading above 0.75rem; weight contrast is the only display device.
- **Don't** add a third shadow, a grey or black shadow, or a shadow on a surface that is not overlapping another surface.
- **Don't** rebuild the arch as a clip-path or a plain `border-radius: 50%`, and don't add a second decorative silhouette or a circular photo crop.
- **Don't** put the J hook anywhere outside the logo mark.
- **Don't** give two sections the same reveal by default. The page reveals on scroll everywhere, and the discipline that keeps that from being wallpaper is that each reveal is derived from what its section is — reach for `.sr-wipe`, `.sr-unveil` or `.sr-come` when the section has its own logic, and `.sr` only when it does not.
- **Don't** stagger with a time delay; stagger by shifting the scroll range (`.st1`–`.st4`), so a fast scroll never queues a backlog of late animations.
- **Don't** let a revealed element grow taller than the viewport: a subject taller than the scrollport has a degenerate range and can never finish revealing. Re-run the check at 1440x900, 390x844 and 360x780 after changing any section's height — zero stuck below opacity 1 after a full scroll walk.
- **Don't** put `overflow: hidden` on any wrapper that contains a scroll reveal; use `overflow: clip`. `hidden` makes the element a scroll container, so a `view()` timeline inside it resolves against that box instead of the document, the box never scrolls, and the reveal freezes at its starting value. This shipped as a real defect — one ledger row sat at opacity 0 permanently on mobile and at 360px. `clip` clips identically, border-radius included. It is invisible in code review and shows up only as missing content.
- **Don't** ship an animated element whose resting CSS is not its final state — under reduced motion that resting value is the page.
- **Don't** reintroduce the agency defaults this world refuses: rotating banner carousels, walls of badge graphics, or a price table above the fold.

## Photography

Seven rasters in `public/img/` (`haram-hero`, `haram-wide`, `haram-aerial`, `nabawi`, `green-dome`, `clock-tower`, `arafat`) are CC0 images from Wikimedia Commons, each carrying embedded provenance. **They are placeholders standing in for the client's own trip photography and must not be treated as final assets.** Anything that replaces them keeps embedded provenance and keeps its grade: `graded` (`saturate(0.22) sepia(0.32) contrast(1.14) brightness(0.97)`) on light ground, `night` (`saturate(0.12) brightness(0.52) contrast(1.22)`) under the hero's navy tint. Four of the seven (`haram-wide`, `haram-aerial`, `nabawi`, `clock-tower`) are not currently placed on the page.
