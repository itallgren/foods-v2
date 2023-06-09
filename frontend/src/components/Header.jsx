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
              Add new food
            </Link>
          </li>
          <li>
            <Link className="header-nav-link" to="/wf">
              Another Item
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
