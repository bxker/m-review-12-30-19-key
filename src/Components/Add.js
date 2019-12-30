import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class Add extends Component {
    constructor(){
        super()
        this.state ={
            product_name: '',
            product_price: '',
            product_img: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addProduct = () => {
        let newProduct = {
            product_name: this.state.product_name,
            product_price: this.state.product_price,
            product_img: this.state.product_img
        }
        Axios.post('/api/products', newProduct).then((response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                <h1>Add Component</h1>
                <input placeholder="product name" name="product_name" onChange={(e) => this.handleInputChange(e)}/>
                <input placeholder="product price" name="product_price" onChange={(e) => this.handleInputChange(e)}/>
                <input placeholder="product img" name="product_img" onChange={(e) => this.handleInputChange(e)}/>
                <Link to="/"><button onClick={this.addProduct}>Add Product</button></Link>
            </div>
        )
    }
}
