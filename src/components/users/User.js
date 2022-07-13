import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {

        let {item, match: {url}} = this.props;

        console.log(this.props);

        return (
            <div>
                {item.id}. {item.name} - <Link to={`${url}/${item.id}`}>Details</Link>
            </div>
        );
    }
}

export default withRouter(User);