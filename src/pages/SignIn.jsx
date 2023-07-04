import React from 'react'
import '../style/SignIn.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='container'>
        <h1 className='create text-center pt-5 mt-3'>Sign Into Your Account </h1>
        <h6 className='text-center mt-4 below2'>Sign In with Your Email and Password.</h6>
        <div className='center mt-3'>
          <form action="">
            <label className='mt-4' htmlFor="name">Email</label>
            <input type="text" placeholder='email'/>
            <label className='mt-4' htmlFor="name">Password</label>
            <input type="text" placeholder='password'/>
          </form>
         <Link to='/Email'> <p className='mt-3 below'><a href="#" >Forgot password?</a></p></Link>
          <p className='mt-4 below'>Remember me (optional)</p>
        <p className='mb-3 below'>By providing my information, I agree to Fame Perfumery’s <a href="#">Privacy Policy and <br /> Legal Statement</a></p>
        <button className='btn signin-btn below'>Sign In</button>
        </div>
       
      </div>
    </div>
  )
}

export default SignIn