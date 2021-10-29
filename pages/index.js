import * as React from 'react';
import SideMenu from "../src/components/SideMenu";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Box from "@mui/material/Box";

function HomePage() {
  return (
      <div>
        <Header/>
          <Box sx={{
              display: 'grid',
              gridTemplateColumns: "300px 1fr",
          }}>
        <SideMenu/>
        <Main />
          </Box>
      </div>
  )
}

export default HomePage
