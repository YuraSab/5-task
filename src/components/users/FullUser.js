import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import UserService from "../../services/userService";
import {useLocation} from "react-router-dom";


export function withRouter(Children){
    return(props) => {
        const match = {params: useParams()};
        const location = useLocation();
        return <Children {...props} match={match} location={location}/>
    }
}



class FullUser extends Component {



    state = {fullUser: null, loading: true};

    userService = new UserService();

    async componentDidMount() {
        let {match: {params: {id}}, location} = this.props;
        let fullUser = await this.userService.getUserById(id);
        this.setState({fullUser: fullUser});
    }






    render() {

        let {fullUser} = this.state;
        console.log(this.props);

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