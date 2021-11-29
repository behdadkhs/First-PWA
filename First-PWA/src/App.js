import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/pages';
import SignUp from './components/pages/Register/SignUp';
import Login from './components/pages/Register/Login';
import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/pages/Register/Context/FormAuthentication';
import Profile from './components/pages/Profile';
import PrivateRoute from './components/pages/Register/PrivateRoute';
import './assets/styles/tailwind.css';


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <React.Fragment>
      <BrowserRouter>
        <AuthProvider>
          <Navbar isopen={isOpen} toggle={toggle} />
          <Sidebar isopen={isOpen} toggle={toggle} />

          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />

          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
