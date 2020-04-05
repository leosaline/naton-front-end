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

    handleOnChange(e) {
        e.preventDefault();
        fetch("http://localhost:9001/product/" + e.target.value)
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

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="buttoncode">Add Product</button>
                    </div>
                    <input type="text" className="form-control" onChange={this.handleOnChange} placeholder="Type Product code" aria-label="Product Code" aria-describedby="buttoncode" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Quantity</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon1" defaultValue='1' />
                </div>
                <br />
                <div>
                    <table className="table table-hover">
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
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <button type="button" className="btn btn-primary">Confirm Purchase</button>
            </div>
        )
    }
}

export default PurchaseSelectProduct;