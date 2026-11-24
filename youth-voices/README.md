# Youth Voices (frontend prototype)
React + Vite + Tailwind CSS + Lucide. No backend; all content is fictional sample data in `src/data.js`.

## Run
```
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173). Build: `npm run build`.

## Structure
- `src/data.js` sample creators, poems, thoughts, works
- `src/App.jsx` hash router, pages and reusable components
- Routes: `#/`, `#/poetry`, `#/poetry/p1`, `#/thoughts`, `#/thoughts/t1`, `#/creative`, `#/spotlight`, `#/discover`, `#/creator/ayesha`, `#/share`

Submissions in the Share form are not stored. Fonts load from Google Fonts with system fallbacks.
