import React from 'react';

class PackageType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            packageType: ""
        };

        this.handleChangePackageType = this.handleChangePackageType.bind(this);
    }

    handleChangePackageType(event) {
        var packType = event.target.value;
        this.props.onSelectPackageType(packType);
    }

    componentDidMount() {
        fetch("http://localhost:9001/packagetypes")
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
                    <select className="custom-select" id="packageTypeSelect" onChange={this.handleChangePackageType}>
                        <option defaultValue>Select an Option</option>
                        {items.map(item => (
                            <option value={item} key={item.id}>{item}</option>
                        ))}
                    </select>
                </div>
            );
        }
    }

}
export default PackageType;