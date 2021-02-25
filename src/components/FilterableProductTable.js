import React, { Component } from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
    state= {
        search:''
    }
    setSearch = searchParam => {
        this.setState({
            search: searchParam
        })
    }

    render() {

    const spread = this.props.products
 
    const filteredProducts = spread.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase()))
    
    console.log(filteredProducts)

        return (
            <div>
            <h1>IronStore</h1>
                <SearchBar 
                search={this.state.search}
                setSearch={this.setSearch}
                />
                <ProductTable filteredProducts={filteredProducts}/>
            </div>
        )
    }
}
