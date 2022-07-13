import React, {Component} from 'react';
import PostService from "../../services/postService";
import {useParams} from "react-router-dom";

export function withRouter(Children){
    return(props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class FullPost extends Component {

    state = {fullPost: null};

    postService = new PostService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let fullPost = await this.postService.getPostById(id);
        this.setState({fullPost: fullPost});
    }


    render() {

        let {fullPost} = this.state;
        console.log(this.props);

        return (
            <div>
                {
                    fullPost && <h3>
                        {fullPost.body}
                    </h3>
                }
            </div>
        );
    }
}

export default withRouter(FullPost);