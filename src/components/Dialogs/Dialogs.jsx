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

let dialogs = [
  { id: 1, name: "Егор" },
  { id: 2, name: "Ксения" },
  { id: 3, name: "Дмитрий" },
  { id: 4, name: "Тимур" },
  { id: 5, name: "Эрик" },
];
let dialogsElement = dialogs.map((p) => <Dialog name={p.name} id={p.id} />);

let massages = [
  { id: 1, massage: "hello" },
  { id: 2, massage: "Hello" },
  { id: 3, massage: "Yo" },
  { id: 4, massage: "Hacker?" },
  { id: 5, massage: "Hi,Hacker" },
];
let massagesElement = massages.map((m) => <Massage massage={m.massage} />);

const Dialogs = () => {
  return (
    <div className={s.dialogsAll}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.massages}>{massagesElement}</div>
    </div>
  );
};

export default Dialogs;
