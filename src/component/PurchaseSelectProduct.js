import React from 'react';

class PurchaseSelectProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: [],
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:9001/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentWillUnmount() {  
        this.setState({
            isLoaded: false,
            items: null
        });
    }

    render() {
        return (
            <div>
                <div class="input-group mb-3">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" id="buttoncode">Add Product</button>
                    </div>
                    <input type="text" class="form-control" placeholder="Type Product code" aria-label="Product Code" aria-describedby="buttoncode" />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Quantity</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon1" defaultValue='1' />
                </div>
                <br />
                <div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Item nº</th>
                                <th scope="col">Name</th>
                                <th scope="col">Company</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <button type="button" class="btn btn-primary">Confirm Purchase</button>
            </div>
        )
    }
}

export default PurchaseSelectProduct;