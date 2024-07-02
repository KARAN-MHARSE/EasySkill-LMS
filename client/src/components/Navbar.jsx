import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import { MdOutlinePayment, MdSettings } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import {useSelector} from 'react-redux'

const Navbar = () => {
  const location = useLocation();
  const [popUp,setPopUp] = useState(false)

  const currentUser = useSelector((state)=> state.curretUser)

  return (
    <div className={`flex justify-between py-5 px-5 ${(location.pathname =="/sign-in" || location.pathname=="/sign-up") && "hidden"}`}>
      {/* left div */}
      <div className="md:w-[430px] h-9 flex px-2 md:py-2 py-1  items-center gap-2  text-secondaryText text-sm border-2 border-primaryBlue rounded-lg">
        <FaSearch />
        <input className="outline-none bg-transparent" type="text" placeholder="search" />
      </div>
      {/* right div */}
      <div className="flex gap-5">
        <div className="size-9 p-2 border-2 rounded-lg border-primaryBlue text-lg">
          <IoMdNotificationsOutline/>
        </div>
        {/* Login or user */}  
        <Link to='sign-in'>
          <div className={`flex items-center gap-1 px-4 py-1 border-2 rounded-lg border-primaryBlue text-lg ${currentUser!=null && 'hidden' }`}>
            <p>Login</p>
          </div>
        </Link>     
        <div onClick={()=>setPopUp(!popUp)} className={`flex flex-col  px-2 cursor-pointer  border-2 rounded-lg border-primaryBlue text-lg ${currentUser==null  && 'hidden'}`}>
          <div className="flex items-center  gap-1  ">
            <RxAvatar/>
            <p>Aditya Pashte</p>
            <RiArrowDropDownLine/>
          </div>
          {/* popup when click */}
          <div className={!popUp && "hidden"}>
            <p className="text-sm text-zinc-500 underline decoration-[2px] underline-offset-4 mb-2">adityapashte@gmail.com</p>
            <div className="flex flex-col gap-2 px-2">
              <p className="flex items-center gap-2 text-[16px] "><IoSettingsOutline/>Setting</p>
              <p className="flex items-center gap-2 text-[16px] "><TbCertificate/>Certificates</p>
              <p className="flex items-center gap-2 text-[16px]"><MdOutlinePayment/>Payment</p>
              <p className="flex items-center gap-2 text-[16px]"><IoGiftOutline/>Request a friend</p>
              <div className="w-full h-[2px] bg-zinc-500"></div>
              <p className="flex items-center my-3 gap-2 text-[16px] text-red-500"><MdLogout/>Log Out</p>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Navbar


