import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import AOS from "aos"; 
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <div className="App">
       <Header />
       <Content />
       <Footer />
    </div>
  );
  
}

export default App;