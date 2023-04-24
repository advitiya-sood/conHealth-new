import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./Navitems.jsx";

function Navbar() {
  

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" >
          <Icons.FaPiedPiper />
          Contoso Healthcare
        </Link>
        { (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        
      </nav>

      
    </>
  );
}

export default Navbar;