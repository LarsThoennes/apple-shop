import React, { Component } from 'react';
import Navbar from "./components/navbar";
import productData from './productData';
import ProductSection from './components/product-section';
import ShoppingCart from './components/shopping-cart';
import Footer from './components/footer';

class App extends Component {
    state = { 
        items: []
     } 

    addItem = (amount, name, price) => {
        let currentItems = [...this.state.items]; // Erstellt eine Kopie
        let existingItem = this.state.items.find(item => item.name == name);
        if(existingItem) {
            existingItem.amount++;
            existingItem.price = price * existingItem.amount; // Der Preis wird mit der Menge multipliziert
        } else {
            currentItems.push({
                amount, 
                name, 
                price: price * amount
            })
        }
        this.setState({items: currentItems})
        console.log(this.state)
    }

    render() { 
            return (
                <React.Fragment>
                    <Navbar items={this.state.items}/>
                    <div className='body-container'>
                        <div className='main-container'>
                            <div className='product-container'>
                                <div className='product-container-body'>
                                    <ProductSection id='iPhone' title='iPhones' products={productData.iPhones} onAdd={this.addItem} />
                                    <ProductSection id='Mac' title='iMac' products={productData.iMacs} onAdd={this.addItem} />
                                    <ProductSection id='MacBook' title='MacBook' products={productData.MacBooks} onAdd={this.addItem} />
                                    <ProductSection id='iPad' title='iPad' products={productData.iPads} onAdd={this.addItem} />
                                    <ProductSection id='AirPods' title='AirPods' products={productData.AirPods} onAdd={this.addItem} />
                                    <ProductSection id='Watch' title='Apple Watch' products={productData.Watch} onAdd={this.addItem} />
                                    <ProductSection id='HomeTv' title='Home & TV' products={productData.HomeTv} onAdd={this.addItem} />
                                    <ProductSection id='Accesories' title='Zubehör' products={productData.Accesories} onAdd={this.addItem} />
                                </div>
                            </div>
                        </div>
                        {/* <ShoppingCart items={this.state.items} /> */}
                    </div>
                    <Footer/>
                </React.Fragment>
            );
    }
    
}
 
export default App;