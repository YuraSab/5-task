import React, {Component} from 'react';
import {Link, Route, Routes, useParams} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import FullUser from "./components/users/FullUser";
import FullPost from "./components/posts/FullPost";
import {useLocation} from "react-router-dom";

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
                        <Route path={"/users"} element={<Users/>}>
                            <Route path={`/users/:id`}
                                   // render={(props) => {
                                   //     let {match: {params: {id}}} = props;
                                   //
                                   //     return (<FullUser key={id}/>)
                                   // }}
                                element={<FullUser/>}
                            />
                        </Route>
                        <Route path={"/posts"} element={<Posts/>}>
                            <Route path={`/posts/:id`} element={<FullPost key={this.props.match.params.id}/>}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default withRouter(App);