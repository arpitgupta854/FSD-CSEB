import React, { useState } from 'react'

const UseStateState = () => {
    const [count,setcount]=useState(20);
  return (
   <div style={{color:"red"}}>{count}</div>
  )
}

export default UseStateState