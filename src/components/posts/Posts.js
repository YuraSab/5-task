import React, {Component} from 'react';
import PostService from "../../services/postService";
import Post from "./Post";
import {Outlet} from "react-router-dom";

class Posts extends Component {

    state = {posts: []};

    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getPosts();
        this.setState({posts: posts});
    }

    render() {

        let {posts} = this.state;


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
                    <Outlet></Outlet>
                </div>
            </div>
        );
    }
}

export default Posts;