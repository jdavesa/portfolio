import {useState, useEffect} from 'react'
import Navbar from './components/navbar';
import NavbarMobile from './components/navbarMobile'
import HomePage from './pages/home.js';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.addEventListener("resize", handleSize);
  }, []);

  return (
    <div className="App">
      {windowWidth > 800 &&
      <Navbar/>}
      {windowWidth < 800 && <NavbarMobile/>}
      <HomePage/>
      
    </div>
  );
}

export default App;
