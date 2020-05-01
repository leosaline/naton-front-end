import React from 'react';
import ErrorAlert from './ErrorAlert';

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
    }

    componentDidUpdate(prevProps) {
        // Uso típico, (não esqueça de comparar as props):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }

    componentWillUnmount() {
        this.setState({
            isLoaded: false,
            items: null,
            products: null
        });
    }

    loadURL(){
        if(process.env.REACT_APP_CONTAINER_ENABLED == 'true'){
            return process.env.REACT_APP_DOMAIN_PURCHASE;
        } else {
            return process.env.REACT_APP_DOMAIN_GENERAL;
        } 
    }

    handleOnClick = (e) => {
        e.preventDefault();
        var URL = this.loadURL();
        
        if (e.target.value != '') {
            fetch(URL + "product/" + e.target.value)
                .then((response) => response.json())
                .then(json => {
                    this.setState({ items: json });
                });
        }

    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <ErrorAlert message={error.message} />
        } else {
            return (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="buttoncode">Add Product</button>
                        </div>
                        <input type="text" className="form-control" onClick={this.handleOnClick} placeholder="Type Product code" aria-label="Product Code" aria-describedby="buttoncode" />
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
                                {items.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.packageType}</td>
                                        <td>{item.companyName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary">Confirm Purchase</button>
                </div>
            );
        }

    }
}

export default PurchaseSelectProduct;