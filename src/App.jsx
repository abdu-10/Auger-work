import './App.css'
import Landing from './components/Landing'
import Products from './components/Products'
import About from './components/About'
import Manufacturer from './components/Manufacturer'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      
      <Landing/>
      <Products/>
      <Manufacturer/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
