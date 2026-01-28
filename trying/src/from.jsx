import React, { useState } from 'react'

const Form = () => {
    let [email,setEmail]=useState("")
    let[status,setStatus]=useState(false)
  return (
    <form>
        <input className='border' type="email" onChange={()=>{
            setStatus(status=true)
        }
            } />
       
        
    </form>
  )
}

export default Form