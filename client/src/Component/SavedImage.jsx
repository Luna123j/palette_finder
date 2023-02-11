import axios from "axios";
import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import ColorBox from "./ColorBox";

export default function SavedImage(){

  const [data,setData]=useState([]);
  const [imgUrl,setImgUrl]=useState([])

  useEffect(()=>{
    axios.get('/image')
    .then((res)=>{
    console.log('response to get image',res.data.images)

      setData([...res.data.images])
    })
    
  },[])
  console.log('response to set state',data)

  return (
    <div>
      {/* { imgUrl.map((imageSrc, index) => <img src={imageSrc} key={index} /> )  } */}
      {data !== undefined ? data.map((singleImg,index)=>{
       return<div key = {index}><Canvas imgurl={[singleImg.imgUrl]}/> 
        {singleImg.palette_data_in_hex.map((color,index)=>{
          return <ColorBox color={color} key = {index}  />
        })}</div>
      }) : 'Image not found'}
    </div>
  )
}