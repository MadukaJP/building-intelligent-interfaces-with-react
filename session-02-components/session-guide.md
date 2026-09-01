# Session 2 — ReactJS Components

## What is a component?

A component is a JavaScript function that returns JSX. You already wrote
one last session — `App` — without a name for what it was. Components let
you split a page into smaller, reusable pieces, each responsible for one
part of the UI.

## Why split into components?

Without components, a page with 8 sneaker cards would mean copy-pasting
the same markup 8 times. With components, you write the card once and
reuse it — passing in different data each time.

## Functional vs. class components

| Type | Written as | Used in this course? |
|---|---|---|
| Class component | A JavaScript class | No — shown once for recognition only |
| Functional component | A JavaScript function | Yes — every component in this course |

Class components were the standard in older React code. You may see them
in tutorials or existing codebases, but functional components are the
modern standard, and what we use throughout KickDrop.

```jsx
// Class component (older style — recognize it, don't write it)
class ProductCard extends React.Component {
  render() {
    return <div>...</div>;
  }
}

// Functional component (what we use)
function ProductCard() {
  return <div>...</div>;
}
```

## Passing data between components: props

Props (short for "properties") are how you pass data into a component,
similar to arguments passed into a function:

```jsx
<ProductCard name="Air Runner Low" price="₦45,000" />
```

Inside `ProductCard`, these become available as `props.name` and
`props.price` — or, more commonly, destructured directly:

```jsx
function ProductCard({ name, price }) {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
```

The same component can now render different sneakers just by changing
what's passed in.

## What you'll build today

`Header`, `ProductCard`, and `ProductList` as separate components, with
sneaker data passed into `ProductCard` via props — the same visual result
as Session 1, built the reusable way.
