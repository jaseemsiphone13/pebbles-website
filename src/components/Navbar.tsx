import React, { useState } from 'react';
import './Navbar.css'; // Assuming you will create CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>  
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;
