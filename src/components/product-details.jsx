import React, { useState, useEffect } from 'react';
import "../styles/description-card.css";

const ProductDetail = ({ product, onClose, onAdd }) => {
    const [selectedRam, setSelectedRam] = useState('8 GB');
    const [selectedStorage, setSelectedStorage] = useState('512 GB');
    const [selectedSize, setSelectedSize] = useState('41 mm');
    const [currentPrice, setCurrentPrice] = useState(product ? product.basePrice : 0);


    useEffect(() => {
        if (product) {
            const ramPrice = product.ramPrices ? (product.ramPrices[selectedRam] || 0) : 0;
            const storagePrice = product.StorageSpace ? (product.StorageSpace[selectedStorage] || 0) : 0;
            const sizePrice = product.size ? (product.size[selectedSize] || 0) : 0;
            setCurrentPrice(product.basePrice + ramPrice + storagePrice + sizePrice);
        }
            const sizePrice = product.size ? (product.size[selectedSize] || 0) : 0;
    }, [product, selectedRam, selectedStorage, selectedSize]);

    const onRamSelect = (ramOption) => {
        setSelectedRam(ramOption);
    };

    const onStorageSelect = (storageOption) => {
        setSelectedStorage(storageOption);
    };

    const onSizeSelect = (sizeOption) => {
        setSelectedSize(sizeOption);
    };

    if (!product) return null;

    return (
        <div className="card mb-3 description-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`assets/images/${product.folder}/${product.image}`} className="img-fluid rounded-start" alt={product.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body card-head-description">
                        <div>
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div>
                            <button onClick={onClose} className='close-btn'>
                                <img src='assets/images/buttons/close-btn.png' alt="close button"/>
                            </button>
                        </div>
                    </div>
                    <div> 
                        {product.RAM ? (
                            <div className='choose-option-container'>
                                <h6>Wählen Sie den Arbeitsspeicher:</h6>
                                {product.RAM.map((ramOption, index) => (
                                    <button 
                                        key={index} 
                                        className={`btn btn-outline-primary ram-btn option-btn ${selectedRam === ramOption ? 'active' : ''}`}
                                        onClick={() => onRamSelect(ramOption)}>
                                        {ramOption}
                                    </button>
                                ))}
                            </div>
                        ) : null}
                        
                        {product.StorageSpace ? (
                            <div className='choose-option-container'>
                                <h6>Wählen Sie den Speicherplatz:</h6>
                                {Object.keys(product.StorageSpace).map((storageOption, index) => (
                                    <button 
                                        key={index} 
                                        className={`btn btn-outline-primary storage-btn option-btn ${selectedStorage === storageOption ? 'active' : ''}`}
                                        onClick={() => onStorageSelect(storageOption)}>
                                        {storageOption}
                                    </button>
                                ))}
                            </div>
                        ) : null}

                        {product.size ? (
                            <div className='choose-option-container'>
                                <h6>Wählen Sie eine Größe:</h6>
                                {Object.keys(product.size).map((sizeOption, index) => (
                                    <button 
                                        key={index} 
                                        className={`btn btn-outline-primary storage-btn option-btn ${selectedSize === sizeOption ? 'active' : ''}`}
                                        onClick={() => onSizeSelect(sizeOption)}>
                                        {sizeOption}
                                    </button>
                                ))}
                            </div>
                        ) : null}
                    </div>
                    <div className='card-feet-description'>
                        <h4 className="card-text"><small className="text-body-secondary">{currentPrice} €</small></h4>
                        <button onClick={(e) => { e.stopPropagation(); onAdd(1, product.title, currentPrice, product.image, product.folder); }} className="btn btn-primary">Hinzufügen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
