import React, {useState} from "react";
// import "./app.css";
import Button from "./Button";
import Button1 from "@mui/material/Button";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TableFourth from "./PortfolioTable";
import CustomBtn from "./CustomBtn";
import IconButton from "./IconButton";
// import "./IntitialPortfolio.css";
import Link from "next/link";
import RebalanceModal from "./RebalanceModal";
import ExploreModal from "./ExploreModal";
import {useGlobalContext} from "../context/GlobalContext";
// import DetailsTable from "./TableFourth";
import {Divider} from "@mui/material";
import {Line} from 'react-chartjs-2';
import PortfolioModal from "./PortfolioModal";
// import BrowsePortfolio from "./BrowsePortfolio";
import BrowsePortfolioModal from "./BrowsePortfolioModal";

// Data for the charts and options
const data = {
    labels: ['6/17/2021', '7/27/2021', '8/28/2021', '9/29/2021', '10/30/2021', '11/31/2021', '8/28/2021', '9/29/2021', '10/30/2021', '11/31/2021'],
    datasets: [
        {
            label: 'Financial Performance',
            data: [12, 19, 3, 5, 2, 3, 12, 55, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    // bgColor: "background.paper",
    background: '#fff',
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};
const Input = styled("input")({
    display: "none",
});

function createData(id, name, calories, fat, carbs) {
    return {id, name, calories, fat, carbs};
}

const rows = [
    createData(1, "Frozen yoghurt", 159, 6.0, false),
    createData(2, "Ice cream sandwich", 237, 9.0, false),
    createData(3, "Eclair", 262, 16.0, false),
    createData(4, "Cupcake", 305, 3.7, false),
    createData(5, "Gingerbread", 356, 16.0, true),
    createData(6, "Gingerbread", 356, 16.0, true),
    createData(7, "Gingerbread", 356, 16.0, true),
    createData(8, "Gingerbread", 356, 16.0, false),
    createData(9, "Gingerbread", 356, 16.0, true),
];

function DemicreateData(id, calories, fat, carbs, protein) {
    return {id, calories, fat, carbs, protein};
}

const kpiValueUnitOfMeasureCreator = (kpi, val, unitOfMeasure) => {
    return {
        kpi,
        val,
        unitOfMeasure,
    }
};

// const Demirows = [
//     DemicreateData(1, 159, 6.0, 24, 4.0),
//     DemicreateData(2, 237, 9.0, 37, 4.3),
//     DemicreateData(3, 262, 16.0, 24, 6.0),
//     DemicreateData(4, 305, 3.7, 67, 4.3),
//     DemicreateData(5, 356, 16.0, 49, 3.9),
// ];

const dummyKpiValUnitOfMeasureData = [
    kpiValueUnitOfMeasureCreator(1, 3, 4),
    kpiValueUnitOfMeasureCreator(1, 3, 4),
    kpiValueUnitOfMeasureCreator(1, 3, 4),
    kpiValueUnitOfMeasureCreator(1, 3, 4),
    kpiValueUnitOfMeasureCreator(1, 3, 4),
    kpiValueUnitOfMeasureCreator(1, 3, 4),
]

function Main() {

    const [uploadedFile, setUploadedFile] = useState(null);

    const handleOpen = () => {
        toggleIsAddPortfolioModalOpen()
    };
    const handleClose = () => {
        toggleIsAddPortfolioModalOpen();
        setbackScreen(true);
    };
    const [uploadPortfolioModalOpen, setUploadPortfolioModalOpen] = React.useState(false);
    const handleOpenUploadPortfolio = () => setUploadPortfolioModalOpen(true);
    const handleCloseUploadPortfolio = () => setUploadPortfolioModalOpen(false);
    const [browsePortfolioModalOpen, setBrowsePortfolioModalOpen] = React.useState(false);
    const handleOpenBrowserPortfolio = () => setBrowsePortfolioModalOpen(true);
    const handleCloseBrowserPortfolio = () => setBrowsePortfolioModalOpen(false);
    const [backScreen, setbackScreen] = React.useState(true);
    const handleSCreen = () => setbackScreen(true);
    const CloseModal1OpenScreen = () => {
        handleClose();
        handleSCreen();
    }
    const CloseModal2OpenScreen = () => {
        handleClose();
        handleSCreen();
        handleCloseBrowserPortfolio();
    }
    const CloseModal3OpenScreen = () => {
        handleClose();
        handleCloseUploadPortfolio();
        handleSCreen();
    }
    const [RebalanceModalOpen, setRebalanceModalOpen] = React.useState(false);
    const RebalanceOpen = () => setRebalanceModalOpen(true);
    const RebalanceClose = () => setRebalanceModalOpen(false);
    const [exploreModalOpen, setexploreModalOpen] = React.useState(false);
    const ExploreOpen = () => setexploreModalOpen(true);
    const ExploreClose = () => setexploreModalOpen(false);

    const [esgAndFcPerformanceShown, setEsgAndFcPerformanceShown] = useState(false);

    const esgAndFcPerformanceToggler = () => {
        setEsgAndFcPerformanceShown(!esgAndFcPerformanceShown);
    }

    const [evaluatedEsgPerformanceShown, setEvaluatedEsgPerformanceShown] = useState(false);

    const evaluatedEsgPerformanceToggler = (val) => {
        setEvaluatedEsgPerformanceShown(val);
    }

    const evaluateClickHandler = () => {
        console.log('evaluate button clicked')
    }

    const savePortfolioClickHandler = () => {
        if (uploadedFile) {
            CloseModal3OpenScreen();
            esgAndFcPerformanceToggler();
            console.log('save click handler')
        } else {
            console.log('please upload the file')
        }
    }

    const saveRebalanceClickHandler = () => {
    //    todo - add the logic there rebalance
        RebalanceClose();
        if (esgAndFcPerformanceShown) {
            evaluatedEsgPerformanceToggler(true);
        }

    }

    const {
        isAddPortfolioModalOpen,
        toggleIsAddPortfolioModalOpen
    } = useGlobalContext();

    return (
        <div>
            {/* 1st Content row on main*/}
            <Box component="div" sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                placeItems: 'center',
            }}>
                <div className="table1">
                    <Typography sx={{
                        marginLeft: '3rem',
                        fontSize: '25px',
                        my: '1rem',
                        width: '100%',
                        fontWeight: 'bold',
                    }} variant={'body1'}>S&P 500</Typography>
                    <form action="">
                        <input type="text" placeholder="Browse securities "/>
                    </form>
                    <div className="frame frame1">
                        <table>
                            <thead>
                            <tr>
                                <th>Ticker</th>
                                <th>Asset Class</th>
                                <th>Weight</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                        <Box component="div" className="add-portfolio">
                            <Button1
                                onClick={() => {
                                    handleOpen();
                                    setbackScreen(false);
                                }}
                                size="large"
                                variant="text"
                                component="span"
                            >
                                <img src="/add.png" alt=""/>
                            </Button1>
                            <span>Add Your Portfolio</span>
                        </Box>
                    </div>
                </div>
                <div className="Main-menu">
                    <Button event={RebalanceOpen} text="Rebalance"/>
                    <Button event={evaluateClickHandler} text="Evaluate"/>
                    <Button event={ExploreOpen} text="Explore"/>
                    <ExploreModal open={exploreModalOpen} close={ExploreClose}/>

                    {
                        esgAndFcPerformanceShown && (
                            <Button1
                                variant="contained"
                                component="span"
                                sx={{
                                    display: "block",
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
                                    mt: 4
                                }}
                            >
                                Download portfolio
                            </Button1>
                        )
                    }

                </div>
                <div className="table1">
                    <Typography sx={{
                        marginLeft: '3rem',
                        fontSize: '25px',
                        my: '1rem',
                        width: '100%',
                        fontWeight: 'bold',
                    }} variant={'body1'}>S&P 500</Typography>
                    <form action="">
                        <input type="text" placeholder="Browse securities "/>
                    </form>
                    <div className="frame frame1">
                        <table>
                            <thead>
                            <tr>
                                <th>Ticker</th>
                                <th>Asset Class</th>
                                <th>Weight</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Box>

            {/*2nd Component row on main */}
            {/*  Second Box*/}

            {/*dummyKpiValUnitOfMeasureData*/}

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: '1fr 1fr 1fr',
                    placeItems: 'center',
                    alignItems: 'baseline',
                    // alignItems: "center",
                    my: 5,
                    // mx: '4rem',
                    // justifyContent: "space-evenly",
                }}
            >

                {
                    esgAndFcPerformanceShown && (
                        <>
                            <Box sx={{
                                maxWidth: '370px',
                                m: 5,
                            }} className="ESG"
                            >
                                <h2>ESG performance</h2>
                                {/*<DetailsTable rows={Demirows} />*/}
                                <Box sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                    maxWidth: '30rem',
                                    py: '1rem',
                                    // placeItems: 'center',
                                }}>
                                    <Box sx={{
                                        fontWeight: 'bold',
                                    }}>
                                        KPI
                                    </Box>

                                    <Box sx={{
                                        fontWeight: 'bold',
                                    }}>
                                        Value
                                    </Box>

                                    <Box sx={{
                                        fontWeight: 'bold',
                                    }}>
                                        Unit of measure
                                    </Box>

                                </Box>

                                {
                                    dummyKpiValUnitOfMeasureData.map(({kpi, val, unitOfMeasure}) => {
                                        return (
                                            <Box>

                                                <Box sx={{
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 1fr 1fr',
                                                    maxWidth: '30rem',
                                                    // placeItems: 'center',
                                                }}>
                                                    <Box sx={{
                                                        py: '8px',
                                                    }}>
                                                        {kpi}
                                                    </Box>

                                                    <Box sx={{
                                                        py: '8px',
                                                    }}>
                                                        {val}
                                                    </Box>

                                                    <Box sx={{
                                                        py: '8px',
                                                    }}>
                                                        {unitOfMeasure}
                                                    </Box>

                                                </Box>
                                                <Divider variant={'fullWidth'} dir={'horizontal'}/>
                                            </Box>
                                        )
                                    })
                                }


                            </Box>
                            <Box className="graph" sx={{my: 5, width: '100%', maxWidth: '500px'}}>
                                <h2>Financial performance</h2>
                                {/*todo --- Here we've to add the chart */}
                                <Line style={{
                                    // width: '100%',
                                    // maxWidth: '30rem',
                                    // height: 'auto',
                                }} data={data} options={options}/>

                                {/*<img src="/graph.jpg" alt=""/>*/}
                            </Box>

                        </>
                    )
                }

                {
                    evaluatedEsgPerformanceShown && (
                        <Box sx={{
                            maxWidth: '370px',
                            m: 5,
                        }} className="ESG"
                        >
                            <h2>ESG performance</h2>
                            {/*<DetailsTable rows={Demirows} />*/}
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                maxWidth: '30rem',
                                py: '1rem',
                                // placeItems: 'center',
                            }}>
                                <Box sx={{
                                    fontWeight: 'bold',
                                }}>
                                    KPI
                                </Box>

                                <Box sx={{
                                    fontWeight: 'bold',
                                }}>
                                    Value
                                </Box>

                                <Box sx={{
                                    fontWeight: 'bold',
                                }}>
                                    Unit of measure
                                </Box>

                            </Box>

                            {
                                dummyKpiValUnitOfMeasureData.map(({kpi, val, unitOfMeasure}) => {
                                    return (
                                        <Box>

                                            <Box sx={{
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr 1fr',
                                                maxWidth: '30rem',
                                                // placeItems: 'center',
                                            }}>
                                                <Box sx={{
                                                    py: '8px',
                                                }}>
                                                    {kpi}
                                                </Box>

                                                <Box sx={{
                                                    py: '8px',
                                                }}>
                                                    {val}
                                                </Box>

                                                <Box sx={{
                                                    py: '8px',
                                                }}>
                                                    {unitOfMeasure}
                                                </Box>

                                            </Box>
                                            <Divider variant={'fullWidth'} dir={'horizontal'}/>
                                        </Box>
                                    )
                                })
                            }


                        </Box>
                    )
                }


            </Box>

            {/* Modal for upload portfolio */}
           <PortfolioModal
               handleOpenUploadPortfolio={handleOpenUploadPortfolio}
               CloseModal1OpenScreen={CloseModal1OpenScreen}
               handleClose={handleClose}
               isAddPortfolioModalOpen={isAddPortfolioModalOpen}
               handleOpenBrowserPortfolio={handleOpenBrowserPortfolio}
           />


           <BrowsePortfolioModal
               browsePortfolioModalOpen={browsePortfolioModalOpen}
               handleCloseUploadPortfolio={handleCloseUploadPortfolio}
               handleCloseBrowserPortfolio={handleCloseBrowserPortfolio}
               rows={rows}
               CloseModal2OpenScreen={CloseModal2OpenScreen}

           />

            {/* modal for upload portfolio */}
            <Modal
                open={uploadPortfolioModalOpen}
                onClose={handleCloseUploadPortfolio}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{marginBottom: "20px"}}
                    >
                        <h3>Upload your file(.csv, .xslx)</h3>
                        <IconButton event={CloseModal3OpenScreen} text={<CloseIcon/>}/>
                    </Typography>
                    <form action="">
                        <Box className="choose-file" sx={{my: 3}}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <label htmlFor="contained-button-file">
                                    <Input id="contained-button-file" onChange={(e) => {
                                        console.log(e.target.files);
                                        setUploadedFile(e.target.files);
                                    }} type="file"/>

                                    <Stack direction={'row'} spacing={1} alignItems={'center'}>

                                        <Button1
                                            variant="contained"
                                            component="span"
                                            sx={{
                                                margin: "10px",
                                                backgroundColor: "#129FFD",
                                                width: "150px;",
                                                height: "48px",
                                                borderRadius: "15px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Choose file
                                        </Button1>
                                        <Box>
                                            {uploadedFile && uploadedFile[0].name}
                                        </Box>
                                    </Stack>
                                </label>
                            </Stack>
                        </Box>
                        <hr/>
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                mt: 2,
                            }}
                        >
                            <CustomBtn event={CloseModal3OpenScreen} text="Cancle"/>
                            <CustomBtn event={savePortfolioClickHandler} text="Save"/>
                        </Box>
                    </form>
                </Box>

            </Modal>
            <RebalanceModal saveRebalanceClickHandler={saveRebalanceClickHandler} open={RebalanceModalOpen} close={RebalanceClose}/>
        </div>
    );
}

export default Main;
