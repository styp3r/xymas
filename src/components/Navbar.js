import React, {useState} from 'react';
import Logo from '../images/xymasLogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [lastUpdated, setLastUpdated] = useState([]);

    const handleClick = (event) =>{
        document.getElementById('link1').style.backgroundColor = "#9481b1";
        document.getElementById('link1').style.color = "#ffffff";
        document.getElementById('link2').style.backgroundColor = "#9481b1";
        document.getElementById('link2').style.color = "#ffffff";
        document.getElementById('link3').style.backgroundColor = "#9481b1";
        document.getElementById('link3').style.color = "#ffffff";

        document.getElementById(event.target.id).style.backgroundColor = "#ffffff";
        document.getElementById(event.target.id).style.color = "#9481b1";

    }

    const handleUpdateLastUpdated = () =>{
        <input type = "number"></input>
    }

    return (
        <div id="navbar">
            <img alt="This is the logo" id="logo" src={Logo} ></img>
            <Link id = "link1" onClick = {handleClick} to = "/overview">Overview</Link>
            <Link id = "link2" onClick = {handleClick} to = "/sales">Sales</Link>
            <Link id = "link3" onClick = {handleClick} to = "/purchases">Purchases</Link>
            <div onClick = {handleUpdateLastUpdated}><p>Last Updated: {lastUpdated}</p></div>
        </div>
    );
};

export default Navbar;