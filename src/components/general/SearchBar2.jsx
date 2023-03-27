import { Box, InputBase, MenuItem, Paper, Select } from "@mui/material";
import React from "react";

function SearchBar() {
    return (
        <Paper
            component="form"
            className="search-bar"
            sx={{
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                height: 38,
                border: "none",
                borderRadius: "0",
                "& > *": {
                    height: 38,
                },
                "& .signup-button": {
                    fontSize: 16,
                    color: 'white',
                },
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Email"
                inputProps={{ "aria-label": "signup email" }}
            />
            <Box
                className={"signup-button"}
                sx={{
                    backgroundColor: "#00254F",
                    borderRadius: "0",
                    paddingLeft: '30px',
                    paddingRight: '16px',
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                }}
            >Sign Up
            </Box>
        </Paper>
    );
}

export default SearchBar;
