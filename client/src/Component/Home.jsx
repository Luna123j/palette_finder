import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home (){

  const navigate = useNavigate();
  const uploadHandler=()=>{
    navigate ('/upload')
  }

  const exploreHandler=()=>{
    
  }
  return (
    <section>
      <button onClick={uploadHandler}>Upload image</button>
      <button onClick={exploreHandler}>Explore palettes </button>
    </section>
  )
}