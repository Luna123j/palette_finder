import React from "react";

export default function ColorBox(props) {

  console.log(props)
  const color = props.color;

  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }

  const colorInHex = "#" + hex(color.r) + hex(color.g) + hex(color.b)

  return (
    <div key={props.index} style={{
      backgroundColor: `${colorInHex}`,
      width: '100px', height: '100px'
    }}> {colorInHex}</div>
  )
}