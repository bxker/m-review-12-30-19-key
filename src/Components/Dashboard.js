import React, { Component } from 'react'
import Axios from 'axios'
import Product from './Product'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        Axios.get('/api/products').then(response => {
            this.setState({products: response.data})
        })
    }

    deleteProduct = (product_id) => {
        Axios.delete(`/api/products/${product_id}`).then(response => {
            this.setState({products: response.data})
        })
    }
    
    render() {
        const productsMapped = this.state.products.map((product) => {
            return (
                <div key={product.product_id} className="streams">
                    <Product 
                        product_id = {product.product_id}
                        product_name={product.product_name}
                        product_img={product.product_img}
                        product_price={product.product_price}
                        deleteProduct = {this.deleteProduct}
                    />
                </div>
            )
        })
        return (
            <div>
                <h1>Dashboard Component</h1>
                {productsMapped}
            </div>
        )
    }
}
