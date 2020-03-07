import React from 'react';
import PackageType from './PackageType';

class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            packageType: "",
            company: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.name,
                        packageType: event.target.packageType,
                        company: event.target.company });
    }

    handleSubmit(event) {
        var casa = JSON.stringify({
            name: this.state.name,
            packageType: this.state.packageType,
            company: 1,
        }); 

        fetch('http://localhost:8080/product', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                packageType: this.state.packageType,
                company: 1,
            }),
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <br />

                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="type product name" aria-label="name" 
                        aria-describedby="basic-addon1" defaultValue={this.state.name} name="name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="packageTypeSelect">Package Type</label>
                        </div>
                        <PackageType />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Company</span>
                        </div>
                        <input type="text" className="form-control" placeholder="select company" aria-label="company" 
                        aria-describedby="basic-addon1" defaultValue={this.state.company} name="company" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" value={this.state}
                        onChange={this.handleChange}>Add Product</button>
                </form>
                <br />

            </div>
        );

    }
}
export default ProductAdd;