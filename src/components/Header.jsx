import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/slices/userSlice";

function Header() {
  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className=" py-2 px-4 font-semibold flex justify-between">
      <nav>
        <Link to="/" className="hover:underline">
          Bits
        </Link>
      </nav>

      <nav className="flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Spot
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        {isLoggedIn ? (
          <button className="hover:underline  px-2 py-2 rounded" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
