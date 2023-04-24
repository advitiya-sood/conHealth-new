import * as Icons from "react-icons/fa";
import "./Sidebar.css";
import { SideItems } from "./SideItems";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div className="sidebar active">
                <ul className="sidebar-items">
                    {SideItems.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={item.sName}
                            >
                                <Link to={item.path}>
                                    {item.icon}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>


        </>
    )
}

export default Sidebar