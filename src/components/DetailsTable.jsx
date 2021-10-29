import React, {useEffect} from "react";
// import "./app.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createRows = (row) => {
    return (
      <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{row.calories}</TableCell>
      <TableCell align="center">{row.fat}</TableCell>
      <TableCell align="center">{row.carbs}</TableCell>
    </TableRow>
    )
};

function DetailsTable(props) {


  console.log(props);
  return (
      <div className="frame">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Ticker</TableCell>
                <TableCell align="center">Asset class</TableCell>
                <TableCell align="center">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map(createRows)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}

export default DetailsTable;
