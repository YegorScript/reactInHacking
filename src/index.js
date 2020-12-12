import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "How are you?", like: 12 },
  { id: 2, message: "It`s my first project", like: 48 },
  { id: 3, message: "OH.My Hacker?", like: 12 },
];
let dialogs = [
  { id: 1, name: "Егор" },
  { id: 2, name: "Ксения" },
  { id: 3, name: "Дмитрий" },
  { id: 4, name: "Тимур" },
  { id: 5, name: "Эрик" },
];

let message = [
  { id: 1, message: "hello" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Hacker?" },
  { id: 5, message: "Hi,Hacker" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} message={message} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
