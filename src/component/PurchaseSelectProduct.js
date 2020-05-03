import React from 'react';
import ErrorAlert from './ErrorAlert';

class PurchaseSelectProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: [],
            items: [],
            id: null
        };

        this.handleOnChangeIdSeek = this.handleOnChangeIdSeek.bind(this);
    }

    componentDidMount() {
    }

    handleOnChangeIdSeek(event) {
        this.setState({ id: event.target.value });
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
            products: null,
            id: null
        });
    }

    loadURL() {
        if (process.env.REACT_APP_CONTAINER_ENABLED == 'true') {
            return process.env.REACT_APP_DOMAIN_PURCHASE;
        } else {
            return process.env.REACT_APP_DOMAIN_GENERAL;
        }
    }

    validateExistItem(id) {
        var i;
        for (i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id == id){
                return true;
            }
        }
        return false;
    }

    handleOnClick = (e) => {
        e.preventDefault();
        var URL = this.loadURL();

        if (this.state.id != '') {
            if (!this.validateExistItem(this.state.id)) {
                fetch(URL + "product/" + this.state.id)
                    .then((response) => response.json())
                    .then(json => {
                        if (json.id != null) {
                            this.setState({ items: [...this.state.items, json] });
                        }
                    });
            }
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
                            <button className="btn btn-primary" type="button" onClick={this.handleOnClick} id="buttoncode">Add Product</button>
                        </div>
                        <input type="text" onChange={this.handleOnChangeIdSeek} className="form-control" placeholder="Type Product code" aria-label="Product Code" aria-describedby="buttoncode" />
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