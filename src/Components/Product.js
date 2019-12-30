import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    constructor(props){
        super()
        this.state={

        }
    }
    render() {
        return (
            <div key={this.props.product_id}>
                <img src={this.props.product_img}></img>
                <h2>{this.props.product_name}</h2>
                <h1>{this.props.product_price}</h1>
                <button onClick={() => this.props.deleteProduct(this.props.product_id)}>Delete Product</button>
                <Link to={`/edit/${this.props.product_id}`}><button>Edit Product</button></Link>
            </div>
        )
    }
}
