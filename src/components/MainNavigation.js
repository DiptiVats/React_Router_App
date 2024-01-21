import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Prouduct</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
