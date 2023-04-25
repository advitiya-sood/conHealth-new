import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./Navitems.jsx";

function Navbar() {
  

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" >
          <img src="https://ted2022.wpengine.com/wp-content/uploads/2022/06/thirdeye1.png"></img>
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