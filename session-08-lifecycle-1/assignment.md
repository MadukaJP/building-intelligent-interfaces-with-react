# Session 8 Assignment — Random Quote Fetcher

**Time estimate:** 20–30 minutes
**New project:** yes — a fresh Vite + React app.

## Task

1. Create a new project: `npm create vite@latest quote-fetcher -- --template react`
2. Add a button labeled "New quote."
3. On click, fetch a random quote from a free public API (e.g.
   `https://api.quotable.io/random` or a similar free quote API) using
   `fetch` inside a `useEffect` or a click handler.
4. Show a loading message while the fetch is in progress.

## What "done" looks like

Clicking the button shows a loading message briefly, then displays a real
quote pulled from the internet — a different quote each time.

## Before Session 9: a quick look ahead

Session 9 covers what happens when you put a value **inside** `useEffect`'s
dependency array (`[value]`) instead of leaving it empty (`[]`). Before
class:

- In your quote fetcher, add a `useState` counter that's unrelated to the
  quote (e.g. a click counter).
- Try changing your `useEffect`'s dependency array from `[]` to include
  that counter, and see what happens to how often the effect runs. Undo
  it afterward if it breaks something — the point is just to observe the
  difference.
