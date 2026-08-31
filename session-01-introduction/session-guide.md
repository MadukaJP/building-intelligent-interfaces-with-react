# Session 1 — Introduction to ReactJS

## What is React?

React is a JavaScript library used to build user interfaces. It was
created by Facebook (now Meta) and released publicly in 2013. It's widely
used today for building interactive websites and web applications.

## Why use React?

Building a page with plain HTML, CSS, and JavaScript works fine for simple
pages. But once a page has a lot of moving, changing parts, manually
updating each piece with `document.getElementById` and similar methods
gets messy. React solves this by letting you describe *what* the page
should look like, and updating the actual page for you when data changes.

## The React ecosystem

- **React** — the core library for building UI.
- **React DOM** — connects React to the actual browser page.
- **Vite** — the tool we use to create and run React projects (see below).
- **react-router-dom** — used later in this course (Session 6) to add
  multiple pages to a React app.

## Core concepts

| Concept | What it means |
|---|---|
| Component | A reusable piece of UI, written as a function |
| JSX | HTML-like syntax written inside JavaScript |
| Props | Data passed into a component |
| State | Data a component remembers and can update |

You'll meet each of these properly over the next few sessions — today,
just know the names.

## Setting up your development environment

To build with React, you need:
- **Node.js and npm** — already installed from the earlier course
- **A build tool** — we use **Vite** (see below)

## Vite vs. Create React App

You may see older tutorials use a tool called `create-react-app`. It used
to be the standard way to start a React project, but it's no longer
maintained. This course uses **Vite** instead — it does the same job, but
starts and rebuilds much faster.

```bash
npm create vite@latest kickdrop -- --template react
cd kickdrop
npm install
npm run dev
```

## What you'll build today

One hardcoded KickDrop sneaker card, rendered using Vite — the first piece
of the storefront you'll build across this course.
