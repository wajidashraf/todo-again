import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { searchQuery } from "../Brain/Actions";
import ".././App.css";

export const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchQuery(e, e.target.value));
  };

  return (
    <div className=" search_wrap">
      <div className="search">
        <TextField
          variant="outlined"
          color="primary"
          label="Search Here"
          size="small"
          type="text"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
