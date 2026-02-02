import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Title = () => (
  <Link to="/">
    <img
      className="h-"
      alt="Solarsant"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSuZFNdbLTr4YKWrEFZhlyfdlcj8WWMHpqFRmOtGGbw&s"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const isOnline = useOnline();
  return (
    <div className="flex">
      <Title />

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
           <li><Link to="/instamart">Instamart</Link></li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
