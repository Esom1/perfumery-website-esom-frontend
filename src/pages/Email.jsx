import React from 'react'
import '../style/Email.css';
import { Link } from 'react-router-dom';

const Email = () => {
  return (
    <div className='resetting'>
      <div className='container'>
      <h1 className='create text-center pt-5 mt-3 set'>Forgotten Password </h1>
        <p className='text-center mt-4 below2 set'>Enter Your Email to reset your password</p>
        <div className='center mt-3'>
        <form action="">
            <label className='mt-4' htmlFor="name">Email</label>
            <input className='reset-input ' type="text" placeholder='Reset password'/>
          </form>
         <Link to='/ForgotPassword'><button className='btn reset-btn mt-4'>Reset your password</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Email