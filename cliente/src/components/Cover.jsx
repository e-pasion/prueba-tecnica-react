/* eslint-disable react/prop-types */
import { useState } from "react"
import CoverPopUp from "./CoverPopUp";

// eslint-disable-next-line react/prop-types
function Cover({cover}) {
    const [popUpVisible,setPopUpVisible] = useState(false);

   
  return (
    <div onClick={()=>{
        setPopUpVisible(true)
    }} className='w-48 mb-10 mx-2'>
        <div className='w-48 h-72 bg-gray-50 relative'>
        <img className='w-full h-full absolute top-0 left-0 hover:opacity-80 hover:border-4 border-white' src={cover?.images?.["Poster Art"]?.url} alt="" />
        </div>
        <h1 className='text-xl w-full text-center'>{cover.title}</h1>

        {
            popUpVisible&& <CoverPopUp object={cover}/>
        }

    </div>
  )
}

export default Cover