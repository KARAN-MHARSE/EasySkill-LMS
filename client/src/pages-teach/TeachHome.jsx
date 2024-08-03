import teachHomePng from '../assets/teachHomePng.png'
import { Link } from 'react-router-dom'

function TeachHome() {                    
  return (
    <div className='flex h-full flex-col md:flex-row w-[100vw]] bg-gray-300 font-openSans'>
      {/* left div */}
      <div className='md:max-w-[50%] '>
        <img className='h-full  object-fill grayscale' src={teachHomePng} alt="" />
      </div>
      {/* Right Div */}
      <div className='flex flex-col justify-center items-center md:w-[50%]'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold text'>Come teach <br />with us</h1>
            <p className='font-semibold my-1 text-sm text-primaryBlack'>Become an instructor and change bf <br />lives-including your own</p>
            <Link>
              <button className='bg-primaryBlack text-white text-lg px-2 py-1 mt-2 rounded-lg'>Get Started</button>
            </Link>
        </div>          
      </div>
    </div>
  )
}

export default TeachHome