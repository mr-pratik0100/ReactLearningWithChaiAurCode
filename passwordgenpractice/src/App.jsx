

import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
 const [length,setLength]=useState(8)
 const[character,setCharacter]=useState(false)
 const[number,setNumber]=useState(false)
 const[password,setPassword]=useState("")

 const passwordGenerator = useCallback(()=>{
  let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number) str+="012345678"
  if(character) str+="~`!@#$%^&*(-_+=){[}]"

  for(let i=1;i<=length;i++){
    let index = Math.floor(Math.random()*str.length + 1)
    pass+=str.charAt(index)
  }
  setPassword(pass)
 },[length,character,number,setPassword])

//useRef 
 const passwordRef = useRef()

 const copyToClickBoard = useCallback(()=>{

  window.navigator.clipboard.writeText(password)

 },[password])


 useEffect(()=>{
    passwordGenerator()
 },[length,number,character,passwordGenerator])

  return (
    <>
      <h1>password generator project practice</h1>
      <input type="text" placeholder='password' value={password}  ref={passwordRef}/>
      <button onClick={copyToClickBoard}>Copy</button>
      <br />
      <input type='range' min={8} max={100} value={length}
      onChange={(e)=>setLength(e.target.value)}
      />
      <label >Length : {length}</label>
      <label htmlFor="number">Number :
        <input type="checkbox" id='number' defaultChecked={number}
        onClick={()=>setNumber((prev)=>!prev)}
        />
      </label>

      <label htmlFor="character">Character :
        <input type="checkbox" id='character' defaultChecked={character}
        onClick={()=>{setCharacter((prev)=>!prev)}}
        />
      </label>

    </>
  )
}

export default App
