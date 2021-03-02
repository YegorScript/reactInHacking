import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Setting from "./components/Set/Set";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      <Preloader />;
    }
    return (
      <div className="window">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/music" component={() => <Music />} />
            <Route path="/news" component={() => <News />} />
            <Route path="/setting" component={() => <Setting />} />
            <Route path="/users" component={() => <UsersContainer />} />
            <Route path="/login" component={() => <Login />} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { initialized: state.app.initialized };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
