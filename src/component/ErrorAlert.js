import React from 'react';

class ErrorAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br /><br />
                <div class="alert alert-danger" role="alert">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default ErrorAlert;