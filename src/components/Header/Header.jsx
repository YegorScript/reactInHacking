import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <span className={s.text}>InHacking</span>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/Login"}>login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
