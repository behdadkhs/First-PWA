import React from 'react';
import './Sidebar.css';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Sidebar = ({ toggle, isopen }) => {
    return (
        <React.Fragment>
            <aside className={isopen ? "sidebar-container show" : "sidebar-container hide"} onClick={toggle} isopen={isopen}>
                <div className="icon" onClick={toggle}>
                    <FaTimes className="close-icon" />
                </div>
                <div className="sidebar-wrapper">
                    <ul className="sidebar-menu">
                        <Link to="/" className="sidebar-link">Projects</Link>
                        <Link to="/" className="sidebar-link">Services</Link>
                        <Link to="/" className="sidebar-link">Contact</Link>
                        <Link to="login" className="sidebar-link">Login</Link>
                    </ul>
                    <div className="sidebtnwrap">
                        <Link to="/signup" className="sidebarroute">Register</Link>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}

export default Sidebar
