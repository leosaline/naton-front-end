import React from 'react';

class LoadingAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br /><br />
                <div className="alert alert-primary" role="alert">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default LoadingAlert;