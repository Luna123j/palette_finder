import React, { useRef, useEffect } from "react";
import { buildRgb, quantization, hex } from "./helpers/generatePalette.js"
import { useDispatch, useSelector } from "react-redux";

export default function Canvas(props) {
  const dispatch = useDispatch();
  const canvasRef = useRef(null)
  const imgFile = props.imgfile;
  const imgUrl = props.imgurl;
  let colors;
  console.log('this is image file', imgFile)
  console.log('this is image url file', imgUrl)


  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image = new Image();
    image.src = imgUrl;
    image.crossOrigin = "Anonymous";
  
    image.onload = () => {

      if (imgUrl !== undefined) {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
        const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        // console.log('this is image data', imageData)
        // dispatch({type: 'imgInfo/setImgFile', payload: imageData})
        const rgbValues = buildRgb(imageData.data);
        const colorDataInRgb = quantization(rgbValues, 2)
        colors = colorDataInRgb
        // console.log(colors)
        const colorDataInHex = colors.map((color) => {
          return ("#" + hex(color.r) + hex(color.g) + hex(color.b)).toUpperCase();
        })
        // console.log(colorDataInHex)
        dispatch({ type: 'paletteData/setPaletteDataRgb', payload: colorDataInRgb })
        dispatch({ type: 'paletteData/setPaletteDataHex', payload: colorDataInHex })

        const dataURL = canvas.toDataURL();
        // console.log('this is canva data url',dataURL);
        dispatch({ type: "imgInfo/setImgUrl", payload: `${dataURL}` });
      }
    }

  }, [])


  // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return <canvas ref={canvasRef} {...props} />
}