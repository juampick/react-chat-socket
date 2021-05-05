import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import JoinChat from './JoinChatPage/JoinChatPage'
import ChatPage from './ChatPage/ChatPage'

const App = () => {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={JoinChat}/>
            <Route exact path="/chat/:username" component={ChatPage} />
            <Redirect to="/"/>
          </Switch>
        </Router>
    );
};

export default App;