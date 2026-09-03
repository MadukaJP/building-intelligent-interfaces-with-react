# Session 3 — JSX Elements

## What is JSX?

JSX is a syntax that lets you write HTML-like markup directly inside
JavaScript. You've been using it since Session 1 — today you learn what
it actually is and the rules behind it. Browsers can't run JSX directly;
it gets converted into plain JavaScript before it runs, which is why some
things (like `className` instead of `class`) are named differently than
in regular HTML.

## Creating and rendering JSX elements

```jsx
const element = <h1>Hello, KickDrop</h1>;
```

This looks like HTML, but it's a JavaScript expression — it can be stored
in a variable, passed around, and returned from a function, just like any
other value.

## Nesting JSX elements

JSX nests the same way HTML does:

```jsx
<div className="product-card">
  <p className="product-name">Air Runner Low</p>
  <p className="product-price">₦45,000</p>
</div>
```

## JSX expressions

Anything inside curly braces `{}` is regular JavaScript, evaluated and
inserted into the markup:

```jsx
<p>{2 + 2}</p>          // renders: 4
<p>{sneaker.name}</p>   // renders the value of sneaker.name
```

This is how a list of data becomes a list of elements — using `.map()`
inside a JSX expression:

```jsx
{products.map((sneaker) => (
  <ProductCard key={sneaker.id} name={sneaker.name} price={sneaker.price} />
))}
```

## Properties of JSX

| Rule | Example |
|---|---|
| One parent element per return | Wrap multiple elements in a `<div>` or `<>...</>` |
| Attributes use camelCase | `className`, `onClick` — not `class`, `onclick` |
| List items need a `key` prop | Helps React track which item is which |

## What you'll build today

A real product grid — sneakers stored once as an array of data, rendered
using `.map()`, so adding a new sneaker means adding one line of data
instead of writing new JSX.
