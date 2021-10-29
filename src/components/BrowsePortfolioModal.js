import React, {useEffect, useState} from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "./IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PortfolioTable from "./PortfolioTable";
import CustomBtn from "./CustomBtn";

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

const BrowsePortfolioModal = ({
                                  rows,
                                  CloseModal2OpenScreen,
                                  handleCloseBrowserPortfolio,
                                  browsePortfolioModalOpen,
                                  handleCloseUploadPortfolio,
                              }) => {

    const [addedPortfolios, setAddedPortfolios] = useState([]);
    const [addedPortfoliosIds,setAddedPortfoliosIds] = useState([]);

    useEffect(() => {
        console.log(addedPortfolios, 'Portfolios added')
    }, [addedPortfolios])


    const brosePortfolioSaveClickHandler = () => {
        CloseModal2OpenScreen();
        console.log('browse portfolio save click handler');
        console.log(addedPortfolios,addedPortfoliosIds,'--------------------------')
    }

    const addPortfolioClickHandler = (portfolio) => {
        console.log('add portfolio click handler');

        let alreadyExists = false;

        for (const addedPortfolio of addedPortfolios) {
            if (addedPortfolio.id === portfolio.id) {
                alreadyExists = true;
            }
        }

        if (!alreadyExists) {
            setAddedPortfolios([...addedPortfolios, portfolio]);
            setAddedPortfoliosIds([...addedPortfoliosIds, portfolio.id]);
        } else {
            console.log('Already Added ---------- ')
        }
    }

    const removePortfolioClickHandler = (portfolio) => {
        console.log('remove portfolio click handler');
        const newPortfolios = addedPortfolios.filter((p) => p.id !== portfolio.id);
        const newPortfolioIds = addedPortfoliosIds.filter((id) => id !== portfolio.id);
        setAddedPortfolios(newPortfolios);
        setAddedPortfoliosIds(newPortfolioIds);

    }

    return (
        <Modal
            open={browsePortfolioModalOpen}
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
                    <h3>Select your model portfolio</h3>
                    <IconButton event={handleCloseBrowserPortfolio} text={<CloseIcon/>}/>
                </Typography>

                {/* Table is there */}
                <PortfolioTable
                    addPortfolioClickHandler={addPortfolioClickHandler}
                    rows={rows}
                    removePortfolioClickHandler={removePortfolioClickHandler}
                    addedPortfolios={addedPortfolios}
                    addedPortfoliosIds={addedPortfoliosIds}
                />
                {/*<hr />*/}
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        mt: 2,
                    }}
                >
                    <CustomBtn event={CloseModal2OpenScreen} text="Cancle"/>
                    <CustomBtn onClick={brosePortfolioSaveClickHandler} text="Save"/>
                </Box>

            </Box>
        </Modal>
    );
};

export default BrowsePortfolioModal;