import React, {Component} from 'react';
import PostService from "../../services/postService";
import Post from "./Post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "./FullPost";

class Posts extends Component {

    state = {posts: []};

    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getPosts();
        this.setState({posts: posts});
    }

    render() {

        let {posts} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    posts.map(value => {
                        return(
                            <Post
                                item = {value}
                                key = {value.id}
                            />
                        )
                    })
                }
                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return(
                                <FullPost
                                    key = {id}
                                />
                            )
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Posts);