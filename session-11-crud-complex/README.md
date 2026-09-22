# Session 11 — Creating a CRUD Application (Complex)

## Why this is "complex" CRUD

| | Session 10 | Session 11 |
|---|---|---|
| Operations | Update, Delete | Create, Read, Update, Delete |
| Storage | Local state only | Real API (MockAPI) |
| Persists after refresh? | No | Yes |

## Create — adding a new sneaker

```jsx
fetch(`${API_BASE}/products`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newProduct),
})
  .then((res) => res.json())
  .then((created) => setProducts((prev) => [...prev, created]));
```

## Update — editing an existing sneaker

```jsx
fetch(`${API_BASE}/products/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updates),
});
```

## Delete — removing a sneaker

```jsx
fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
```

## Forms and `e.preventDefault()`

```jsx
function handleSubmit(e) {
  e.preventDefault();
  addProduct(formValues);
}

<form onSubmit={handleSubmit}>
  <input value={name} onChange={(e) => setName(e.target.value)} />
  <button type="submit">Add sneaker</button>
</form>
```

By default, submitting a form reloads the browser page.
`e.preventDefault()` stops that — without it, your React state would be
wiped out by the reload the instant you submit.

## What you'll build today

An admin panel: a form to add sneakers, and edit/delete controls on
existing ones — all genuinely saved to KickDrop's API, so refreshing the
page keeps your changes.
