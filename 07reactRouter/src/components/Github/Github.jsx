import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


function Github() {
    // const [data,setData] = useState({});

    // useEffect(()=>{
    //       fetch("https://api.github.com/users/hiteshchoudhary")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data)
    //         setData(data)
    //       })
    // },[])
   const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-green-200 text-white p-4 text-3xl'>Github followes : {data.followers}
    <img src={data.avatar_url} width={300} />
    </div>
  )
}

export default Github;

export const gitubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json()
}