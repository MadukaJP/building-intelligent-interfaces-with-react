# Session 5 — Event Handling in ReactJS

## Event handling in React

React lets components respond to things a user does — clicks, typing, form
submissions — similar to plain JavaScript's `addEventListener`, but with
its own syntax.

## Basic syntax

```jsx
<button onClick={handleClick}>Add to cart</button>
```

- Event names are camelCase (`onClick`, not `onclick`)
- You pass the function itself, not a string like HTML's
  `onclick="handleClick()"`

## Types of events

| Event | Fires when |
|---|---|
| `onClick` | An element is clicked |
| `onChange` | An input's value changes |
| `onSubmit` | A form is submitted |
| `onMouseEnter` | The mouse hovers over an element |

We mostly use `onClick` in this course, with `onChange`/`onSubmit`
appearing later in Sessions 10–11.

## Best practices

- Name handler functions clearly (`handleAddToCart`, not `fn1`)
- Keep logic in a named function rather than writing it directly inline

## Hooks: giving a component memory

An event handler can run code, but by default a component doesn't
remember anything between renders. **Hooks** solve this. The one you need
today is `useState`:

```jsx
const [cartCount, setCartCount] = useState(0);
```

`cartCount` holds the current value; `setCartCount` updates it — and
calling it tells React to re-render the component with the new value.

```jsx
<button onClick={() => setCartCount(cartCount + 1)}>{cartCount}</button>
```

## What you'll build today

A working "Add to cart" button that increases a live cart count shown in
the header, using `useState`.
