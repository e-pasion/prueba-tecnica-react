import { createContext, useState, useContext } from "react";


    export const CoverContext= createContext();

    export const useCover = ()=>{
        const context=useContext(CoverContext)
        if(!context) {
        throw new Error("useTasks must be used within an AuthProvider")
     }
        return context;
    }
    // eslint-disable-next-line react/prop-types
export const CoverProvider=({children})=>{
    const [popUpVisible,setPopUpVisible] = useState(false);

    function handlePopup(condition){
        setPopUpVisible(condition);
    }

    return(
        <CoverContext.Provider value={{
            popUpVisible,
            handlePopup     
            }}>
            {children}
        </CoverContext.Provider>
    )
}
















  
