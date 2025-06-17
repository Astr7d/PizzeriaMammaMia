import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
//import Home from './components/Home'
//import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Register from './components/Register'


function App() {

  return (
    <>
      <Navbar />
      <Cart />
      <Footer />
      
    </>
  )
}

export default App
