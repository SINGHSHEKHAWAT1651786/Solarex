
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Solarsant"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSuZFNdbLTr4YKWrEFZhlyfdlcj8WWMHpqFRmOtGGbw&s"
    />
  </a>
);
const Header = () => (
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
  </div>
);

export default  Header;