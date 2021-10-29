import React from 'react';
import Button from "@mui/material/Button";
import styled from "@mui/material/styles";

function IconButton(props) {
    return (
        <Button
        onClick={props.event}
        variant="text"
        sx={{ color: "black" }}
      >
        {props.text}
      </Button>
    );
  }
  
  export default IconButton;