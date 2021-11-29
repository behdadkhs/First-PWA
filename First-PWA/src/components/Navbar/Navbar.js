import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaBars, FaRegUser, FaTimes } from 'react-icons/fa';
import logo from '../../images/logo.png'
import { Link as LinkS } from 'react-scroll';



const Navbar = ({ toggle, isopen }) => {

    return (
        <React.Fragment>
            <nav>
                <div className="navbarContainer" >
                    <Link to='/' className="navbarLogo">
                        <img src={logo} alt="web logo" style={{ width: "70px", height: "70px" }} />
                    </Link>
                    <div className="mobile-Icon" onClick={toggle}>
                        {isopen ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className="navMenu">
                        <li className="navItem">
                            <LinkS className="navLink" to='section1' activeClass='active' spy={true} smooth={true}>Projects</LinkS>
                        </li>
                        <li className="navItem">
                            <LinkS className="navLink" to='section2' activeClass='active' spy={true} smooth={true}>Services</LinkS>
                        </li>
                        <li className="navItem">
                            <Link className="navLink" to='/' >Contact</Link>
                        </li>
                        <li className="navItem">
                            <Link className="navLink" to='/login'>Log in</Link>
                        </li>
                    </ul>
                    <div className="navBtn">
                        <Link to='/signup' className="navBtnLink">Register</Link>
                    </div>

                    <Link to="/profile" >
                        <div className="profile">
                            <FaRegUser className="icon" />
                        </div>
                    </Link>

                </div>
            </nav>

        </React.Fragment>
    )
}

export default Navbar
