import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Food randomizer</h1>
      <nav>
        <ul className="header-nav">
          <li>
            <Link className="header-nav-link active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-nav-link" to="add-food">
              Lägg till ny
            </Link>
          </li>
          <li>
            <Link className="header-nav-link" to="/random-food">
              Random
            </Link>
          </li>
          {/* <li>
            <Link className="header-nav-link" to="/food-planner">
              Matlista
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
