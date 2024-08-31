import React from 'react';
import "../styles/product.css";


const ProductCard = ({ title, price, image, folder, description, onAdd, toggleProductCard }) => {
    return (
        <div onClick={toggleProductCard} className="card main-product-card-view" style={{ width: '18rem' }}>
            <img src={`assets/images/${folder}/${image}`} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className='card-feet'>
                    <div>{price} €</div>
                    <button onClick={(e) => { e.stopPropagation(); onAdd(); }} className="btn btn-primary">Hinzufügen</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
