import React, { useState } from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
import navicon from '../assets/navicon.png'
import cart from '../assets/ic_outline-shopping-cart.png'
import bell from '../assets/bell icon.png'
import search from '../assets/material-symbols_search-rounded.png'
import arrow from '../assets/arrow down icon.png'
import avatar from '../assets/Ellipse 6.png'

const Navbar = () => {
  const [down, setDown] = useState(false)

  const handleDown = () => {
    setDown(!down)
  }

  return (
    <div className='nav-part'>
      <div className='container'>
       <div className='d-flex justify-content-between align-items-center mt-3'>
       <Link to='/'><img  className='fame' src={navicon} alt="" /></Link>
       <div className='relate d-flex gap-3'>
       <div className='w-100 top holder'>
         <img  className='icon3' src={search} alt="" />
          <input className=' w-100 px-5 py-2' type="search" placeholder='Search products, brands and categories' />
       </div>
        <button className='search-btn'>Search</button>
       </div>
       <div className='right d-flex gap-4'>
       <Link to='/MyCart'><img className='icon' src={cart} alt=""  /></Link>
        <img  className='icon2' src={bell} alt="" />
       <div onClick={handleDown} className='d-flex gap-1 profile'>
       <img className='avatar' src={avatar} alt="" />
        <img  className='arrow' src={arrow} alt="" />
        {down && (<div className='sign-btns'>
        <Link to= '/SignIn'><button className='btns mx-3'>Sign In</button></Link>
          <Link to= '/SignUp'><button className='btnss mx-3'>Sign Up</button></Link>
        </div>)}
       </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar