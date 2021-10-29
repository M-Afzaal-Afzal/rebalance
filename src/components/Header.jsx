import React from "react";
import {Box} from "@mui/material";
import {useGlobalContext} from "../context/GlobalContext";
// import "./app.css";


function Header() {

    const {toggleIsAddPortfolioModalOpen} = useGlobalContext();

    const reloadHandler = () => {
        location.reload(true);
    }

  return (
    <div className="header">
      <Box onClick={reloadHandler} sx={{
          cursor: 'pointer',
      }} className="btn-new-port">
        <p className="btn-secondary btn-header">
          New Portfolio
        </p>
      </Box>
    </div>
  );
}

export default Header;
