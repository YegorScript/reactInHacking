import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Set/Set";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter className="window">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/music" component={() => <Music />} />
          <Route path="/news" component={() => <News />} />
          <Route path="/setting" component={() => <Setting />} />
          <Route path="/users" component={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
