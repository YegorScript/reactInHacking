import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
