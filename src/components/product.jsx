import React, { Component } from 'react';
import "../styles/product.css";

class Product extends Component {
    state = {  } 
    render() { 
        return <div className="card" style={{ width: '18rem' }}>
        <img src={"assets/images/" + this.props.folder + "/" + this.props.image}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <div className='card-feet'>
            <div>{this.props.price} €</div>
            <button onClick={this.props.onAdd} className="btn btn-primary">Hinzufügen</button>
          </div>
        </div>
      </div>
      ;
    }
}
 
export default Product;