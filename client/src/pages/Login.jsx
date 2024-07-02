import {Link, useNavigate} from 'react-router-dom'
import { FaGoogle, FaPassport } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from 'react';
import {signInStart,signInSuccess,signInFailure} from './Redux/User/user.reducers'
import {useDispatch} from 'react-redux'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id] : e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    dispatch(signInStart())
    

    const res = await fetch("http://localhost:5000/api/v2/auth/sign-in",{
      method:"POST",
      credentials: "include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    const data = await res.json();
    if(data.success){
      dispatch(signInSuccess(data.user))
      navigate('/')
    }else{
      dispatch(signInFailure())
      alert(data.message)
    }
  }

  return (
    <div className='h-screen flex gap-8 font-openSans bg-primaryGrey pr-10'>
      <img className='h-full sm:w-[60%] object-cover' fetchpriority="high" decoding="async"  src="https://neurosciencenews.com/files/2023/10/ai-walking-robot-neurosicnes.jpg"></img>
      <Link to="/">
    <h1 className='text-xl md:text-2xl font-logo font-bold absolute top-4 left-5 z-10'><span className='text-primaryBlue'>Easy</span>Skill</h1>
    </Link>
      {/* Right */}
      <div className='flex flex-col  justify-center w-full'>
        <p className='absolute right-5 top-4'>Don't have an account <Link to='/sign-up'><span className='text-primaryBlue font-bold'>Sign-Up</span></Link></p>

        <h2 className='text-[18px] font-bold'>START YOUR JOURNEY</h2>
        <h1 className='text-3xl font-bold mb-5'>Hi,Welcome Back!</h1>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <input  className='border-2 border-zinc-500 rounded-[7px] px-2 py-1' onChange={handleChange} type="email" name="" id="email" placeholder='Email' />
          <input className='border-2 border-zinc-500 rounded-[7px] px-2 py-1' onChange={handleChange} type="password" name="" id="password" placeholder='Password' />
          <p className='text-sm text-primaryBlue font-semibold'>Forgot your password?</p>
          <button className='text-white bg-primaryBlue rounded-[7px] px-2 py-1'>Sign In</button>
        </form>
        {/* Other options */}
        <div className='flex mt-7 gap-3 items-center'>
          <p className='text-sm font-bold'>Sign in with</p>
          <div className='size-8 border-2  rounded-lg flex items-center justify-center'>
            <FaGoogle/>
          </div>
          <div className='size-8 border-2  rounded-lg flex items-center justify-center'>
            <FaFacebookF/>
          </div>
          <div className='size-8 border-2  rounded-lg flex items-center justify-center'>
            <FaTwitter/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

