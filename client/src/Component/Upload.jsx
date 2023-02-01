import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Upload() {

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
      })

  }
  return (
    <div>
      <form onSubmit={uploadHandler}>
        image url <input />
        <button type="submit">submit</button>
      </form>

    </div>
  )
}