import React, { useState } from 'react';
import Option1 from './Option1'
import Option2 from './Option2'
import Option3 from './Option3'
import Logo from '../images/xymasLogo.png'

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('option1Btn');

    const handleOptionClick = (option) => {
        setSelectedOption(option);

        document.getElementById("option1Btn").style.backgroundColor = '#ffffff';
        document.getElementById("option1Btn").style.color = '#8b8b8b';
        document.getElementById("option2Btn").style.backgroundColor = '#ffffff';
        document.getElementById("option2Btn").style.color = '#8b8b8b';
        document.getElementById("option3Btn").style.backgroundColor = '#ffffff';
        document.getElementById("option3Btn").style.color = '#8b8b8b';

        document.getElementById(option).style.backgroundColor = '#d6ccff';
        document.getElementById(option).style.color = '#755bb4';
    };

    let componentToDisplay = null;

    switch (selectedOption) {
        case 'option1Btn':
            componentToDisplay = <Option1 />;
            break;
        case 'option2Btn':
            componentToDisplay = <Option2 />;
            break;
        case 'option3Btn':
            componentToDisplay = <Option3 />;
            break;
        default:
            componentToDisplay = null;
            break;
    }

    return (
        <div id="dashboard-container">
            <div id="side-panel" style={{ backgroundColor: '#ffffff' }}>
                <img alt="This is the logo" id="logo" src={Logo} ></img>
                <div id="option1Btn" className="option" onClick={() => handleOptionClick('option1Btn')}>
                    O Home
                </div>
                <div id="option2Btn" className="option" onClick={() => handleOptionClick('option2Btn')}>
                    O Sales
                </div>
                <div id="option3Btn" className="option" onClick={() => handleOptionClick('option3Btn')}>
                    O Purchases
                </div>
            </div>
            <div id="content">
                {componentToDisplay}
            </div>
        </div>
    );
};

export default Navbar;