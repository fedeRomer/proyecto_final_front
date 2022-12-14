import Logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import axios from 'axios';
import Cookies from 'js-cookie'
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
//import Logo from './img/icons/police.png'


import LoginForm from './components/user/login/LoginForm';
import Dashboard from './components/user/dashboard/Dashboard';
import Home from './components/home/Home';

import RegisterNewUser from './components/user/register/RegisterNewUser';
import Choferes from './components/choferes/Choferes';
import Camiones from './components/camiones/Camiones';
import Alertas from './components/alertas/Alertas';
import Tracking from './components/tracking/Tracking';

import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoute from './utils/PublicRoute';

function App() {


  const readCookie = () =>{
    const user = Cookies.get("user");
    const status = Cookies.get("logged_in")
    if (status){
      alert("Bienvenido "+user);
    }
  }

  React.useEffect(() => {
    readCookie();
  })

  return (
    <Router>
      <div >
        <Navbar bg="primary" variant="dark" expand="lg">
          <img
            href="#home"
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <Navbar.Brand href="/home">Proyecto Final</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* <small style={{ color: 'red' }}>(Acceso sin token)</small> */}
              <Nav.Link activeclassname="active" as={Link} to="/dashboard">Panel Usuarios</Nav.Link> {/* <small style={{ color: 'red' }}>(Acceso con token unicamente)</small> */}
              <Nav.Link activeclassname="active" as={Link} to="/usuarios">Usuarios</Nav.Link>
              <Nav.Link activeclassname="active" as={Link} to="/choferes">Choferes</Nav.Link>
              <Nav.Link activeclassname="active" as={Link} to="/camiones">Camiones</Nav.Link>
              <Nav.Link activeclassname="active" as={Link} to="/alertas">Alertas</Nav.Link>
              <Nav.Link activeclassname="active" as={Link} to="/tracking">Tracking</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/" exact> <Redirect to="/home" /> </Route>
          <Route path="/home" exact component={Home} />
          <PublicRoute path="/login" component={LoginForm} />
          <PrivateRoutes path="/dashboard" component={Dashboard} />
          <PrivateRoutes path="/usuarios" component={RegisterNewUser}/>
          <PrivateRoutes path="/choferes" component={Choferes}/>
          <PrivateRoutes path="/camiones" component={Camiones}/>
          <PrivateRoutes path="/alertas" component={Alertas}/>
          <PrivateRoutes path="/tracking" component={Tracking}/>
        </Switch>
        
      </div>

    <div>


    </div>
    </Router>
  );
}

function checkLoginStatus(){
  axios.get('http://localhost:8080/api/login/checkloginstatus',
  //{user: user},
  {headers: {'Content-Type': 'application/json'}}
  ).then(response => {

    if(response.status === 200){
      //logged in
      alert('ok');
    }else{
      //error
      alert('error');
    }
  })
} 

export default App;
