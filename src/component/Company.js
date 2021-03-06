import React from 'react';

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            company: ""
        };

        this.handleChangeCompany = this.handleChangeCompany.bind(this);
    }

    handleChangeCompany(event) {
        var company = event.target.value;
        this.props.onSelectCompany(company);
    }

    loadURL(){
        if(process.env.REACT_APP_CONTAINER_ENABLED == 'true'){
            return process.env.REACT_APP_DOMAIN_COMPANY;
        } else {
            return process.env.REACT_APP_DOMAIN_GENERAL;
        } 
    }

    componentDidMount() {
        var URL = this.loadURL();

        fetch(URL + "companies")
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
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <select className="custom-select" id="CompanySelect" onChange={this.handleChangeCompany}>
                        <option defaultValue>Select an Option</option>
                        {items.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
            );
        }
    }

}
export default Company;