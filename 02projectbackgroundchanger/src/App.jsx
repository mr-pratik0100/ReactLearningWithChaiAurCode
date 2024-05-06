import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className="container flex justify-between items-center w-full h-screen" style={{backgroundColor:color}}>
    <button className='w-20 h-20 bg-black text-white rounded-lg' onClick={()=>setColor("red")}>Red</button>
     <button className='w-20 h-20 bg-black text-white rounded-lg' onClick={()=>setColor("blue")}>blue</button>
     <button className='w-20 h-20 bg-black text-white rounded-lg' onClick={()=>setColor("green")}>green</button>
     <button className='w-20 h-20 bg-black text-white rounded-lg' onClick={()=>setColor("yellow")}>yellow</button>
    </div>
     
    </>
  )
}

export default App
