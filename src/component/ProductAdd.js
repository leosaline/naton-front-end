import React from 'react';
import PackageType from './PackageType';
import Company from './Company';

class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            packageType: "",
            company: ""
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePackageType = this.handleChangePackageType.bind(this);
        this.handleChangeCompany = this.handleChangeCompany.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangePackageType(event) {
        this.setState({ packageType: event });
    }

    handleChangeCompany(event) {
        this.setState({ company: event });
    }

    loadURL() {
        if (process.env.REACT_APP_CONTAINER_ENABLED == 'true') {
            return process.env.REACT_APP_DOMAIN_PRODUCT;
        } else {
            return process.env.REACT_APP_DOMAIN_GENERAL;
        }
    }

    handleSubmit(event) {
        var URL = this.loadURL();

        fetch(URL + "product", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                packageType: this.state.packageType,
                company: this.state.company,
            }),
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <form name="addProductForm" onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">name</span>
                        </div>
                        <input type="text" className="form-control" placeholder="type product name" aria-label="name"
                            aria-describedby="basic-addon1" defaultValue={this.state.name} name="name" onChange={this.handleChangeName} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="packageTypeSelect">Package Type</label>
                        </div>
                        <PackageType onSelectPackageType={this.handleChangePackageType} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="companyTypeSelect">Company</label>
                        </div>
                        <Company onSelectCompany={this.handleChangeCompany} />
                    </div>
                    <button type="submit" className="btn btn-primary" value={this.state}
                        onSubmit={this.handleSubmit}>Add Product</button>
                </form>
                <br />
            </div>
        );

    }
}
export default ProductAdd;