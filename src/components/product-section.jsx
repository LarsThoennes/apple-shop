import React from 'react';
import ProductCard from './product-card';

const ProductSection = ({ id, title, products, onAdd, toggleProductCard }) => {
    return (
        <div>
            <div id={id} style={{ paddingTop: '120px' }}>
                <h1>{title}</h1>
            </div>
            <div className='product-container-objects'>
                {products.map((product) => (
                    <ProductCard
                        key={product.key}
                        onAdd={() => {
                            if(product.RAM) {
                                const firstRam = product.RAM[0];
                                onAdd(1, product.title, product.basePrice, product.image, product.folder, firstRam);
                            } 
                            if (product.StorageSpace) {
                                const StorageSpace = product.StorageSpace[0];
                                onAdd(1, product.title, product.basePrice, product.image, product.folder, StorageSpace);
                            }
                            else {
                                onAdd(1, product.title, product.basePrice, product.image, product.folder);
                            }
                        }}
                        title={product.title}
                        basePrice={product.basePrice}
                        folder={product.folder}
                        image={product.image}
                        description={product.description}
                        ram={product.RAM}
                        storageSpace={product.StorageSpace}
                        toggleProductCard={() => toggleProductCard(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
