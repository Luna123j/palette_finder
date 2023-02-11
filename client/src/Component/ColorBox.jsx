import React from "react";

export default function ColorBox(props) {

  console.log(props)
  const colorInHex = props.color;

  return (
    <div style={{
      backgroundColor: `${colorInHex}`,
      width: '100px', height: '100px'
    }}> {colorInHex}</div>
  )
}