import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Option1 from './components/Option1'
import Option2 from './components/Option2'
import Option3 from './components/Option3'
import Docs from './components/Docs'
import Vendors from './components/Vendors'
import Staff from './components/Staff'
import Partners from './components/Partners'
import Contacts from './components/Contacts'
import Access from './components/Access'
import Infrastructure from './components/Infrastructure'

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
            <Route path="/docs" element={<Docs />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/access" element={<Access />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
