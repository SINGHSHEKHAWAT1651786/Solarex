import { useState, useEffect } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Solarsant"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSuZFNdbLTr4YKWrEFZhlyfdlcj8WWMHpqFRmOtGGbw&s"
    />
  </a>
);

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
