import React from 'react';
import Button from "@mui/material/Button";
import styled from "@mui/material/styles";

function CustomBtn({children,text,event,...props}) {
  return (
    <Button
        onClick={event}
      id="save-btn"
      variant="contained"
      component="span"
      sx={{
        margin: "10px",
        backgroundColor: "#aab",
        width: "100px;",
        borderRadius: "20px",

      }}
        {...props}
    >
        {text}
    </Button>
  );
}

export default CustomBtn;
