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

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePackageType = this.handleChangePackageType.bind(this);
        this.handleChangeCompany = this.handleChangeCompany.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangePackageType(event) {
        this.setState({ packageType: event.target.value });
    }

    handleChangeCompany(event) {
        this.setState({ company: event.target.value });
    }

    handleChange(event) {
        //    this.setState({ name: event.target.value,
        //                    packageType: event.target.value,
        //                    company: event.target.value });
    }

    handleSubmit(event) {
        fetch('http://localhost:8080/product', {
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
                        <PackageType formulario={this} onChange={this.handleChangePackageType} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Company</span>
                        </div>
                        <input type="text" className="form-control" placeholder="select company" aria-label="company"
                            aria-describedby="basic-addon1" defaultValue={this.state.company} name="company" onChange={this.handleChangeCompany} />
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