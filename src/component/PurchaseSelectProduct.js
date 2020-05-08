import React from 'react';
import ErrorAlert from './ErrorAlert';

class PurchaseSelectProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            products: [],
            items: [],
            id: null,
            quantity: 1
        };

        this.handleOnChangeIdSeek = this.handleOnChangeIdSeek.bind(this);
        this.handleOnChangeQnt = this.handleOnChangeQnt.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleSubmit(event) {
        var URL = this.loadURL();
        var temp = [];
        var i;

        for (i = 0; i < this.state.items.length; i++) {
            var item = new Object();
            item.idProduct = this.state.items[i].id;
            item.quantity  = this.state.items[i].quantity;
            temp.push(item);
        }

        fetch(URL + "purchase", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: null,
                datePurchase: null,
                user: null,
                itemsPurchase: temp,
            }),
        });

        event.preventDefault();
    }

    handleOnChangeIdSeek(event) {
        this.setState({ id: event.target.value });
    }

    handleOnChangeQnt(event) {
        this.setState({ quantity: event.target.value });
    }

    componentDidUpdate(prevProps) {
        // Uso típico, (não esqueça de comparar as props):
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }
    }

    componentWillUnmount() {
        this.setState({
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
            if (this.state.items[i].id == id) {
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
                            json.quantity = this.state.quantity;
                            this.setState({ items: [...this.state.items, json] });
                        }
                    });
            } else {
                var i;
                var temp = this.state.items;

                for (i = 0; i < this.state.items.length; i++) {
                    if (this.state.items[i].id == this.state.id) {
                        temp[i].quantity = temp[i].quantity++;
                        this.setState({items: temp});
                        break;
                    }
                }
            }
        }
    }

    render() {
        const { error, items } = this.state;
        if (error) {
            return <ErrorAlert message={error.message} />
        } else {
            return (
                <div>
                    <form name="addPurchaseForm" onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button" onClick={this.handleOnClick} id="buttoncode">Add Product</button>
                            </div>
                            <input type="text" onChange={this.handleOnChangeIdSeek} className="form-control" placeholder="Type Product code" aria-label="Product Code" aria-describedby="buttoncode" />
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Quantity</span>
                            </div>
                            <input type="text" onChange={this.handleOnChangeQnt} className="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon1" defaultValue='1' />
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
                                            <td>{item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <button type="submit" value={this.state} onSubmit={this.handleSubmit}
                            className="btn btn-primary">Confirm Purchase</button>
                    </form>
                </div>
            );
        }

    }
}

export default PurchaseSelectProduct;