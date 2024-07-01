
import {Link, useLocation} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdOutlineStorefront } from "react-icons/md";
import { useState } from 'react';
import { MdOutlineContactSupport } from "react-icons/md";


const SideBar = () => {
  const location = useLocation();
  console.log(location.pathname)
  const [activeState,setActiveSet] = useState('Dashboard')
  return (
    <div className={`w-full h-screen bg-primaryBlack p-5 font-openSans text-white max-w-max ${(location.pathname =="/sign-in" || location.pathname=="/sign-up") && "hidden"}`}>
      <h1 className='text-2xl md:text-3xl font-logo font-bold'><span className='text-primaryBlue'>Easy</span>Skill</h1>
      <p className='text-sm md:text-[16px] mt-8 mb-4 font-semibold'>MAIN</p>
      {/* routes div */}
      <div>
        <Link to="/" id='DashBoard' className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2 ${activeState=="Dashboard" && 'bg-white text-black'}`} >
          <IoHomeOutline/>
          <p>Dashboard</p>
        </Link>
        <Link to="/cources" id='Cources' className=' w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2 rounded-lg my-2' >
          <IoBookOutline/>
          <p>Cources</p>
        </Link>
        <Link to="/messages" id='Messages' className=' w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2 rounded-lg my-2' >
          <BiMessageDetail/>
          <p>Messages</p>
        </Link>
        <Link to="/webinars" id='Webinars' className=' w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2' >
          <MdOndemandVideo/>
          <p>Webinars</p>
        </Link>
        <Link to="/calender" id='Calender' className=' w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2' >
          <SlCalender/>
          <p>Calender</p>
        </Link>
        <Link to="/store" id='Store' className=' w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2 rounded-lg my-2' >
          <MdOutlineStorefront/>
          <p>Store</p>
        </Link>  
      </div>
      <Link to="/" id='' className={`absolute bottom-4 w-full text-sm md:text-[16px] flex gap-1 items-center     rounded-lg my-1 cursor-pointer`} >
          <MdOutlineContactSupport/>
          <p>Support</p>
        </Link>
    </div>
  )
}

export default SideBar