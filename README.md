# Hecuba 555 Official Website

Modern, responsive official musician website for **HECUBA 555** by Flavio Sanguinetti.

Built with:
- Next.js
- TypeScript
- Tailwind CSS

## 1) Install

```bash
npm install
```

## 2) Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3) Deploy to Vercel

### Option A: Vercel Dashboard
1. Push this repository to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework preset should auto-detect as **Next.js**.
5. Click **Deploy**.

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

For production deployment:
```bash
vercel --prod
```

## 4) Where to edit text, images, and videos

- **Main editable site content (hero, about, videos, contact, footer links):**
  - `data/siteContent.ts`
- **Main page layout and section structure:**
  - `app/page.tsx`
- **Navigation component:**
  - `components/SectionNav.tsx`
- **Global styles and smooth scrolling:**
  - `app/globals.css`
- **Tailwind theme extension (phoenix gradient, colors, glow):**
  - `tailwind.config.ts`
- **Site metadata (title/description):**
  - `app/layout.tsx`

### Adding artist images
1. Add files to `public/`.
2. Render them in `app/page.tsx` using Next.js `<Image />`.
