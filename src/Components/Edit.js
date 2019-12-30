import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Edit extends Component {
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

    editProduct = () => {
        let id = +this.props.match.params.product_id
        let updatedProduct = {
            product_name: this.state.product_name,
            product_img: this.state.product_img,
            product_price: this.state.product_price
        }
       Axios.put(`/api/products/${id}`, updatedProduct).then(response => console.log(response))
    }

    render() {
        console.log(this.props.match.params)
        return (
            <div>
                <h1>Edit Component</h1>
                <input placeholder="product name" name="product_name" onChange={(e) => this.handleInputChange(e)}/>
                <input placeholder="product price" name="product_price" onChange={(e) => this.handleInputChange(e)}/>
                <input placeholder="product img" name="product_img" onChange={(e) => this.handleInputChange(e)}/>
                <Link to="/"><button onClick={this.editProduct}>Edit Product</button></Link>
            </div>
        )
    }
}
