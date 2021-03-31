import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

class Heading extends React.Component
{
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <Link class="nav-link" to={'/home'}>Home</Link>
              </li>
              <Link class="nav-link" to={'/register'}>Registration</Link>
              <Link class="nav-link" to={'/login'}>Login</Link>
              <Link class="nav-link" to={'/logout'}>Log Out</Link>
              
            </ul>
          </nav>
        )
    }
}

export default Heading