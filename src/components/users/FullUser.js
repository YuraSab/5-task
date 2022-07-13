import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import UserService from "../../services/userService";

class FullUser extends Component {
    // console.log(this.props.match.params.id);
    state = {fullUser: null, loading: true};

    userService = new UserService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let fullUser = await this.userService.getUserById(id);
        this.setState({fullUser: fullUser});
    }

    render() {

        let {fullUser} = this.state;

        return (
            <div>
                {
                    fullUser && <h3>
                        {fullUser.name} - {fullUser.email}
                    </h3>
                }
            </div>
        );
    }
}

export default withRouter(FullUser);