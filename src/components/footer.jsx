import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return <div  className='navbar-container-footer' style={{  bottom: 0, width: '100%', zIndex: 1000 }} >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Apple Marketplace</a>
          </div>
        </nav>
      </div>;
    }
}
 
export default Footer;