import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import JoinChat from './JoinChatPage/JoinChatPage'
import ChatPage from './ChatPage/ChatPage'

import {createBrowserHistory as createHistory} from 'history';
const history = createHistory();

const App = () => {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={JoinChat}/>
            <Route exact path="/chat/:username" component={ChatPage} />
            <Redirect to="/"/>
          </Switch>
        </Router>
    );
};

export default App;