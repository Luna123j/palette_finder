import React from "react";

export default function ColorBox(props){

  console.log(props)
  const color = props.color;
  return(
    <div key={props.index} style={{backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
      width:'100px', height:'100px'}}></div>
  )
}