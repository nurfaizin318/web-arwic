
import './index.css';
import React from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {

    const handleTogle = (e) =>{
        e.preventDefault();
        var element = document.getElementById("wrapper");
        element.classList.toggle("toggled");
    }
    return (
        <div id="wrapper" className="toggled">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        Admin
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>

            <FontAwesomeIcon icon={faBars} color="black" style={{ fontSize: 20,margin:10}} onClick={handleTogle} />
              

        </div>
    );
}

export default Sidebar;