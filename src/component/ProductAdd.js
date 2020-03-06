import React from 'react';

class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    render() {
        return (
            <div>

                

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">name</span>
                    </div>
                    <input type="text" className="form-control" placeholder="type product name" aria-label="name" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Package Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Package Type</span>
                    </div>
                    <input type="text" className="form-control" placeholder="select package type" aria-label="packageType" aria-describedby="basic-addon1" />
                </div>
            </div>
        );
    }
}
export default ProductAdd;