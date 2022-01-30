import './App.css';
import { Routes, Route, Link , Switch} from "react-router-dom";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Whatsapp from './components/contact/Whatsapp';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import SocialLinks from './components/socialLink/SocialLinks';

function App() {
  return (
    <div className="App">
        
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
        <Whatsapp />
        <SocialLinks />
    
    </div>
  );
}

export default App;
