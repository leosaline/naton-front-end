import React from 'react';
import ProductList from './ProductList';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div><ProductList></ProductList></div>)
    }
}

export default ProductPage;