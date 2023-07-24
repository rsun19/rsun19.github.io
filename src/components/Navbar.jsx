import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='fixed z-50 bg-teal-500 w-full text-white text-lg 2xl:text-xl p-3 3xl:p-6 3xl:text-3xl' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
                <Link to="/">ROBERT SUN</Link>
            </div>
            <div style={{ flex: 1 }}>
            <ul style={{ display: "flex", justifyContent: "end", flexDirection: "row", gap: "2rem" }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Portfolio</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;