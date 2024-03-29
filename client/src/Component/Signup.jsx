import React from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux'

export default function Signup() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const signupHandler = (e) => {
    e.preventDefault();
    const data = {
      user:{
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        password_confirmation: e.target[3].value
      }
    }

    axios.post("/users", data, { withCredentials: true }).then((res) => {
      // console.log(res.data)
      if(res.data.message === "success"){
        //will set username to nav bar
        if(res.data.logged_in){
          dispatch({ type: "isLoggedIn/loggedin", payload: res.data.user });
        }
        navigate('/')
      }else{
        navigate('/users') //will depends on error message
      }
    }).catch(err => console.log('api errors:',err));
  }

  return (
    <div>
      <form onSubmit={signupHandler}>
        <label>
          Username: <input type="text" name="username" />
        </label>
        <label>
          Email: <input type="text" name="email" />
        </label>
        <label>
          Password: <input type="password" name="password" />
        </label>
        <label>
          Password Confirmation: <input type="password" name="password_confirmation" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}