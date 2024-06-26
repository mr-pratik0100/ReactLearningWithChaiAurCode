import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Githb() {

   const data = useLoaderData()
    // const[data,setData] =useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/mr-pratik0100")
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Githb

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mr-pratik0100')
    return response.json()
  }