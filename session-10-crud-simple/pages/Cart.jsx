function Cart() {

  return (
    <div className="cart">

        <div className="cart-row">
          <span>Air Max</span>
          <input
            type="number"
            min="1"
          />
          <button>Remove</button>
        </div>
      <p className="cart-total">Total: $150</p>
    </div>
  );
}

export default Cart;
