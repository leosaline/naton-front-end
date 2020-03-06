import React from 'react';

class Menu extends React.Component {

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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="http://localhost:3000">Naton</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000">Purchase</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000">Report</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Naton Cosmetics Products.
                            </span>
                    </div>
                </nav>
            </div>
        );
    }

}
export default Menu;