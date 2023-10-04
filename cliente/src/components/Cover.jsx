/* eslint-disable react/prop-types */
import { useState } from "react";
import CoverPopUp from "./CoverPopUp";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Cover({cover}) {
  const [popUpVisible,setPopUpVisible]=useState(false);
   
  return (
    <div  className='w-48 mb-10 mx-2'>
        <div className='w-48 h-72 bg-gray-50 relative'>
        <img  onClick={()=>setPopUpVisible(true)}className='w-full h-full absolute top-0 left-0 hover:opacity-80 hover:border-4 border-white cursor-pointer' src={cover?.images?.["Poster Art"]?.url} alt="" />
        </div>
        <h1 className='text-xl w-full text-center'>{cover.title}</h1>

        
       { popUpVisible&&

            <div className="absolute bg-transparent  top-0 left-0 w-full h-full z-50 ">
            <div className="h-screen w-screen bg-black bg-opacity-70 fixed flex justify-center items-center " >
      
      
      
      
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-3/5 duration-500">
                  <div  className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Info
                      </h3>
                      <button onClick={()=>setPopUpVisible(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                      </button>
                  </div>
      
      
      
                  <CoverPopUp object={cover}/>


      
      
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                      
                  </div>
              </div>
      
      
      
      
      
      
      
            </div>
          </div>}
            
            
            
            
        

    </div>
  )
}

export default Cover