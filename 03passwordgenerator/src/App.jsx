import { useState,useRef } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'

function App() {
    const[length,setLength]=useState(8)
    const[charAllowed,setCharAllowed]=useState(false)
    const[nuberAllowed,setNumberAllowed]=useState(false)
    const[password,setPassword] = useState("")


    const passwordGenerator = useCallback(()=>{

      let pass ="";
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(nuberAllowed) str+="01234567889"
      if(charAllowed) str+="~`!@#$%^&*({[)}]+=-"

      for(let i=1;i<=length;i++){
        let index = Math.floor(Math.random()*str.length +1)
        pass+=str.charAt(index)
      }
      setPassword(pass);

    },[length,charAllowed,nuberAllowed,setPassword])


    const copyPasswordToClipboard = useCallback(()=>{
      window.navigator.clipboard.writeText(password)
    },[password])
    //useRef 

    const passwordRef = useRef()


    useEffect(()=>{
        passwordGenerator()
    },[length,charAllowed,nuberAllowed,passwordGenerator])




  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" 
      placeholder='password'
      readOnly
      value={password}
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      >Copy</button>
      <br />
      <input type="range" 
      min={6}
      max={100}
      value={length}
      onChange={(e)=>setLength(e.target.value)}
      
      />
      {/* <span>Length : 8  </span> */}
      <label >
        Length : {length}
      </label>
      <label htmlFor="number ">Number : 
      <input type="checkbox" defaultChecked={nuberAllowed}  id='number'
      onChange={()=>{setNumberAllowed((prev)=>!prev)}}
      />
      </label>
      <label htmlFor="character ">Character : 
      <input type="checkbox" defaultChecked={charAllowed}  id='character'
      onChange={()=>{setCharAllowed((prev)=>!prev)}}
      />
      </label>
      
    </>
  )
}

export default App
