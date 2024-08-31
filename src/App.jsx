import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from './components/shopping-cart';
import ProductNavbar from './components/product-navbar';
import productData from './productData';

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
                <Navbar />
                <ProductNavbar />
                <div className='body-container'> 
                    <div className='main-container'>
                        <div className='product-container'>
                            <div className='product-container-body'>
                                <div id='iPhone'>
                                    <h1>iPhones</h1>
                                </div>
                                
                                <div className='product-container-objects'>
                                    {productData.iPhones.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>
                                <div id='Mac'>
                                    <h1>iMac</h1>
                                </div>
                                <div className='product-container-objects'>
                                    {productData.iMacs.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>

                                <div id='MacBook'>
                                    <h1>MacBook</h1>
                                </div>
                                <div className='product-container-objects'>
                                    {productData.MacBooks.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>

                                <div id='iPad'>
                                    <h1>iPad</h1>
                                </div>
                                <div className='product-container-objects'>
                                    {productData.iPads.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>

                                <div id='AirPods'>
                                    <h1>AirPods</h1>
                                </div>
                                <div className='product-container-objects'>
                                    {productData.AirPods.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>

                                <div id='Watch'>
                                    <h1>AppleWatch</h1>
                                </div>
                                <div className='product-container-objects'>
                                    {productData.Watch.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>

                                <div id='HomeTv'>
                                    <h1>Home & TV</h1>
                                </div>
                                <div className='product-container-objects'>
                                    {productData.HomeTv.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>

                                <div id='Accesories'>
                                    <h1>Zubehör</h1>
                                </div>
                                <div className='product-container-objects'>
                                    {productData.Accesories.map((product) => (
                                        <Product 
                                            onAdd={() => this.addItem(1, product.title, product.price)} 
                                            title={product.title} 
                                            price={product.price} 
                                            folder={product.folder} 
                                            image={product.image} 
                                            description={product.description} 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <ShoppingCart items={this.state.items} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
}
 
export default App;