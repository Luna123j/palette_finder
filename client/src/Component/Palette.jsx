import React from "react";
import { useSelector } from "react-redux";
import ColorBox from "./ColorBox";

export default function Palette  (){
  const colorData= useSelector(state => state.paletteData.colorData)
  console.log('colors from color state',colorData)

  return (
    <div>{colorData.map((color,index)=>{
      return <ColorBox color={color} index = {index} />
    })}</div>
  )
}