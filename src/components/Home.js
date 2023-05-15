import React, { useState } from 'react';
import Option1 from './Option1'
import Option2 from './Option2'
import Option3 from './Option3'

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('option1Btn');
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);

      document.getElementById("option1Btn").style.backgroundColor = '#ffffff';
      document.getElementById("option1Btn").style.color = '#a6a6a6';
      document.getElementById("option2Btn").style.backgroundColor = '#ffffff';
      document.getElementById("option2Btn").style.color = '#a6a6a6';
      document.getElementById("option3Btn").style.backgroundColor = '#ffffff';
      document.getElementById("option3Btn").style.color = '#a6a6a6';

      document.getElementById(option).style.backgroundColor = '#755bb4';
      document.getElementById(option).style.color = '#ffffff';
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
      <div className="dashboard-container">
        <div className="side-panel" style={{ backgroundColor: '#ffffff' }}>
          <div id = "option1Btn" className="option" onClick={() => handleOptionClick('option1Btn')}>
            Option 1
          </div>
          <div id = "option2Btn" className="option" onClick={() => handleOptionClick('option2Btn')}>
            Option 2
          </div>
          <div id = "option3Btn" className="option" onClick={() => handleOptionClick('option3Btn')}>
            Option 3
          </div>
        </div>
        <div className="content">
          {componentToDisplay}
        </div>
      </div>
    );
  };
  
  export default Home;