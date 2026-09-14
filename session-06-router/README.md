# Session 6 — ReactJS Router

## Single-page vs. multi-page applications

| | Multi-page app (MPA) | Single-page app (SPA) |
|---|---|---|
| Navigation | Full page reload each time | Content swaps, no reload |
| Where React apps fit | — | This is what React apps are |

A traditional website loads a whole new HTML page from the server every
time you click a link. A React app loads once, and "navigating" just
means React swapping which component is shown — nothing actually reloads.

## Advantages and drawbacks of SPAs

**Advantages:**
- Feels faster after the first load — no full page reloads
- State (like a cart count) survives navigation naturally

**Drawbacks:**
- The first load can be slightly heavier
- Needs a router library to handle "pages" at all, since the browser
  isn't doing it anymore

## The React Router basics

`react-router-dom` is the library used to add multi-page-style navigation
to a React app:

| Piece | Job |
|---|---|
| `BrowserRouter` | Wraps the app, turns on routing |
| `Routes` / `Route` | Maps a URL path to a component |
| `Link` | Like `<a>`, but doesn't reload the page |

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
</BrowserRouter>
```

`:id` in a path is a **URL parameter** — a placeholder that changes per
sneaker, read inside the component with `useParams()`.

## What you'll build today

Three real routes — Home, Product Detail, Cart — with working navigation
via `Link`, and no full page reloads.
