import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Upload() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [imgFile, setImgFile] = useState([])
  // const [imgUrl, setImgUrl] = useState([])

  const uploadHandler = (e) => {
    e.preventDefault()
    const data = {
      images: {
        imgUrl: e.target[0].value,
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
      dispatch({ type: "imgInfo/setImgUrl", payload: imageUrlState });
      // setImgUrl(imageUrlState)
    })
  }, [imgFile])


  const onFileChange = (e) => {
    e.preventDefault();
    dispatch({ type: "imgInfo/setImgFile", payload: [...e.target.files] });
    // setImgFile([...e.target.files])

  }

  return (
    <div>
      {/* <form onSubmit={uploadHandler}>
        image url <input />
        <button type="submit">submit</button>
      </form> */}

      <input type='file' multiple accept="image/*" onChange={onFileChange} />
      <button type="submit">submit</button>
      {imgUrl.map((imageSrc, index) => <img src={imageSrc} key={index} />)}
    </div>
  )
}