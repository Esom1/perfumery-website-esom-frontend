import React,{useState,useEffect} from 'react'
import '../style/SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
  const [email,setEmail] = useState('');
  const [password ,setPassword] = useState('');

  const navigate = useNavigate()

  const login = async (e)=>{
    e.preventDefault()
    const logData = {email,password,}

    if( !email || !password ){
        alert('please fill all fields')
      }
    if(  email ||password ){
        alert('logged in')

    }
    try {
      const res =  await axios.post('http://localhost:7878/auth/login',logData)
      
      // if(data.status == 200){
      //   alert('logged in')
      // }
      
    } catch (error) {
      console.log(error);
    }
    navigate('/')
  }
  return (
    <div className='sign-in'>
      <div className='container'>
        <h1 className='create text-center pt-5 mt-3'>Sign Into Your Account </h1>
        <h6 className='text-center mt-4 below2'>Sign In with Your Email and Password.</h6>
        <div className='center mt-3'>
          <form onSubmit={login} className='mb-5'>
            <label className='mt-4' htmlFor="name">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email'/>
            <label className='mt-4' htmlFor="name">Password</label>
            <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
            {/* <input type="submit" value="Sign in " /> */}
         <Link to='/Email'> <p className='mt-3 below'><a href="#" >Forgot password?</a></p></Link>
          <p className='mt-4 below'>Remember me (optional)</p>
        <p className='mb-3 below'>By providing my information, I agree to Fame Perfumery’s <a href="#">Privacy Policy and <br /> Legal Statement</a></p>
        <button type='submit' className='btn signin-btn below'>Sign In</button>
        </form>
        </div>
       
      </div>
    </div>
  )
}

export default SignIn