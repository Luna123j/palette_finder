import React from "react";
import { useSelector } from "react-redux";
import ColorBox from "./ColorBox";

export default function Palette  (){
  const colorDataHex= useSelector(state => state.paletteData.colorDataHex)
  console.log('colors from color state',colorDataHex)

  return (
    <div>{colorDataHex.map((color,index)=>{
      return <ColorBox color={color} key = {index}  />
    })}</div>
  )
}