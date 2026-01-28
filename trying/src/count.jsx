import React, { useState } from 'react'

const Count = () => {
    let [counter,setcounter]=useState(0)
  return (
    <>
    <p> count  {counter} </p>
    <button onClick={()=>setcounter(counter=counter+1)}>click me </button>
    </>
  )
}

export default Count