import React, { useState } from 'react'

const Home = () => {
  
  let [Count,setCount] = useState(0)
  return (
    <>
    <p className='bg-amber-200 w-80 text-xl p-2'>Here u can see the updates of the count : {Count}</p>
    <div className=' flex gap-10 my-2'>
    <button className='text-xl border rounded-2xl p-2 bg-teal-200' onClick={()=>setCount(Count = Count+1)}>Increase</button>
    <button className='text-xl border rounded-2xl p-2 bg-teal-700 text-white' onClick={()=>setCount(Count = Count-1)}>Decrease</button>
    </div>
    </>
  )
}

export default Home