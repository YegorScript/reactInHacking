import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <span className={s.text}>InHacking</span>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/Login"}>login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
