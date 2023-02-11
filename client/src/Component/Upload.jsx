import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Canvas from "./Canvas";
import Palette from "./Palette";



export default function Upload() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const imgFile = useSelector(state => state.data)
  const imgUrlredux = useSelector(state => state.imgInfo.imgUrl)
  const colorDataHex= useSelector(state => state.paletteData.colorDataHex)
  const colorDataRgb= useSelector(state => state.paletteData.colorDataRgb)
  const imgData = useSelector(state=>state.imgInfo.data)


  const [imgFile, setImgFile] = useState([])
  const [imgUrl, setImgUrl] = useState([])

  console.log('^^^^^^^^hex',colorDataHex)
  console.log('^^^^^^^^^rgb',colorDataRgb)
  const saveHandler = (e) => {
    e.preventDefault()
    const data = {
      images: {
        imgUrl: imgUrlredux,
        palette_data_in_hex: [...colorDataHex],
        palette_data_in_rgb: [...colorDataRgb],

      }

    }
    axios.post('/image', data, { withCredential: true })
      .then((res) => {
        console.log(res.data)
        // if(res.data.message === 'success'){
        //   navigate('/')
        // }
      })

  }

  useEffect(() => {

    let imageUrlState = [];
    
      imgFile.forEach(image => {
        imageUrlState.push(URL.createObjectURL(image))
        console.log("^^^^^^^^^^^^^",imageUrlState)
        setImgUrl(imageUrlState)
      })

  }, [imgFile])


  const onFileChange = (e) => {
    e.preventDefault();
    // dispatch({ type: "imgInfo/setImgFile", payload: [...e.target.files] });
    console.log('this is image file data',e.target.files)
    setImgFile([...e.target.files])

  }

  console.log('^^^^^^^^^^^^^^^^^',imgUrl)
  console.log('^^^^^^^^^^^^^^^^^this is img url saved to redux',imgUrlredux)

  return (
    <div>
      {/* <form onSubmit={uploadHandler}>
        image url <input />
        <button type="submit">submit</button>
      </form> */}

      <input type='file' accept="image/*" onChange={onFileChange} />
      <button type="submit" onClick={saveHandler}>Save</button>
      <Canvas imgfile={imgFile} imgurl={imgUrl}/>
      {/* { imgUrl.map((imageSrc, index) => <img src={imageSrc} key={index} /> )  } */}
      <Palette />
    </div>
  )
}