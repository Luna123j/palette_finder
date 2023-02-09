import React, { useRef, useEffect } from "react";

export default function Canvas(props) {
  const canvasRef = useRef(null)
  const imgFile = props.imgfile;
  const imgUrl = props.imgurl;
  console.log('this is image file',imgFile)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image= new Image();
    image.src = imgUrl;
    image.onload = ()=>{

      if (imgFile.length > 0) {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
        const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        console.log('this is image data',imageData)
      }
    }
    
  }, [imgUrl])

  // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return <canvas ref={canvasRef} {...props} />
}