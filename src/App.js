import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Set/Set";

const App = (props) => {
  return (
    <BrowserRouter className="window">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={props.dialogs} message={props.message} />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile posts={props.posts} />}
          />
          <Route path="/music" component={() => <Music />} />
          <Route path="/news" component={() => <News />} />
          <Route path="/setting" component={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
