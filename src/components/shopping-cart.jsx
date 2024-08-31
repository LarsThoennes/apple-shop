import React, { Component } from 'react';
import "../styles/shopping-cart.css";

class ShoppingCart extends Component {
    state = { } 
    render() { 
        const { items } = this.props; 

        return  <div className='shopping-cart'>
        <h1>Warenkorb</h1>
        {items.length === 0 ? (
            <div>Dein Warenkorb ist leer</div>
        ) : (
            items.map(item  => (
                <div key={item.name}>
                    {item.amount} {item.name} {item.price}€
                    <div className='distance-line'></div>
                </div>
            ))
        )}
    </div>
    }
}
 
export default ShoppingCart;