import React, { Component } from 'react';
import "../styles/shopping-cart.css";

class ShoppingCart extends Component {
    state = { } 

    render() { 
        const { items, toggleCart } = this.props; 

        return (
            <div className='shopping-cart'>
                <div className='shopping-cart-head'>
                    <h1>Dein Warenkorb</h1>
                    <button className='close-btn' onClick={toggleCart}>
                        <img src='../assets/images/buttons/close-btn.png' alt="Close Button"/>
                    </button>
                </div>
                {items.length === 0 ? (
                    <div>Dein Warenkorb ist leer</div>
                ) : (
                    items.map(item => (
                        <div key={item.name} className='cart-item'>
                            <div className='cart-item-product-info'>
                                <img 
                                    src={`assets/images/${item.folder}/${item.image}`} 
                                    className='cart-item-image' 
                                    alt={item.name} 
                                />
                                <div className='cart-item-details'>
                                    <div>{item.amount} x {item.name} {item.basePrice.toFixed(2)}€</div>
                                    <div>{item.ram}</div>
                                    <div>{item.storageSpace}</div>
                                </div>
                            </div>
                            <div className='distance-line'></div>
                        </div>
                    ))
                )}

                {items.length === 0 ? (
                    <div></div>
                ) : (
                    <div>+ Versandkosten 5,99€</div>
                   
                )}

                {items.length > 0 && (
                    <div className='shopping-cart-feet'>
                        <span>Gesamtpreis: {this.props.items.reduce((total, item) => total + item.basePrice, + 5.99, 0).toFixed(2)}€</span>
                        <button className='btn btn-primary'>Bestellen</button>
                    </div>
                )}
            </div>
        );
    }
}
 
export default ShoppingCart;