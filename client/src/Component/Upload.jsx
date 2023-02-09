import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Canvas from "./Canvas";

export default function Upload() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const imgFile = useSelector(state => state.data)
  const imgUrlredux = useSelector(state => state.imgUrl)

  const [imgFile, setImgFile] = useState([])
  const [imgUrl, setImgUrl] = useState([])

  const uploadHandler = (e) => {
    e.preventDefault()
    const data = {
      images: {
        imgUrl: imgUrl,
        palette_data: ['1'],
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
        dispatch({ type: "imgInfo/setImgUrl", payload: imageUrlState });
      })

  }, [imgFile])


  const onFileChange = (e) => {
    e.preventDefault();
    // dispatch({ type: "imgInfo/setImgFile", payload: [...e.target.files] });
    setImgFile([...e.target.files])

  }

  console.log('^^^^^^^^^^^^^^^^^',imgUrl)
  console.log('^^^^^^^^^^^^^^^^^',imgUrlredux)

  return (
    <div>
      {/* <form onSubmit={uploadHandler}>
        image url <input />
        <button type="submit">submit</button>
      </form> */}

      <input type='file' accept="image/*" onChange={onFileChange} />
      <Canvas imgfile={imgFile} imgurl={imgUrl}/>
      <button type="submit" onClick={uploadHandler}>submit</button>
      { imgUrl.map((imageSrc, index) => <img src={imageSrc} key={index} /> )  }
    </div>
  )
}