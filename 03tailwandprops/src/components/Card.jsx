// rfce - react functional component
// rafce - react arrow function component

import React from 'react'

function Card({userName = " MM ", post = "Not assigned yet"}) {
    // console.log(props);
    
  return (
    // <div>
    //   <img
    //     src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
    //     alt=""
    //   />
    //   <h1 classNameName='text-2xl bg-green-500 p-3 rounded'>A card for Photos</h1>
    //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eos delectus necessitatibus dolor itaque eveniet? Reprehenderit delectus ab voluptates sit, adipisci nisi tempora temporibus porro magnam optio dolorem debitis enim?</p>
    // </div>

    <>
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="card-image"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {userName}
          </h6>
          <p className="text-slate-600 leading-normal font-light">
           {post}
          </p>
        </div>
        </div>
    </>
  );
}

export default Card