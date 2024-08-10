import {Link} from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { IoLockOpenOutline } from "react-icons/io5";
import { TbMessage2Bolt } from "react-icons/tb";
import { useState } from 'react';

function Setting() {
  const [activeState,setActiveSet] = useState('Profile')
  return (
    <div className='font-openSans px-5 py-2'>
      <h1 className='text-2xl font-semibold'>Setting</h1>
      <div className='flex'>
        {/* Left side */}
        <div className=''>
          <Link onClick={()=>{setActiveSet('Profile')}} className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-[#6cb4ee] hover:text-black p-2 px-4 rounded-lg my-2 ${activeState=="Profile" && 'bg-[#6cb4ee] text-black'}`}>
            <FaRegUser/>
            <p>Profile Setting</p>
          </Link>
          <Link onClick={()=>{setActiveSet('Security')}} className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-[#6cb4ee] hover:text-black p-2 px-4 rounded-lg my-2 ${activeState=="Security" && 'bg-[#6cb4ee] text-black'}`}>
            <IoLockOpenOutline/>
            <p>Security</p>
          </Link>
          <Link onClick={()=>{setActiveSet('Notification')}} className={` w-full text-sm md:text-[16px] flex gap-1 items-center hover:bg-[#6cb4ee] hover:text-black p-2 px-4 rounded-lg my-2 ${activeState=="Notification" && 'bg-[#6cb4ee] text-black'}`}>
            <TbMessage2Bolt/>
            <p>Notification</p>
          </Link>
        </div>
      </div>


      {/* right side */}
      <div>
        {}
      </div>
    </div>
  )
}

export default Setting