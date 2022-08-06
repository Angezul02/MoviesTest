import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="d-print-flex">
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <Link to="/listado">Listado</Link>
            </li>
          </ul>
        </div>
        <div>
          <Buscador />
        </div>
      </nav>
    </header>
  );
}

export default Header;
