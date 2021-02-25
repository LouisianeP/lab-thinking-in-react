import React, { Component } from 'react'

export default class SearchBar extends Component {


    handleChange = event => {
        this.props.setSearch(event.target.value)
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
            </div>
        )
    }
}
