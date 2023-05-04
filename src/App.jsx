import React, { useState } from "react";
import './App.css'
import Landing from './components/Landing'
import Products from './components/Products'
import About from './components/About'
import Manufacturer from './components/Manufacturer'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
    <div className="App">
      <Landing/>
      <Products/>
      <Manufacturer/>
      <About/>
      <Contact/>
      <Footer/>

      {/* WhatsApp icon */}

      <a
        href="https://wa.me/254786111999"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>

    )
  )
}

export default App
