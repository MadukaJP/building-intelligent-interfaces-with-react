# Session 8 — ReactJS Component Lifecycle (Part 1)

## Phases of a component

| Phase | What happens |
|---|---|
| Mounting | The component appears on screen for the first time |
| Updating | The component re-renders because state or props changed |
| Unmounting | The component is removed from the screen |

Up to now, all our data was ready instantly, so these phases didn't
matter. Fetching data from an API is different — the data arrives later,
and the component needs a way to react when it does.

## Managing lifecycle with `useEffect`

```jsx
useEffect(() => {
  // runs after the component mounts
}, []);
```

The empty array `[]` means "run once, when the component first mounts" —
exactly what's needed to fetch data one time when the app loads.

## Fetching real data

```js
export const API_BASE = "https://6a93011925936d5660f087b5.mockapi.io";
```

```jsx
useEffect(() => {
  fetch(`${API_BASE}/products`)
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);
```

This is a real network request to a hosted API — not a local file. That
means the data can change on the server, take a moment to arrive, or
occasionally fail.

## Loading state

Fetching takes time, even briefly. Without handling it, the page would
flash an empty grid before data arrives:

```jsx
const [isLoading, setIsLoading] = useState(true);

if (isLoading) return <p>Loading...</p>;
```

## What you'll build today

The hardcoded sneaker array replaced with a real `fetch()` call to
KickDrop's hosted MockAPI endpoint, with a loading state shown while data
arrives.
