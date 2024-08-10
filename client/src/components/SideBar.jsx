
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
  const [activeState,setActiveSet] = useState('Dashboard')
  
  return (
    <div className={`w-full h-screen bg-primaryBlack p-5 font-openSans text-white max-w-max ${(location.pathname =="/sign-in" || location.pathname=="/sign-up") && "hidden"} ${location.pathname.startsWith("/teach") && 'hidden'}`}>
      <h1 className='text-2xl md:text-3xl font-logo font-bold'><span className='text-primaryBlue'>Easy</span>Skill</h1>
      <p className='text-sm md:text-[16px] mt-8 mb-4 font-semibold'>MAIN</p>
      {/* routes div */}
      <div>
        <Link to="/" onClick={(e)=>{setActiveSet("Dashboard")}} id='DashBoard' className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2 ${activeState=="Dashboard" && 'bg-white text-black'}`} >
          <IoHomeOutline/>
          <p>Dashboard</p>
        </Link>
        <Link to="/cources" onClick={(e)=>{setActiveSet("Cources")}} id='Cources' className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2 ${activeState=="Cources" && 'bg-white text-black'}`} >
          <IoBookOutline/>
          <p>Cources</p>
        </Link>
        <Link to="/messages" onClick={(e)=>{setActiveSet("Messages")}} id='Messages' className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2 ${activeState=="Messages" && 'bg-white text-black'}`} >
          <BiMessageDetail/>
          <p>Messages</p>
        </Link>
        <Link to="/webinars" onClick={(e)=>{setActiveSet("Webinars")}} id='Webinars' className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2 ${activeState=="Webinars" && 'bg-white text-black'}`} >
          <MdOndemandVideo/>
          <p>Webinars</p>
        </Link>
        <Link to="/calender" onClick={(e)=>{setActiveSet("Calender")}} id='Calender' className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2 ${activeState=="Calender" && 'bg-white text-black'}`} >
          <SlCalender/>
          <p>Calender</p>
        </Link>
        <Link to="/store" onClick={(e)=>{setActiveSet("Store")}} id='Store' className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-white hover:text-black p-2  rounded-lg my-2 ${activeState=="Store" && 'bg-white text-black'}`} >
          <MdOutlineStorefront/>
          <p>Store</p>
        </Link>  
      </div>
      <Link to="/" id=''  className={`absolute bottom-4 w-full text-sm md:text-[16px] flex gap-1 items-center     rounded-lg my-1 cursor-pointer`} >
          <MdOutlineContactSupport/>
          <p>Support</p>
        </Link>
    </div>
  )
}

export default SideBar