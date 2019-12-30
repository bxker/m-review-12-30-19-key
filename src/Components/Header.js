import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header Component</h1>
                <Link to="/">Dashboard</Link>
                <Link to="/add">Add Product</Link>
            </div>
        )
    }
}
