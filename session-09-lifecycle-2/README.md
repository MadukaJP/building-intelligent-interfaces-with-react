# Session 9 — ReactJS Component Lifecycle (Part 2)

## The dependency array

Last session, `useEffect` ran once, using an empty array `[]`. Today's
concept: putting a value **inside** the array tells React to re-run the
effect whenever that value changes.

```jsx
useEffect(() => {
  console.log("value changed to", value);
}, [value]);
```

| Dependency array | Effect runs |
|---|---|
| `[]` | Once, when the component mounts |
| `[value]` | Once on mount, and again every time `value` changes |
| *(omitted)* | After every single render (rarely what you want) |

## Applying it: recently viewed sneakers

When a product detail page loads for a sneaker, we want to track that
it's been viewed:

```jsx
useEffect(() => {
  if (product) onView(product);
}, [product]);
```

Because `product` is in the dependency array, this runs again every time
a *different* sneaker's detail page is viewed — not just the first one.

## Combining `useState` and `useEffect`

Tracking "recently viewed" needs both: `useState` to hold the list,
`useEffect` to update it when the viewed product changes:

```jsx
const [recentlyViewed, setRecentlyViewed] = useState([]);

function trackView(product) {
  setRecentlyViewed((prev) => {
    const withoutDuplicate = prev.filter((p) => p.id !== product.id);
    return [product, ...withoutDuplicate].slice(0, 4);
  });
}
```

## What you'll build today

A "Recently viewed" section that updates live as you browse between
different sneakers' detail pages, capped at the last 4 viewed.
