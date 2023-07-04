import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './layout/Navbar'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Email from './pages/Email';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import SingleProduct from './pages/SingleProduct';


function App() {
 
  return (
    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route index element={<Home/>}/>
      <Route path='/SignIn' element = {<SignIn/>}/>
      <Route path='/SignUp' element = {<SignUp/>}/>
      <Route path='/ForgotPassword' element = {<ForgotPassword/>}/>
      <Route path='/Email' element = {<Email/>}/>
      <Route path='/MyCart' element = {<MyCart/>}/>
      <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
      
    </>
  )
}

export default App
