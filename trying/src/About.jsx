import React from 'react'
import { useState } from 'react'

const About = () => {
  let [Name,setname] = useState("sohail")
  let [Age,setAge] = useState(18)
  let [State,setState] = useState(true)
  
  return (
   <>
    <div className=' flex flex-col justify-center items-center gap-1'>students details 
      <p>name :{Name}</p>
      <p>age:{Age}</p>
      <p>State:{State?"active":"inactive"}</p>
      <button onClick={()=>{setname(Name="samad") }}> click me</button>
      <button onClick={()=>setAge(Age=24)}>click to update age</button>
      <button onClick={()=>setState(false)}>click to update state</button>
    </div>
    

   </>
  )
}

export default About