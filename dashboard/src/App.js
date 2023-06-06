import './style/App.scss';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Components/Home';
import Contact from './Components/Contact';

import Footer from './Components/Footer';
import './style/Home.scss'
import './style/Header.scss'
import './style/Footer.scss'
import './style/Contact.scss'
import "./style/MediaQuery.scss"

import Service from './Components/Service';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />



        </Routes>
        <Footer/>
      </Router>


    </div>
  );
}

export default App;
