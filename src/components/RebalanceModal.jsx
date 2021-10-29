import React from "react";
import {flexbox} from "@mui/system";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CustomBtn from "./CustomBtn";
import IconButton from "./IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "next/link";
import {Divider, Stack} from "@mui/material";

function RebalanceModal(props) {
    const [age, setAge] = React.useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
    });
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

    const handleCheckbox = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };
    const {gilad, jason, antoine} = state;
    return (
        <Modal
            open={props.open}
            onClose={props.close}
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
                    <h3>Rebalance</h3>
                    <IconButton event={props.close} text={<CloseIcon/>}/>
                </Typography>
                <Box
                    component="form"
                    action=""
                    sx={{
                        my: 1,
                        display: "flex",
                        alignItems: "flex-start",
                        // my: 5,
                        justifyContent: "flex-start",
                        flexDirection: "column",
                    }}
                >
                    <p>
                        Select your focus KPI. This will be the ESG KPI our algorithm will
                        optimize.
                    </p>
                    <Box sx={{width: "200px", my: 3}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                sx={{borderRadius: "15px"}}
                            >
                                <MenuItem sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                }} value={10}>Ten</MenuItem>
                                <MenuItem sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                }} value={20}>Twenty</MenuItem>
                                <MenuItem sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                }} value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <p>Select the rebalancing logic you wish to use.</p>
                    <Box sx={{display: "flex"}}>
                        <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={gilad}
                                            onChange={handleCheckbox}
                                            name="gilad"
                                        />
                                    }
                                    label="Gilad Gray"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={jason}
                                            onChange={handleCheckbox}
                                            name="jason"
                                        />
                                    }
                                    label="Jason Killian"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={antoine}
                                            onChange={handleCheckbox}
                                            name="antoine"
                                        />
                                    }
                                    label="Antoine Llorca"
                                />
                            </FormGroup>
                        </FormControl>
                    </Box>
                    <Stack spacing={1}
                           direction={'row'}
                           sx={{
                               ml: '26px',
                               alignItems: 'center',
                               // "& > :not(style)": { m: 1, width: "25ch" },
                           }}
                    >
                        <Typography sx={{
                            mr: '1rem',
                        }} variant={'body1'}>
                            Max Value
                        </Typography>
                        <TextField
                            id="standard-basic"
                            // label="max value"
                            size={'small'}
                            variant="outlined"
                        />
                    </Stack>

                    <Box sx={{
                        py: '1rem',
                        width: '100%',
                    }}>
                        <Divider sx={{
                            width: '100%',
                            height: '2px',
                        }}/>
                    </Box>

                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            mt: 2,
                            width: "100%",
                        }}
                    >
                        <CustomBtn event={props.close} text="Cancle"/>
                        <CustomBtn type="submit" event={props.saveRebalanceClickHandler} text="Save"/>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default RebalanceModal;
