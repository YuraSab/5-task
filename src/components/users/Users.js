import React, {Component} from 'react';
import UserService from "../../services/userService";
import User from "./User";
import {Outlet} from "react-router-dom";

class Users extends Component {

    state = {users: []};

    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.getUsers();
        this.setState({users: users})
    }


    render() {

        let {users} = this.state;

        console.log(this.props);

        return (
            <div>
                {
                    users.map(value => {
                        return (
                            <User
                                item={value}
                                key={value.id}
                            />
                        )
                    })
                }
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        );
    }
}

export default Users;