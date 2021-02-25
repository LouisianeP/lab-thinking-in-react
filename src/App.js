import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from './data.json'
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <div className="App">
    <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
    </div>
  );
}

export default App;
