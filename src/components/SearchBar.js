import React, { Component } from 'react'

export default class SearchBar extends Component {


    handleChange = event => {
        this.props.setSearch(event.target.value)
        }
    

    handleCheckBox = event => {
        this.props.setCheckBox(event.target.checked)
        }


    render() {

        return (
            <div>
            <label htmlFor="search">Search Products:</label>
                <input
                type="text"
                name="search"
                value={this.props.search}
                onChange={this.handleChange}
                />
            <label htmlFor="inStock">Only show products in stock</label>
            <input
            type ="checkbox"
            name="stocked"
            checked={this.props.stocked}
            onChange={this.handleCheckBox}
            />
            </div>
        )
    }
}
