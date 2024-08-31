import React from 'react';
import ProductCard from './product-card';

const ProductSection = ({ id, title, products, onAdd }) => {
    return (
        <div>
            <div id={id}>
                <h1>{title}</h1>
            </div>
            <div className='product-container-objects'>
                {products.map((product) => (
                    <ProductCard
                        key={product.key} 
                        onAdd={() => onAdd(1, product.title, product.price)}
                        title={product.title}
                        price={product.price}
                        folder={product.folder}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;