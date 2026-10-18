# Links Hub

A playful, single-page personal link hub built with [Astro](https://astro.build) and Tailwind CSS v4. Ships zero client JavaScript.

## Edit your links

Everything on the page is driven by one file: **`src/data/links.ts`**.

- `profile` — name, handle, headline, bio, avatar
- `links` — the link buttons (add/remove/reorder objects)
- `projects` — the project tiles (placeholders — swap in your real repos)
- `tickerLines` — the scrolling banner text

No template changes are needed to add or reorder links.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `localhost:4321`               |
| `npm run build`   | Build the static site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Deploy

Static output (`dist/`) — no adapter required. Push to GitHub and import the repo into Vercel or Netlify.

Set the real URL in `astro.config.mjs` (`site`) so canonical and Open Graph tags are correct.
# mehedi.cyou
