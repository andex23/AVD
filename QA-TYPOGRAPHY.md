# Targeted typography and icon correction — 17 October 2026

AVD uses Anton only for page titles and Manrope for body, navigation, controls and secondary headings.

Both font families are self-hosted from the official Google Fonts repository with complete SIL OFL notices. Decorative arrows are inline SVGs with `aria-hidden="true"` and `focusable="false"`; link text retains the accessible name.

## Verification

- Production build/type checking passed.
- Chrome CDP confirms the actual custom font families render nonzero glyphs, separately from declared CSS families and FontFace loaded status.
- Every page checked at 1440, 768, 390 and 320px; no horizontal overflow or heading clipping.
- Forced Arial fallback with blocked font requests retains visible SVG arrows at desktop/mobile widths.
- 158 targeted Chromium font, SVG and layout checks passed.
- Full cross-browser record and captures: `../output/playwright/typography-fix/`.
- Source and license details: `SOURCES.md` and `public/fonts/`.

## Final shared browser pass

All 37 routes across six sites passed the targeted font audit: 440 Chromium checks and 403 Firefox checks at 1440, 768, 390 and 320px. Chromium reports actual rendered font glyphs through CDP; Firefox confirms loaded FontFace objects, computed family selection and glyph metrics distinct from Arial fallback. Commonstride and AVD SVG arrows remain visible with font requests blocked. Shared evidence: `../output/playwright/typography-fix/chrome.json` and `firefox.json`.

AVD’s 298 route, interaction and accessibility checks passed after the changes.
