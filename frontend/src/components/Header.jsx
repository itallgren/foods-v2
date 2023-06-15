import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Food randomizer</h1>
      <nav>
        <ul className="header-nav">
          <li>
            <NavLink className="header-nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-link" to="/random-food">
              Random
            </NavLink>
          </li>
          <li>
            <NavLink className="header-nav-link" to="add-food">
              Lägg till ny
            </NavLink>
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
