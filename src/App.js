import React, {Component} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import FullUser from "./components/users/FullUser";
import FullPost from "./components/posts/FullPost";
import {useLocation} from "react-router-dom";
import PostContainer from "./components/posts/PostContainer";
import UserContainer from "./components/users/UserContainer";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        const location = useLocation();
        return <Children {...props} match={match} location={location}/>

    }
}


class App extends Component {
    render() {


        return (


            <div>
                <div>
                    <Link to={"/users"}>Users</Link>
                </div>

                <div>
                    <Link to={"/posts"}>Posts</Link>
                </div>


                <div>
                    <Routes>
                        <Route path="/users/" element={<UserContainer/>}>
                            <Route index element={<Users/>}/>
                            <Route path="*" element={<Users/>}/>
                            <Route path=":id" element={<FullUser/>}/>
                        </Route>
                        <Route path="/posts/" element={<PostContainer/>}>
                            <Route index element={<Posts/>}/>
                            <Route path="*" element={<Posts/>}/>
                            <Route path=":id" element={<FullPost/>}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default withRouter(App);