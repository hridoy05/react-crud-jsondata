import React from 'react';
import {
    Link,NavLink
} from "react-router-dom";

const Navbar = () => {
    return (
        
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to='/'>React</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/" exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" exact >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" exact >Contact</NavLink>
                            </li>
                        </ul>
                        <Link className='btn btn-outline-dark ml-auto ' to='/users/add'>Add User</Link>
                    </div>
                </nav>
            </div>

        
    );
};

export default Navbar;