import React from 'react';
import PurchaseSelectProduct from './PurchaseSelectProduct';

class PurchasePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div><br />
            <PurchaseSelectProduct></PurchaseSelectProduct>
        </div>
        )
    }
}

export default PurchasePage;