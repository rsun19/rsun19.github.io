import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
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
            </div>
        </nav>
    );
}

export default Navbar;