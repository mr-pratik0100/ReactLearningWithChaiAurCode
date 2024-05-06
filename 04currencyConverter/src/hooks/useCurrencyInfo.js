//designing custom hooks it is similar to function in that we can use our built in hooks also


import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //whenever you call api you got data in string format to convert from string to json we use res.json()
        .then((res)=>res.json())
        .then(()=>setData(res[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo;