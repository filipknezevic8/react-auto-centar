import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/akcije">Akcija</Link></li>
                <li><Link to="/o-nama">Naša priča</Link></li>
                <li><Link to="/ponuda" className="navbar-logo">🚗</Link></li>
                <li><Link to="/informacije">Informacije</Link></li>
                <li><Link to="/ponuda">Ponuda</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;