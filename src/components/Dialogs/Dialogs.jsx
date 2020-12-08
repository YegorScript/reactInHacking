import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Massage = (props) => {
  return <div className={s.mas}>{props.massage}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogsAll}>
      <div className={s.dialogsItem}>
        <Dialog name="Егор" id="1" />
        <Dialog name="Тимур" id="2" />
        <Dialog name="Дмитрий" id="3" />
        <Dialog name="Ксения" id="4" />
        <Dialog name="Эрик" id="5" />
      </div>
      <div className={s.massages}>
        <Massage massage="hello" />
        <Massage massage="hello" />
        <Massage massage="hello" />
        <Massage massage="Hi, Hacker" />
      </div>
    </div>
  );
};

export default Dialogs;
