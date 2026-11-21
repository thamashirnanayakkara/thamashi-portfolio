# Thamashi Nanayakkara — Portfolio

A complete React + Vite portfolio with an editorial visual identity, Framer Motion transitions, six project showcases, interactive achievement profiles, certificate previews and image zoom.

## Run locally (Windows + VS Code)

1. Extract this ZIP into a folder.
2. Open that folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the `Local` address Vite prints (usually `http://localhost:5173/`). Keep the terminal open while viewing the site.

## What's interactive

- Click the research presentation entry to view its certificate first, followed by conference photographs.
- Click the Line-Following Robot project title or its detail link to view the participation certificate, robot prototype and competition group photo.
- Click a qualification in the Certifications list to open its original certificate.
- Click the Tiny Toes Academy experience entry to view the academy logo and class photograph.
- Click the Coding Club, Leo Club or Female House Captain entry to view its documents and photographs.
- Click any certificate or photograph to enlarge it.

## Updating content

- **Projects, skills, experience, leadership, education and certification labels:** `src/data/portfolio.js`
- **Achievement descriptions and which images appear in each interactive panel:** `src/App.jsx`, in the `storyContent` object.
- **Achievement images:** `public/images/achievements/`
- **Hero and contact portraits:** `public/images/`
- **Colours, layout and animations:** `src/styles.css`

When replacing an image, keep the same filename or update its path in `storyContent` in `src/App.jsx`.

## Notes to verify before publishing

- The BCI Coding Club agreement supplied covers 25 January 2025–25 January 2026. The site does not claim the role continued beyond that date.
- The Leo Club 2026/2027 reappointment is described as user-provided information; no 2026/2027 certificate was supplied.
- The Leo appreciation letter displays `31/06/2026`, which is not a valid date, so the website shows the 2025/2026 Leoistic Year rather than repeating that issue date.
- Tiny Toes Academy class photograph includes children. Please confirm parent/guardian permission before publishing it publicly; otherwise replace it with a photo that does not identify children.
- Project repository links remain unlisted where none were supplied.

## Production build

```bash
npm run build
npm run preview
```

## Deploying with Vercel

Push the project to GitHub, import the repository into Vercel, and use the default Vite settings. Vercel will build the site whenever you push changes.
