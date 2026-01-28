import React, { useEffect, useState } from 'react'

const Fetch = () => {
    useEffect(()=>{fetching()},[])
    const [render,setRender]=useState([])
    async function fetching() {
        const a= await fetch("https://dummyjson.com/quotes")
        const b=await a.json()
        console.log(b.quotes)
        setRender(b.quotes)   
    }
    let[a,setA]=useState(0)
  return (
    <>
    <button onClick={()=>setA(a+10)}>click{console.log(a)}</button>
    <button onClick={()=>setA(a-10)}>click{console.log(a)}</button>
     <div>{render[0]?render.slice(a,a+10).map((index)=>{
        return <p>{index.quote}</p>
     }):"loading"}</div>
     
    </>
  )
}

export default Fetch