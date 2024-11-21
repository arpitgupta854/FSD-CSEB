import React, { useState } from 'react'
import cat from './cat.jpeg';
function ImageManulaption() {
  const[height,setHeight]=useState(250);
  const[width,setWidth]=useState(200);
  function EnhanceHeight(){
    setHeight(height+30);
  }
  function EnhanceWidth(){
    setHeight(width+30);
  }
  return (
    <div style={{border:'2px solid red',height:'500px',width:'600px',marginLeft:'250px',backgroundColor:'lightblue'}}>
        <div style={{backgroundColor:'',height:'250px',width:'200px',marginLeft:'200px',marginTop:'100px'}}>
            <img src={cat} height={height} width={width} alt="dog image" />
        </div>
        <div style={{margin:'60px',gap:'20px',display:'flex'}}>
          <button style={{backgroundColor:'red'}} id='btn' onClick={EnhanceHeight}>EnhanceHeight</button>
          <button id='btn' onClick={EnhanceWidth} style={{backgroundColor:'plum'}}>EnhanceWidth</button>
          <button id='btn' style={{backgroundColor:'greenyellow'}}>Rotate</button>
          <button id='btn' style={{backgroundColor:'beige'}}>ChangeBackground</button>
        </div>
        
    </div>
  )
}

export default ImageManulaption