import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./firebase";

const App = (user) => {
  return (
    <BrowserRouter>
      <Routes {...user} />
    </BrowserRouter>
  );
};

firebase.auth().onAuthStateChanged((user) => {
  // console.log(user);
  ReactDOM.render(
    // <React.StrictMode>
    <App user={user} />,
    // </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
