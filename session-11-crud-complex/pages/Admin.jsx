function Admin() {
  return (
    <div className="admin">
      <h2>Add a sneaker</h2>

      <form>
        <input
          placeholder="Sneaker name"
          type="text"
        />

        <input
          placeholder="Price"
          type="number"
        />

        <button type="submit">Add sneaker</button>
      </form>

      <h2>Existing sneakers</h2>

      <div className="admin-row">
        <span>Air Max 90</span>

        <input
          type="number"
          value="145"
          readOnly
        />

        <button>Delete</button>
      </div>
    </div>
  );
}

export default Admin;