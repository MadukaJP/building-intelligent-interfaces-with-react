# Session 9 Assignment — Search History Tracker

**Time estimate:** 20–30 minutes
**New project:** yes — a fresh Vite + React app.

## Task

1. Create a new project: `npm create vite@latest search-history -- --template react`
2. Add a text input.
3. Every time the typed value changes, use `useEffect` to add it to a
   "recent searches" list, capped at the last 3 entries (most recent
   first, no duplicates needed to worry about).
4. Display the recent searches list below the input.

## What "done" looks like

Typing different values into the input builds up a visible list below it,
never showing more than 3 entries at once.

## Before Session 10: a quick look ahead

Session 10 covers CRUD's Update and Delete using `.map()` and `.filter()`
on arrays of objects. Before class:

- Given an array like
  `const items = [{ id: 1, qty: 2 }, { id: 2, qty: 1 }]`, try writing a
  `.map()` that returns a new array with item `id: 1`'s `qty` changed to 5
  — without changing the original array directly.
- Separately, try writing a `.filter()` that returns a new array with
  `id: 2` removed entirely. Console.log both results to check your work.
