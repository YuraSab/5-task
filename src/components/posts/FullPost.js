import React, {Component} from 'react';
import PostService from "../../services/postService";
import {withRouter} from "react-router-dom";

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