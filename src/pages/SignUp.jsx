import React from 'react'
import { Link } from 'react-router-dom';
import '../style/SignUp.css'


const SignUp = () => {
  return (
    <div className='sign-up mt-3'>
      <div className='container'>
        <h1 className='text-center pt-4 create'>Create Your Account</h1>
      <div className='center mt-4'>
      <p className='first-line'>Create an account and benefit from a more personal shopping <br /> experience, and quicker online checkout.</p>
        <div className=''>
        <form action="">
         <label htmlFor="name">Email</label>
          <input className='input' type="text"   placeholder=' email'/>
          <label className='mt-4' htmlFor="name">First Name</label>
          <input type="text"  placeholder='first name'/>
          <label className='mt-4' htmlFor="name">Last Name</label>
          <input type="text" placeholder='last name' />
          <label className='mt-4' htmlFor="name">Password</label>
          <input type="text" placeholder='password'/>
        </form>
        </div>
        <p className='first-line2 mt-2'>By providing my information, I agree to Fame Perfumery’s <a href="#">Privacy Policy and <br /> Legal Statement</a> </p>
        <button className='btn signup-btn'>Create Account</button>
      </div>
      </div>
    </div>
  )
}

export default SignUp