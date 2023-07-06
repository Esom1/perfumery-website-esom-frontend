import React,{useState,useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import '../style/SignUp.css';
import axios from 'axios'


const SignUp = () => {
  const [email,setEmail]= useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [password,setPassword] = useState('')
  const [passwordVerify,setPasswordVerify] = useState('')
  
  const navigate = useNavigate()

  async function handlePost(e){
    e.preventDefault()
    try{
      const postReg = {email,password,firstname,lastname,passwordVerify} 
    if(!email || !firstname || !lastname || !password || !passwordVerify){
      alert('fill all fields')
    }
    if(email || firstname || lastname || password || passwordVerify){
      alert('your registration is complete')
    }
   const res = await axios.post('http://localhost:2020/auth/register', postReg)
    // console.log(formR);
    // const res = await fetch('http://localhost:2020/auth/register',{method:"POST",headers:{'Content-type':"application/json"},body:JSON.stringify(postReg)})
    // const data =await res.json()
    // if(data){

    //   navigate('/SignIn')
    // }
    // console.log(data);
    navigate('/SignIn')
  }catch(error){
    console.log(error)
  }
   
  }

  return (
    <div className='sign-up mt-3'>
      <div className='container'>
        <h1 className='text-center pt-4 create'>Create Your Account</h1>
      <div className='center mt-4'>
      <p className='first-line'>Create an account and benefit from a more personal shopping <br /> experience, and quicker online checkout.</p>
        <div className=''>
        <form onSubmit={handlePost} action="">
         <label htmlFor="name">Email</label>
          <input  onChange={(e)=>setEmail(e.target.value)} className='input' type="email"   placeholder=' email'/>
          <label className='mt-4' htmlFor="name">First Name</label>
          <input  onChange={(e)=>setFirstname(e.target.value)} type="text"  placeholder='first name'/>
          <label className='mt-4' htmlFor="name">Last Name</label>
          <input  onChange={(e)=>setLastname(e.target.value)} type="text" placeholder='last name' />
          <label className='mt-4' htmlFor="name">Password</label>
          <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
          <label className='mt-4' htmlFor="name">Confirm Password</label>
          <input  onChange={(e)=>setPasswordVerify(e.target.value)} type="password" placeholder='password'/>
          <p className='first-line2 mt-2'>By providing my information, I agree to Fame Perfumery’s <a href="#">Privacy Policy and <br /> Legal Statement</a> </p>
        <button className='btn signup-btn'>Create Account</button>
        </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp