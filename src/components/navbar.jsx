import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/navbar.css";
import ProductNavbar from './product-navbar';


class Navbar extends Component {
    render() { 
        const { items } = this.props; 
        return (
            <div className='navbar-container' style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <nav className="navbar navbarHead bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Apple Marketplace</a>
                    </div>
                </nav>
                <ProductNavbar items={items} /> 
            </div>
        );
    }
}
 
export default Navbar;