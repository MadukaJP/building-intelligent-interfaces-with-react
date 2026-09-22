# Session 11 Assignment — Notes App with Real API

**Time estimate:** 25–35 minutes (includes a one-time API setup)
**New project:** yes — a fresh Vite + React app, plus a **separate**
MockAPI project (not the KickDrop one).

## One-time setup

1. In MockAPI, create a new project (e.g. "NotesApp") with a `notes`
   resource, with fields `title` (string) and `content` (string).
2. Copy its base URL — this is separate from KickDrop's API.

## Task

1. Create a new project: `npm create vite@latest notes-app -- --template react`
2. Build a form to create a new note (title + content), sent via `POST`
   to your `notes` endpoint.
3. Fetch and display all notes on load (`GET`).
4. Add a delete button per note (`DELETE`).
5. Refresh the page after each action and confirm the change persisted.

## What "done" looks like

Adding and deleting notes both survive a full page refresh, proving
they're actually saved to your MockAPI resource, not just local state.

## Before Session 12

Session 12 is a review session covering Sessions 5–8 (events/Hooks,
Router, Styling, Lifecycle) — no new topic follows it. Instead of a
look-ahead, come to Session 12 with one thing identified: which of those
four topics do you feel least confident about? Be ready to say which one
and why — it'll shape what we spend the most time reinforcing.
