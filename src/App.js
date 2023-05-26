import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Option1 from './components/Option1'
import Option2 from './components//Option2'
import Option3 from './components//Option3'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div>
          <Routes>
            <Route path="/" exact element={<Option1 />} />
            <Route path="/overview" exact element={<Option1 />} />
            <Route path="/sales" element={<Option2 />} />
            <Route path="/purchases" element={<Option3 />} />
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
