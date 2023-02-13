import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const userStatus = useSelector(state => state.isLoggedIn.status)
  const navigate = useNavigate();
  const uploadHandler = () => {
    navigate('/upload')
  }

  const exploreHandler = () => {
    navigate('/explore')

  }
  return (
    <section>
      {userStatus ?
        <>
          <button onClick={uploadHandler}>Upload image</button>
          <button onClick={exploreHandler}>Explore palettes </button>
        </>
        : <div> home page
          <p>Please sign in to try more features</p>
        </div>
      }
    </section>
  )
}