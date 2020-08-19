import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*  Header */}
     
      <Router>
        <Switch>
          <Route path="/chat/:person">
          <Header backButton="/chat"/>
            <ChatScreen/>
          </Route>
          <Route path="/chat">
          <Header backButton="/"/>
            <Chats/>
          </Route>
          <Route path="/">
          <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Tinder cards */}
        {/* footer buttons */}

        {/* Chats screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
