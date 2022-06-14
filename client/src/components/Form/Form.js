import React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles.js";

const Form = () => {
    const classes = useStyles();

    const handleSubmit = () => {};

    return (
        <Paper classeName={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">Create a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="creator"
                    fullWidth
                    value={postData.creator}
                    onChange={}
                />
            </form>
        </Paper>
    );
};

export default Form;
