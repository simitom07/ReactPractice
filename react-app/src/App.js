import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductItem from './ProductItem';
import AddItem from './AddItem';

const product =[
  {
    name:'iPad',
    price: 65
  },
  {
    name:'iPhone',
    price: 650
  }
];

localStorage.setItem('products',JSON.stringify(product));

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      products:JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
     const products = this.getProducts();
     this.setState({products});
  }

  getProducts(){
    return this.state.products;
  }

  onDelete(name){
   const products = this.getProducts();

   const filteredProducts = products.filter(product =>{
     return product.name !== name;
     console.log(products)
   });
   this.setState({products: filteredProducts})
  }

  onSubmit(){

  }


  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        <AddItem/>
        {
          this.state.products.map(product =>{
            return(
            <ProductItem
            key ={product.name}
            {...product}
            onDelete={this.onDelete}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
