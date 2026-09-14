# Session 6 Assignment — Mini Portfolio

**Time estimate:** 20–30 minutes
**New project:** yes — a fresh Vite + React app.

## Task

1. Create a new project: `npm create vite@latest mini-portfolio -- --template react`
2. Install the router: `npm install react-router-dom`
3. Build 3 simple pages: Home, About, Contact (each just a heading and a
   sentence or two of placeholder text).
4. Add a nav bar with `Link`s to all three pages.

## What "done" looks like

Clicking each nav link changes the URL and the page content, with no full
browser reload (watch for the page flash — there shouldn't be one).

## Before Session 7: a quick look ahead

Session 7 covers three ways to style a React element — inline, style
object, and external CSS. Before class:

- Pick any element in your portfolio and try giving it a background color
  using `style={{ backgroundColor: "..." }}` directly on the JSX (inline
  style) — don't worry about getting it "right," just see what happens.
- Note one thing that felt different about writing CSS this way compared
  to a normal `.css` file.
