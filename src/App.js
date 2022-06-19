import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import ActiveTask from "./UI/ActiveTask";
import CompletedTask from "./UI/CompletedTask";
import Header from "./UI/Header";
import Navbar from "./UI/Navbar";

// _____IMPORTS____________

function App() {
  const done_Task = useSelector((state) => state);
  console.log(done_Task);
  return (
    <React.Fragment>
      <Header />
      <Navbar />

      <Route exact path="/">
        <ActiveTask />
      </Route>

      <Route exact path="/completed">
        <CompletedTask />
      </Route>
    </React.Fragment>
  );
}
export default App;
