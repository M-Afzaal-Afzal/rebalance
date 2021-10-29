import React from 'react';
import Button from "@mui/material/Button";

function Btn(props) {
    return (
        <Button
            onClick={props.event}
            variant="contained"
            component="span"
            sx={{
              backgroundColor: "#090C3E",
              fontFamily: "Inter",
              color: "#FFFFFF",
              border: "1.5px solid #090C3E",
              // borderRadius: "20px",
              marginBottom: "10px",
              width: "300px",
              borderRadius: "20px",
              height: "48px",
              textAlign: "center",
              textTransform: "capitalize",
              lineHeight: "43px",
              fontSize: "26px",
            }}
          >
            {props.text}
          </Button>
    )
}

export default Btn;
