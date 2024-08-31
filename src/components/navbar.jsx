import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/navbar.css";


class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav className="navbar navbarHead bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Apple Marketplace</a>
        </div>
      </nav>
      ;
    }
}
 
export default Navbar;