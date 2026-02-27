import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
const Title = () => (
  <Link to="/">
    <img
      className="h-10"
      alt="Solarsant"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSuZFNdbLTr4YKWrEFZhlyfdlcj8WWMHpqFRmOtGGbw&s"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
const {user} = useContext(UserContext);
const cartItems = useSelector(store => store.cart.items);
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-pink-50 shadow-lg sm:bg-red-400 md:bg-yellow-200">
      <Title />

      <ul className="flex gap-4 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/instamart">Instamart</Link></li> 
        <li><Link to="/cart">Cart {cartItems.length}</Link></li>
        <li className="text-sm">
          Status: {isOnline ? "🟢 Online" : "🔴 Offline"}
        </li>
      </ul>
      
{user.name}
      <button
       
        className="px-3 py-1 border rounded"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;
