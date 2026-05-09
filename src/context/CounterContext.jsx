import {  createContext,useEffect,useState } from "react";
export const CounterContextPipeline=createContext();
export const CounterProvider=({children})=>{
    const [count ,setcount]=useState(()=>{
        const savedvalue=localStorage.getItem("myglobalcount");
        return savedvalue?JSON.parse(savedvalue):0;
    });
    useEffect(()=>{
        localStorage.setItem("myglobalcount",JSON.stringify(count));
    },[count])
    useEffect(()=>{
      const handlestoragechange=(e)=>{
              if(e.key === "myglobalcount")
              {
                  setcount(JSON.parse(e.newValue))
              }
    
      }
        window.addEventListener(
      "storage",
      handlestoragechange
    )
    },[])
    
    return (
      <CounterContextPipeline.Provider value={{count,setcount}}>
        {children}
      </CounterContextPipeline.Provider>
    );
};