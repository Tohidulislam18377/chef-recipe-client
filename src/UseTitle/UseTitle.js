import { useEffect } from "react";

const useTitle = (title)=>{
   useEffect(()=>{
     document.title = `${title} - Chef`
   },[title])
}

export default useTitle;