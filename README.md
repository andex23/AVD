# AVD — design and development

Independent local redesign of the existing https://avd-six.vercel.app site. This is separate from AVD Clientive and from Studio Builder.

Baseline repository: https://github.com/andex23/AVD, commit2a912766d65d9d3136ba64cb3bf1c75f7cc2a66e. The revision uses Work & Co as a communication/layout reference without copying its identity, text or work.

## Run

- npm ci
- npm run build
- npm run start -- -p 4416
- npm run typecheck
- npm run lint

Main routes: /, /work, /services, /systems, /about, /contact, /privacy, /terms. Four work details use real owned-project screenshots and verified destinations. Old placeholder case-study URLs redirect to /work.

The project catalogue is a curated local source at src/content/projects.seed.ts. No CMS, account, paid service or backend is required. The older Sanity integration modules remain unused and do not make page requests.

Contact validates locally, offers review/edit/reset and downloads a text brief. No request is sent and no browser storage is written. The old unverified contact addresses, performance claims, example.com links and inert newsletter have been removed.

See PLAN.md and SOURCES.md for the direction, source identity, references and image permissions/limits. Build/QA/publication evidence is coordinated in the parent redesign-v2 directory. Do not describe this revision as published until its deployment is confirmed.
