# Session 7 Assignment — Three Ways to Style One Card

**Time estimate:** 20–30 minutes
**New project:** yes — a fresh Vite + React app.

## Task

1. Create a new project: `npm create vite@latest style-practice -- --template react`
2. Build one simple "weather widget" card (city name, temperature).
3. Style it **three separate times**, in three separate components (or
   three versions of the same one, swapped in and out) so all three look
   visually identical:
   - Using inline styles
   - Using an internal style object
   - Using an external stylesheet

## What "done" looks like

Three versions of the same card, all styled differently under the hood,
all looking the same on screen.

## Before Session 8: a quick look ahead

Session 8 introduces fetching real data from an API using `useEffect`.
Before class:

- Open any free public API in your browser directly (e.g.
  `https://api.quotable.io/random` or `https://dummyjson.com/products/1`)
  and look at the raw JSON it returns.
- Try using `fetch()` in a plain `useEffect` with an empty `[]` dependency
  array to log that JSON to the console when a component mounts — it's
  fine if this doesn't fully work yet, just get a feel for the shape of
  it before we build it properly together.
