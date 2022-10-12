import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">Queezy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={ ({isActive}) => isActive ? 'activeLink' : undefined } aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({isActive}) => isActive ? 'activeLink' : undefined } to="/statistic">Statistic</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={ ({isActive}) => isActive ? 'activeLink' : undefined } to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;