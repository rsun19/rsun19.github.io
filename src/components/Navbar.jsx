import React from 'react';
import { Link } from "react-router-dom";
import '../components/tailwindcss.css';


const Navbar = () => {
    return (
        <nav>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
                <div style={{ flex: 1 }}>
                    <Link to="/" className="text-blue-600">ROBERT SUN</Link>
                </div>
                <div style={{ flex: 1 }}>
                <ul style={{ display: "flex", justifyContent: "end", flexDirection: "row", gap: "2rem" }}>
                        <li>
                            <Link to="/" className="text-blue-600">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="text-blue-600">Portfolio</Link>
                        </li>
                    </ul>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;