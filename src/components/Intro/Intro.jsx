import { useState, useEffect } from 'react';
import './Intro.css';

const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Increased duration to 4.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="intro-container">
      <div className="paint-drop">
        <div className="drop"></div>
        <div className="splash"></div>
        <div className="ripple ripple-1"></div>
        <div className="ripple ripple-2"></div>
        <div className="ripple ripple-3"></div>
      </div>
      <div className="intro-text">
        <span className="letter">A</span>
        <span className="letter">r</span>
        <span className="letter">t</span>
        <span className="letter">M</span>
        <span className="letter">u</span>
        <span className="letter">m</span>
      </div>
    </div>
  );
};

export default Intro; 