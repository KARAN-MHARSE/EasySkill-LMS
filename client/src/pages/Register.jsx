import {Link, useNavigate} from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from 'react';


function Register() {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })
  console.log(formData)

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id] : e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    

    const res = await fetch("http://localhost:5000/api/v2/auth/sign-up",{
      method:"POST",
      credentials: "include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    const data = await res.json();
    console.log(data)
    if(data.success){
      navigate('/sign-in')
    }else{
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
      <p className='absolute right-5 top-4'>Do have an account <Link to='/sign-in'><span className='text-primaryBlue font-bold'>Sign-In</span></Link></p>

      <h2 className='text-[18px] font-bold'>REGISTER NOW</h2>
      <h1 className='text-3xl font-bold mb-5'>Welcome To The LMS</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='w-full flex justify-between gap-3'>
          <input onChange={handleChange} className='border-2 border-zinc-500 rounded-[7px] px-2 py-1 w-1/2' type="text" name="" id="firstName" placeholder='First Name' />
          <input onChange={handleChange} className='border-2 border-zinc-500 rounded-[7px] px-2 py-1 w-1/2' type="text" name="" id="lastName" placeholder='Last Name' />
        </div>
        <input onChange={handleChange} className='border-2 border-zinc-500 rounded-[7px] px-2 py-1' type="email" name="" id="email" placeholder='Email' />
        <input onChange={handleChange} className='border-2 border-zinc-500 rounded-[7px] px-2 py-1' type="password" name="" id="password" placeholder='Password' />
        <div className='flex items-center gap-2'>
          <input type="checkbox" name="" id="" />
          <p className='text-sm text-zinc-400 font-semibold'>I agree to the processing of personal data</p>
        </div>
        <button className='text-white bg-primaryBlue rounded-[7px] px-2 py-1'>Sign Up</button>
      </form>
      {/* Other options */}
      <div className='flex mt-7 gap-3 items-center'>
        <p className='text-sm font-bold'>Sign up with</p>
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

export default Register