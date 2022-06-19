import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "./FromUI";
import { showForm } from "../Brain/Actions";
import "../App.css";
import { Button } from "@material-ui/core";

const Header = () => {
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  //
  const show_Form = (e) => {
    dispatch(showForm(e));
  };

  return (
    <header>
      {!show ? (
        <Button
          className="add_task"
          variant="contained"
          color="secondary"
          onClick={show_Form}
        >
          ADD TASK
        </Button>
      ) : (
        <React.Fragment>
          <Form />
        </React.Fragment>
      )}
    </header>
  );
};

export default Header;
