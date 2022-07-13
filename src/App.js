import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";


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
                <Switch>
                  <Route path={"/users"} render={() => {
                    return(<Users/>)
                  }}/>
                  <Route path={"/posts"} render={() => {
                    return(<Posts/>)
                  }}/>
                </Switch>
              </div>
            </div>
        );
    }
}

export default App;