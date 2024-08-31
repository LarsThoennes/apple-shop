import React, { Component } from 'react';
import Navbar from "./components/navbar";
import productData from './productData';
import ProductSection from './components/product-section';
import ShoppingCart from './components/shopping-cart';
import Footer from './components/footer';
import ProductDetail from './components/product-details';

class App extends Component {
    state = { 
        items: [],
        showCart: false,
        selectedProduct: null
    } 

    addItem = (amount, name, price, image, folder) => {
        let currentItems = [...this.state.items];
        let existingItem = this.state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount++;
            existingItem.price = price * existingItem.amount;
        } else {
            currentItems.push({
                amount, 
                name, 
                price: price * amount,
                image,
                folder
            });
            console.log(currentItems);
        }
        const totalPrice = currentItems.reduce((total, item) => total + item.price, 0);
        this.setState({ items: currentItems, totalPrice });
    }

    toggleCart = () => {
        this.setState({ showCart: !this.state.showCart }); 
    }

    toggleProductCard = (product) => {
        this.setState({ selectedProduct: product });
    }

    closeProductDetail = () => {
        this.setState({ selectedProduct: null });
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar items={this.state.items} toggleCart={this.toggleCart} />
                <div className='body-container'>
                    <div className='main-container'>
                        <div className='product-container'>
                            <div className='product-container-body'>
                                <ProductSection id='iPhone' title='iPhones' products={productData.iPhones} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                                <ProductSection id='Mac' title='iMac' products={productData.iMacs} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                                <ProductSection id='MacBook' title='MacBooks' products={productData.MacBooks} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                                <ProductSection id='iPad' title='iPads' products={productData.iPads} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                                <ProductSection id='AirPods' title='AirPods' products={productData.AirPods} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                                <ProductSection id='Watch' title='Apple Watch' products={productData.Watch} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                                <ProductSection id='HomeTv' title='Home & TV' products={productData.HomeTv} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                                <ProductSection id='Accesories' title='Zubehör' products={productData.Accesories} onAdd={this.addItem} toggleProductCard={this.toggleProductCard}/>
                            </div>
                        </div>
                    </div>
                    {this.state.showCart && (
                        <div className="shopping-cart-overlay">
                            <ShoppingCart items={this.state.items} toggleCart={this.toggleCart}/>
                        </div>
                    )}
                    {this.state.selectedProduct && (
                        <div className="shopping-cart-overlay">
                            <ProductDetail product={this.state.selectedProduct} onClose={this.closeProductDetail}/>
                        </div>
                    )}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
