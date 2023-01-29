import React from "react"
import axios from 'axios'
export default function Login() {

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
        email: e.target[0].value,
        password: e.target[1].value
    }

    axios.post("/login", data,{credentials: 'include' }).then((res) => {
      console.log(res.data)
    }).catch(err => console.log(err));
  }

  return (
    <div>
      <form onSubmit={loginHandler}>
        <label>
          Email: <input type="text" name="email" />
        </label>
        <label>
          Password: <input type="text" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}