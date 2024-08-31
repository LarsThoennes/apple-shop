import React, { Component } from 'react';

class ProductNavbar extends Component {
    render() { 
        const { items, toggleCart } = this.props; 
        const totalItems = items.reduce((total, item) => total + item.amount, 0);

        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', top: '60px', width: '100%', zIndex: 999, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="#iPhone">iPhone</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Mac">Mac</a></li>
                            <li className="nav-item"><a className="nav-link" href="#iPad">iPad</a></li>
                            <li className="nav-item"><a className="nav-link" href="#AirPods">AirPods</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Watch">Apple Watch</a></li>
                            <li className="nav-item"><a className="nav-link" href="#HomeTv">Home & TV</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Accesories">Zubehör</a></li>
                        </ul>
                    </div>

                    <div>
                        <button onClick={toggleCart} className='shopping-cart-button'>
                            {totalItems > 0 && <span>{totalItems}</span>}
                            <img className='shopping-cart-image' src='assets/images/buttons/einkaufswagen.png' alt="Einkaufswagen"/>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default ProductNavbar;
