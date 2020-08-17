import React from 'react';
import { useBookContext } from "../../utils/GlobalState";
import { Link } from 'react-router-dom';

function Navbar() {

    const [state, dispatch] = useBookContext()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar


