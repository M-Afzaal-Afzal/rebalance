import React from "react";
// import "./app.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from 'next/link';
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideMenu() {
  const [box, showbox] = React.useState(false);
  return (
    <Box className="box" sx={{
        background: '#090c3e',
        minHeight: '100vh',
    }}>
      <Box sx={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          height: '100%',
      }}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }} className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>(re)BALANCE</span>
        </Box>

        {/*  Box for layout*/}
          <Box/>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 999,
          }}
        >
          <Box
            onMouseLeave={()=>showbox(false)}
            component="span"
            sx={box ?{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "12px",
              backgroundColor: "#eee",
              color: "black",
              px: 2,
              marginLeft: "100px",
            }:{display:"none"}}
          >
            <Button
              variant="text"
              sx={{
                color: "Black",
                width: "100%",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              Change password
            </Button>
            <Button
              variant="text"
              sx={{
                color: "Black",
                width: "100%",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              Log out
              <LogoutIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
          <div className="user">
            <Button onClick={()=>showbox(true)} >UD</Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
