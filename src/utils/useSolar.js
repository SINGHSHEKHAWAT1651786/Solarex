import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

//Crerate a hook i.e useSolar
const useSolar = (resId) =>  {
    const [solar, setSolar] = useState(null);
    
// getting the APIs data 
//Apis for Solar Info
    useEffect(()=>{
     getSolarInfo();
    }, []);
    async function getSolarInfo(){
     const data = await fetch(FETCH_MENU_URL  + resId)
     const json = await data.json();
     console.log(json.data);
     setSolar(json.data);
    }
// return resturant data
return resturant;
    
};
export default useSolar;