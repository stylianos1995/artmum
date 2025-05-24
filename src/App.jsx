import { useState, useEffect } from 'react';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MyWork from './components/MyWork/MyWork'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'
import './App.css'
import './styles/variables.css'

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4500); // Match with intro duration

    return () => clearTimeout(timer);
  }, []);

  // Add this function to handle body scroll
  const toggleBodyScroll = (isMenuOpen) => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <div className="App">
      <Intro />
      {showContent && (
        <>
          <Navbar />
          <Hero />
          <MyWork />
          <About />
          <Shop />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
