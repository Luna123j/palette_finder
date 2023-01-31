import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link, } from 'react-router-dom';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../redux/isLoggedIn';
import { useEffect } from 'react';


function NavBar() {
  const { isLoggedIn } = useSelector(state => state)
  const dispatch = useDispatch()

  console.log("this is variable", isLoggedIn)
  // const [isLoggedIn, setIsLoggedIn] = useState({ status: false, user: {} })

  // useEffect(() => {
  //   axios.get('/login', { withCredentials: true })
  //     .then(res => {
  //       console.log(res.data)
  //       if (res.data.logged_in) {
  //         setIsLoggedIn({ status: true, user: res.data.user })
  //       } else {
  //         setIsLoggedIn({ status: false, user: {} })
  //       }
  //     })
  //     .catch(error => console.log('api errors:', error))
  // }, [])

  const logoutHandler = () => {
    axios.post('/logout', { withCredentials: true })
      .then(res => {
        console.log(res.data.message)
        if (res.data.message === 'logout') {
          dispatch(reset())
        }
      })
      .catch(error => console.log('api errors:', error))
  }


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ABC LOGO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#features">Features</Nav.Link>
            <Navbar.Text>
              {isLoggedIn.status ?
                <>Logged in as : {isLoggedIn.user.username} | <button onClick={logoutHandler}>Logout</button></>
                :
                <><Link to="/users" >Signup</Link> | <Link to="/login" >Login</Link></>
              }

            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;