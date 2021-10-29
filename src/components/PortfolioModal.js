import React from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "./IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Button1 from "@mui/material/Button";

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

const PortfolioModal = ({
                            isAddPortfolioModalOpen,
                            handleOpenBrowserPortfolio,
                            handleClose,
                            handleOpenUploadPortfolio,
                            CloseModal1OpenScreen
                        }) => {
    return (
        <div>
            <Modal
                open={isAddPortfolioModalOpen}
                onClose={() => {
                    handleClose();
                }}
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
                        <h3>Add your portfolio</h3>
                        <IconButton event={CloseModal1OpenScreen} text={<CloseIcon/>}/>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{my: 2}}>
                        Select one of the option listed below
                    </Typography>
                    <box className="buttons">
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{justifyContent: "center"}}
                        >
                            <Button1
                                onClick={handleOpenUploadPortfolio}
                                variant="contained"
                                component="span"
                                sx={{
                                    backgroundColor: "#129FFD",
                                    color: "white",
                                    width: "250px;",
                                    borderRadius: "20px",
                                    height: "48px",
                                }}
                            >
                                Upload portfolio
                            </Button1>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{justifyContent: "center", mt: 2}}
                        >
                            <Button1
                                onClick={handleOpenBrowserPortfolio}
                                variant="contained"
                                component="span"
                                sx={{
                                    backgroundColor: "#129FFD",
                                    width: "250px;",
                                    borderRadius: "20px",
                                    height: "48px",
                                }}
                            >
                                Browse portfolio
                            </Button1>
                        </Stack>
                    </box>
                </Box>
            </Modal>
        </div>
    );
};

export default PortfolioModal;