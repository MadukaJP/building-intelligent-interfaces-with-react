import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        KickDrop
      </Link>
      <Link to="/cart">Cart (<span className="cart-badge">{cartCount}</span>)</Link>
    </header>
  );
}

export default Header;
