import React from 'react'
import '../style/ForgotPassword.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div>
      <div className='container'>
      <h1 className='create text-center pt-5 mt-3'>Password Reset </h1>
      <p className='text-center mt-4 below2'>Enter your new password.</p>
      <div className='center mt-3'>
          <form action="">
            <label className='mt-4' htmlFor="name">New Password</label>
            <input type="text" placeholder='new password'/>
            <label className='mt-4' htmlFor="name">Confirm New Password</label>
            <input type="text" placeholder='confirm password'/>
          </form>
          <button className='btn save-btn mt-4'>Save</button>
          </div>
      </div>
    </div>
  )
}

export default ForgotPassword