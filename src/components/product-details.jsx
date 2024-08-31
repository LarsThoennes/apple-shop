import React from 'react';
import "../styles/description-card.css";

const ProductDetail = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="card mb-3 description-card" style={{ Maxwidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`assets/images/${product.folder}/${product.image}`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body card-head-description">
                        <div>
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div>
                            <button onClick={onClose} className='close-btn'>
                                <img src='assets/images/buttons/close-btn.png'/>
                            </button>
                        </div>
                    </div>
                    <div className='card-feet-description'>
                        <h4 className="card-text"><small className="text-body-secondary">{product.price} €</small></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
