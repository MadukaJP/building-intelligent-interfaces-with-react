# Session 3 Assignment — Recipe Box

**Time estimate:** 20–30 minutes
**New project:** yes — a fresh Vite + React app.

## Task

1. Create a new project: `npm create vite@latest recipe-box -- --template react`
2. Create an array of 5 recipe objects, each with `id`, `name`, and
   `cookTime` fields.
3. Render them as a list of cards using `.map()` — one component per
   recipe, generated from the array (don't hardcode 5 separate cards).
4. Deliberately remove the `key` prop from your `.map()` call, open the
   browser console, and note the warning. Then add `key` back.

## What "done" looks like

5 recipe cards on screen, all generated from one array via `.map()`, with
a `key` prop correctly set using each recipe's `id`.

## A quick look ahead

Session 4 is a review session (no new topics), and Session 5 introduces
**events** — making buttons actually do something when clicked. Before
Session 5:

- Add a plain `<button>` to one of your recipe cards (it doesn't need to
  do anything yet).
- Look up `onClick` in React's docs or a quick search, and try getting the
  button to run `console.log("clicked")` when pressed — just to see the
  syntax once before we cover it properly in class.
