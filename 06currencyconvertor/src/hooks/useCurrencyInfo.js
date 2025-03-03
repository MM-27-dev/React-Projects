import {useEffect, useState} from "react";

function useCurrencyInfo(currancy){
    const [data,setData] = useState({});

    useEffect(()=>{
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currancy}.json
`)
         .then((res) => res.json())
         .then((res) => setData(res[currancy]));
    },[currancy])

    console.log(data)
    return data;

}

export default useCurrencyInfo;