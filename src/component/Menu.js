import React from 'react';
import ProductPage from './ProductPage';
import PurchasePage from './PurchasePage';
import ReportPage from './ReportPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="http://localhost:8080">Naton</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/purchase">Purchase</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/report">Report</Link>
                                </li>
                                <Route path="/produto" component={ProductPage} />
                                <Route path="/compra" component={PurchasePage} />
                            </ul>

                            <span className="navbar-text">
                                Naton Cosmetics Products.
                        </span>
                        </div>
                    </nav>
                </div>
                <div>
                    <Switch>
                        <Route path="/product">
                            <ProductPage />
                        </Route>
                        <Route path="/purchase">
                            <PurchasePage />
                        </Route>
                        <Route path="/report">
                            <ReportPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }

}
export default Menu;