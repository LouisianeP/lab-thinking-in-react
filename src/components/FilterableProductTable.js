import React, { Component } from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
    state= {
        search:'',
        stocked:''
    }
    setSearch = searchParam => {
        this.setState({
            search: searchParam
        })
    }

    setCheckBox = searchParam => {
        console.log(searchParam)
        this.setState({
            stocked: searchParam
        })
    }

    render() {

    const spread = this.props.products
 
    const filteredProducts = spread.filter(product => {
        return product.name.toLowerCase().includes(this.state.search.toLowerCase())
        && ((product.stocked === this.state.stocked) || !this.state.stocked)
    })
    
    console.log(filteredProducts)

        return (
            <div>
            <h1>IronStore</h1>
                <SearchBar 
                search={this.state.search}
                setSearch={this.setSearch}
                stocked={this.state.stocked}
                setCheckBox={this.setCheckBox}
                />
                <ProductTable filteredProducts={filteredProducts}/>
            </div>
        )
    }
}
