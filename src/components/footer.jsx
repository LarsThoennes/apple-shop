import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return <div  className='navbar-container-footer' style={{  bottom: 0, width: '100%', zIndex: 1000 }} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Apple Marketplace</a>
          </div>
        </nav>
      </div>;
    }
}
 
export default Footer;