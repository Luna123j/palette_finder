
import React, { useEffect, useState } from "react";
import axios from "axios";
import Canvas from "./Canvas";
import { useSelector } from "react-redux";
import ColorBox from "./ColorBox";

export default function Explore() {
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  const [photos, setPhotos] = useState([])
  const paletteData = useSelector(state => state.paletteData.colorDataHex)

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`).then((res) => {
      setPhotos([...res.data]);
    })
  }, [])

  // const wait = async () => {
  //   const data = await paletteData.map((color, index) => {
  //     return <ColorBox color={color} key={index} />
  //   })
  //   return data
  // }


  return (
    <div>
      <input type='search' />
      <button> Search</button>

      {photos != undefined ? photos.map((p, index) => {
        console.log(p)
        return <div key={index}>
          <img src={p.urls.thumb} key={index} alt={'image'}></img>
          {/* <Canvas imgurl={[p.urls.thumb]} /> */}
          {/* {wait()} */}
        </div>
      }) : ""}
    </div>
  )
}