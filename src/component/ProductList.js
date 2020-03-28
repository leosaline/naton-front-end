import React from 'react';
import ProductAdd from './ProductAdd';
import ErrorAlert from './ErrorAlert';
import LoadingAlert from './LoadingAlert';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            company: []
        };
    }

    fetchCompanyName(id) {
        fetch("http://localhost:9003/company/1")
            .then(res => res.json())
            .then(
                (result) => {
                    return result.name;
                },
                (error) => {
                    alert(error);
                }
            )
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <ErrorAlert message={error.message} />
        } else if (!isLoaded) {
            return <LoadingAlert message="Loading content..." />
        } else {
            return (
                <div>
                    <ProductAdd />
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">package type</th>
                                <th scope="col">company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.packageType}</td>
                                    <td>{this.fetchCompanyName(item.company)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}
export default ProductList;