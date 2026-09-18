# Session 10 — Creating a CRUD Application (Simple)

## What is CRUD?

CRUD is the four basic things almost every app does with data:

| Letter | Action | Where you've already seen it |
|---|---|---|
| C | Create | Not yet — comes in Session 11 |
| R | Read | Session 3 (grid) and Session 8 (API fetch) |
| U | Update | Today — changing a cart item's quantity |
| D | Delete | Today — removing a cart item |

## Why the cart is a good "simple" example

The cart stays local to the browser today — no API calls yet. That keeps
the focus purely on Update/Delete *logic*, before Session 11 adds real
network requests on top.

## Updating without mutating

```jsx
function updateQuantity(id, newQuantity) {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
}
```

This creates a **new** array with the matching item replaced, rather than
changing the existing array directly — a pattern you'll use constantly in
React, since directly mutating state can cause React to miss the update.

## Deleting with `.filter()`

```jsx
function removeItem(id) {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
}
```

`.filter()` keeps everything except the matching item.

## What you'll build today

A working cart page — quantity controls, a remove button, and a running
total, all backed by local state (no API yet — that's next session).
