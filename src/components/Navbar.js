import React, { useState } from 'react';
import Logo from '../images/xymasLogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [lastUpdated, setLastUpdated] = useState([]);

    const handleClick = (event) => {
        document.getElementById('link1').style.color = "#c8d0d5";
        document.getElementById('link2').style.color = "#c8d0d5";
        document.getElementById('link3').style.color = "#c8d0d5";

        document.getElementById(event.target.id).style.color = "#4b4b4b";

    }

    const handleUpdateLastUpdated = () => {
        <input type="number"></input>
    }

    return (
        <div id="navbar">
            <div id="navbarLinks">
                <Link id="link1" className="material-symbols-rounded" onClick={handleClick} to="/overview">dashboard</Link>
                <Link id="link2" className="material-symbols-rounded" onClick={handleClick} to="/sales">payments</Link>
                <Link id="link3" className="material-symbols-rounded" onClick={handleClick} to="/purchases">shopping_bag</Link>
                <div onClick={handleUpdateLastUpdated}><p>LU: {lastUpdated}</p></div>
            </div>
        </div>
    );
};

export default Navbar;