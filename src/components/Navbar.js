import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleClick = (event) => {
        document.getElementById('link1').style.color = "#bbc4ca";
        document.getElementById('link2').style.color = "#bbc4ca";
        document.getElementById('link3').style.color = "#bbc4ca";
        document.getElementById('link4').style.color = "#bbc4ca";
        document.getElementById('link5').style.color = "#bbc4ca";
        document.getElementById('link6').style.color = "#bbc4ca";
        document.getElementById('link7').style.color = "#bbc4ca";
        document.getElementById('link8').style.color = "#bbc4ca";
        document.getElementById('link9').style.color = "#bbc4ca";
        document.getElementById('link10').style.color = "#bbc4ca";        

        document.getElementById(event.target.id).style.color = "#4b4b4b";

    }

    return (
        <div id="navbar">
            <div id="navbarLinks">
                <Link id="link1" className="material-symbols-rounded" onClick={handleClick} to="/overview">dashboard</Link>
                <Link id="link2" className="material-symbols-rounded" onClick={handleClick} to="/sales">currency_rupee</Link>
                <Link id="link3" className="material-symbols-rounded" onClick={handleClick} to="/purchases">receipt_long</Link>
                <Link id="link4" className="material-symbols-rounded" onClick={handleClick} to="/docs">folder</Link>
                <Link id="link5" className="material-symbols-rounded" onClick={handleClick} to="/vendors">groups_3</Link>
                <Link id="link6" className="material-symbols-rounded" onClick={handleClick} to="/staff">badge</Link>
                <Link id="link7" className="material-symbols-rounded" onClick={handleClick} to="/partners">sports_motorsports</Link>
                <Link id="link8" className="material-symbols-rounded" onClick={handleClick} to="/contacts">call</Link>
                <Link id="link9" className="material-symbols-rounded" onClick={handleClick} to="/access">key</Link>
                <Link id="link10" className="material-symbols-rounded" onClick={handleClick} to="/infrastructure">flowsheet</Link>
            </div>
        </div>
    );
};

export default Navbar;