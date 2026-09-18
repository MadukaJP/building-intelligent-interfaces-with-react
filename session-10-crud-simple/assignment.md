# Session 10 Assignment — Grocery List

**Time estimate:** 20–30 minutes
**New project:** yes — a fresh Vite + React app.

## Task

1. Create a new project: `npm create vite@latest grocery-list -- --template react`
2. Build a simple form to add grocery items (name + quantity) to a list,
   using `useState`.
3. Allow updating an item's quantity.
4. Allow removing an item entirely.

No API calls — this is local state only, mirroring the cart's
Update/Delete logic in a different context.

## What "done" looks like

A list of grocery items where you can add new ones, change quantities,
and remove items, all reflected immediately on screen.

## Before Session 11: a quick look ahead

Session 11 turns Update/Delete into real network requests using `fetch()`
with different HTTP methods. Before class:

- Look up the difference between `GET`, `POST`, `PUT`, and `DELETE` HTTP
  methods (a quick search or MDN is enough) and write one sentence on what
  each one is generally used for.
- In your grocery list, try adding a `<form onSubmit={...}>` around your
  "add item" input/button instead of a plain button click, and see what
  happens when you submit it without calling `e.preventDefault()` — note
  what you observe; we'll explain it in class.
