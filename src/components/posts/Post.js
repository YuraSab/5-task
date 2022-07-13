import React, {Component} from 'react';
import {Link, useParams} from "react-router-dom";


export function withRouter(Children){
    return(props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class Post extends Component {
    render() {

        let {item, match: {url}} = this.props;
        console.log(this.props);

        return (
            <div>
                {item.id}. {item.title} - <Link to={`${item.id}`}>Details</Link>
            </div>
        );
    }
}

export default withRouter(Post);