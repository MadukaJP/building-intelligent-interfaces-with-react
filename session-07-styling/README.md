# Session 7 — Styling React Elements

## Three ways to style a React component

| Method | Syntax | Best for |
|---|---|---|
| Inline | `style={{ }}` object directly on the element | Quick, one-off, or data-driven styles |
| Internal | A named style object, reused within a file | Slightly more organized than inline |
| External | A separate `.css` file, imported | Most of an app — regular CSS, hover states, media queries |

All three produce the same visual result — the difference is organization
and capability, not appearance.

## Inline styles

```jsx
<button style={{ backgroundColor: "black", color: "white" }}>
  Add to cart
</button>
```

Property names are camelCase (`backgroundColor`), because this is a
JavaScript object, not raw CSS.

## Internal styles (style objects)

```jsx
const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "12px",
};

<div style={cardStyle}>...</div>
```

Same rules as inline, just named and reusable within the file.

## External stylesheets

What KickDrop has used since Session 1:

```jsx
import "./App.css";
```

```css
.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
}
```

Regular CSS rules apply normally, including things inline/object styles
can't easily do — hover states, media queries, animations.

## What you'll build today

No new features — you'll convert a couple of KickDrop's existing elements
between all three methods live, to compare them directly, then revert to
external stylesheets (KickDrop's default going forward).
