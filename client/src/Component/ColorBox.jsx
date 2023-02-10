import React from "react";

export default ColorBox = (props)=>{
  return(
    <div style={{backgroundColor:props.color,
      width:'13em', height:'13em'}}></div>
  )
}