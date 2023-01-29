import React from "react"
import axios from 'axios'
export default function Signup() {

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
      console.log(res.data)
    }).catch(err => console.log(err));
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
          Password: <input type="text" name="password" />
        </label>
        <label>
          Password Confirmation: <input type="text" name="password_confirmation" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}