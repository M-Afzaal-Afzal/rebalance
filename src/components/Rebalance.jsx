import React,{useState} from "react";
import DetailsTable from "./DetailsTable";
// import "./IntitialPortfolio.css";
import Box from "@mui/material/Box";
import Button from "./Button";
import Button1 from "@mui/material/Button";
import SideMenu from './SideMenu';
import Header from './Header';
import RebalanceModal from "./RebalanceModal";
import ExploreModal from "./ExploreModal";

function DemicreateData(id, calories, fat, carbs, protein) {
  return { id, calories, fat, carbs, protein };
}

const Demirows = [
  DemicreateData(1, 159, 6.0, 24, 4.0),
  DemicreateData(2, 237, 9.0, 37, 4.3),
  DemicreateData(3, 262, 16.0, 24, 6.0),
  DemicreateData(4, 305, 3.7, 67, 4.3),
  DemicreateData(5, 356, 16.0, 49, 3.9),
];
const rowsRebalanced = [
  DemicreateData(1, "CO2 intensity", "00002", "GHG/€"),
  DemicreateData(2, "Women in workforce", "5178", "N° employees"),
  DemicreateData(3, "CO2 intensity", "00002", "GHG/€"),
  DemicreateData(4, "Sum of weights", "100,00","", ""),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function Rebalance() {
  const [RebalanceModalOpen, setRebalanceModalOpen] = React.useState(false);
  const RebalanceOpen = () => setRebalanceModalOpen(true);
  const RebalanceClose = () => setRebalanceModalOpen(false);
  const [exploreModalOpen, setexploreModalOpen] = React.useState(false);
  const ExploreOpen = () => setexploreModalOpen(true);
  const ExploreClose = () => setexploreModalOpen(false);
  return (<>
    <SideMenu />
    <Header />
    <Box component="div" className="main">
      <div className="content">
        <div className="tablewithhead">
          <h2>S&P 500</h2>
          <div className="table1">
            <form action="">
              <input type="text" placeholder="Browse securities " />
            </form>
            <DetailsTable rows={Demirows} />
          </div>
        </div>
        <div className="Main-menu">
          <Button event={RebalanceOpen} text={"Rebalance"} />
          <Button text={"Evaluate"} />
          <Button event={ExploreOpen} text="Explore" />
          <ExploreModal open={exploreModalOpen} close={ExploreClose} />
          <Button1
            variant="contained"
            component="span"
            sx={{
              display:"block",
              backgroundColor: "#129FFD",
              fontFamily: "Inter",
              color: "#FFFFFF",
              // borderRadius: "20px",
              marginBottom: "10px",
              width: "300px",
              borderRadius: "20px",
              height: "48px",
              textAlign: "center",
              textTransform: "capitalize",
              lineHeight: "35px",
              fontSize: "26px",
              mt:4
            }}
          >Download portfolio
          </Button1>
        </div>
        <Box component="div" className="tablewithhead">
          <h2>S&P 500 _ rebalanced</h2>
          <div className="table1">
            <form action="">
              <input type="text" placeholder="Browse securities " />
            </form>
            <DetailsTable rows={Demirows} />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            my: 5,
            justifyContent: "center",
          }}
        >
          <Box className="ESG" sx={{ mt: 5 }}>
            <h2>ESG performance</h2>
            <DetailsTable rows={Demirows} />
          </Box>
          <Box className="graph" sx={{ mx: 5 }}>
            <h2>Financial performance</h2>
            <img src="/graph.jpg" alt="" />
          </Box>
          <Box className="ESG" sx={{ mt: 5}}>
            <h2>ESG performance</h2>
            <DetailsTable rows={rowsRebalanced} />
          </Box>
        </Box>
      </div>
      <RebalanceModal open={RebalanceModalOpen} close={RebalanceClose} />
    </Box>
  </>);
}

export default Rebalance;
