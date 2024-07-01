import { LuAlarmClock } from "react-icons/lu";


const Card = ({type}) => {
    const MyCourse = ()=>(
        <div className="bg-white flex items-center justify-center shadow-xl rounded-lg">
            <div className="size-[90%] pb-6">
                <img className="rounded-lg" src="https://img.freepik.com/premium-photo/mountain-lake-background_853558-35110.jpg"
                  alt="" />
                <h2 className="font-bold mt-1">Java Devlopement cource</h2>
                <p className="flex items-center gap-2 text-[14px]"><LuAlarmClock/>Next Lession:22/04/2024</p>
                <progress className="bg-green-500 h-2 w-full " min="0" max="100" value="80"></progress>
                <p className="flex justify-between text-[14px]">Course Completed <span>80%</span></p>
                <button className="w-full bg-primaryBlue text-white rounded-lg px-2 py-1 my-2">To The Cource</button>
            </div>
        </div>
    )

    const BuyCource = ()=>(
      <div className="bg-white flex items-center justify-center shadow-xl rounded-lg">
          <div className="size-[90%] pb-6">
              <img className="rounded-lg" src="https://img.freepik.com/free-photo/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand_335224-1091.jpg"
                alt="" />
              <h2 className="font-bold mt-1">Java Devlopement cource</h2>
              <p className="flex justify-between items-center gap-2 text-[14px]">32 Lessons <span>4 Months</span></p>
              <p className="flex items-center gap-3 text-[14px] mt-4"><span className="text-red-500">10,500 UAH</span>12,800UAH</p>
          </div>
      </div>
  )



  return type == "mycourse" ? MyCourse() : BuyCource();
}

export default Card



