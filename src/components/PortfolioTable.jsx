import React, {useEffect, useState} from "react";
// import "./app.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import {styled} from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {RemoveCircleOutline} from "@mui/icons-material";
import {client} from "../utils/client";
import {Box, Input, OutlinedInput} from "@mui/material";
import * as PropTypes from "prop-types";


AddCircleIcon.propTypes = {onClick: PropTypes.func};

function PortfolioTable({
                            rows,
                            addedPortfolios,
                            addedPortfoliosIds,
                            addPortfolioHandler,
                            removePortfolioClickHandler
                        }) {

    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(false);

    useEffect(() => {
        setIsTableDataLoading(true);
        client.get(`/ptf/list`)
            .then(res => {
                console.log(res.data)
                setTableData(Object.entries(res.data));
                setIsTableDataLoading(false);
            })
            .catch(err => {
                setIsTableDataLoading(false);
                console.log(err, `error from axios`);
            })

        // fetch(`${baseUrl}/ptf/list`, {
        //     method: 'POST',
        //     headers: {
        //         // 'Access-Control-Allow-Origin': '*',
        //         // 'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers': '*',
        //         'Access-Control-Allow-Methods': '*',
        //         'accept': 'application/json',
        //         Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzQ5Nzg1MTQsIm5iZiI6MTYzNDk3ODUxNCwianRpIjoiZjAyNmJmNmQtYjg1My00ZTk5LTg3NGUtZDU2MDBhZTg1NWZkIiwiZXhwIjoxNjM1MDY0OTE0LCJpZGVudGl0eSI6InJlYmFsYW5jZUBkZW1vLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.a4hsgiG04ADFY_k9UT_KE9pfcUqiglOkc7du1XL_598`,
        //     },
        //     // mode: 'no-cors',
        // }).then(res => res.json())
        //     .then(data => {
        //         console.log(data, 'This is the data');
        //     }).catch(err => {
        //     console.log(err, 'This is the error while fetching the data')
        // })
    }, [])


    return (
        <TableContainer sx={{
            height: '30rem',
            overflowY: 'scroll',
        }} component={Paper}>
            <Table aria-label="simple table">
                <TableHead sx={{position: 'static', top: 0}}>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Ticker</TableCell>
                        <TableCell align="center">Asset class</TableCell>
                        <TableCell align="center">Weight</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>


                    {
                        tableData && !isTableDataLoading ? (
                            tableData.map(([key, value]) => {
                                return (
                                    <TableRow sx={{"&:last-child td, &:last-child th": {border: 0}}} key={key}>
                                        <TableCell align="center">{value}</TableCell>
                                        <TableCell align="center">0</TableCell>
                                        <TableCell align="center">0</TableCell>
                                        <TableCell align="center">
                                            {
                                                addedPortfoliosIds.includes(value) ? (
                                                    <Box display={'flex'} sx={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <OutlinedInput
                                                            type={'number'}
                                                            onChange={(event) => {
                                                                const weight = event.target.value;
                                                                addPortfolioHandler({name: value,weight})

                                                            }}/>
                                                        <IconButton
                                                            color="primary"
                                                            size={'sm'}
                                                            onClick={() => {
                                                                removePortfolioClickHandler(value);
                                                            }}
                                                            // aria-label="upload picture"
                                                            // component="span"
                                                        >
                                                            <RemoveCircleOutline fontSize={'medium'} />
                                                        </IconButton>

                                                    </Box>
                                                ) : (
                                                    <>
                                                        <IconButton
                                                            color="primary"
                                                            aria-label="upload picture"
                                                            size={'sm'}
                                                            onClick={() => {
                                                                addPortfolioHandler({name: value,weight: 0})
                                                            }}
                                                            // component="span"
                                                        >
                                                            <AddCircleIcon fontSize={'medium'} />
                                                        </IconButton>
                                                    </>
                                                )

                                                // ?
                                                // (
                                                //     <IconButton
                                                //         color="primary"
                                                //         aria-label="upload picture"
                                                //         component="span"
                                                //     >
                                                //     <AddCircleIcon onClick={() => {
                                                //       addPortfolioClickHandler(value)
                                                //     }}/>
                                                //     </IconButton>
                                                // ) : (
                                                //     <IconButton
                                                //         color="primary"
                                                //         aria-label="upload picture"
                                                //         component="span"
                                                //     >
                                                //     <RemoveCircleOutline onClick={() => {
                                                //       removePortfolioClickHandler(value);
                                                //     }}/>
                                                //     </IconButton>
                                                // )
                                            }
                                        </TableCell>
                                    </TableRow>
                                )
                            })

                        ) : (
                            <Box>
                                Loading
                            </Box>
                        )
                    }


                    {/*{*/}
                    {/*    addedPortfoliosIds.includes(row.id) ? (*/}
                    {/*        <IconButton*/}
                    {/*            color="primary"*/}
                    {/*            aria-label="upload picture"*/}
                    {/*            component="span"*/}
                    {/*        >*/}
                    {/*            <RemoveCircleOutline onClick={() => {*/}
                    {/*                removePortfolioClickHandler(row);*/}
                    {/*            }}/>*/}
                    {/*        </IconButton>*/}
                    {/*    ) : (*/}
                    {/*        <IconButton*/}
                    {/*            color="primary"*/}
                    {/*            aria-label="upload picture"*/}
                    {/*            component="span"*/}
                    {/*        >*/}
                    {/*            <AddCircleIcon onClick={() => {*/}
                    {/*                addPortfolioClickHandler(row)*/}
                    {/*            }}/>*/}
                    {/*        </IconButton>*/}
                    {/*    )*/}

                    {/*        // ?*/}
                    {/*        // (*/}
                    {/*        //     <IconButton*/}
                    {/*        //         color="primary"*/}
                    {/*        //         aria-label="upload picture"*/}
                    {/*        //         component="span"*/}
                    {/*        //     >*/}
                    {/*        //     <AddCircleIcon onClick={() => {*/}
                    {/*        //       addPortfolioClickHandler(row)*/}
                    {/*        //     }}/>*/}
                    {/*        //     </IconButton>*/}
                    {/*        // ) : (*/}
                    {/*        //     <IconButton*/}
                    {/*        //         color="primary"*/}
                    {/*        //         aria-label="upload picture"*/}
                    {/*        //         component="span"*/}
                    {/*        //     >*/}
                    {/*        //     <RemoveCircleOutline onClick={() => {*/}
                    {/*        //       removePortfolioClickHandler(row);*/}
                    {/*        //     }}/>*/}
                    {/*        //     </IconButton>*/}
                    {/*        // )*/}
                    {/*    // }*/}


                    {/*</TableCell>*/}


                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PortfolioTable;
