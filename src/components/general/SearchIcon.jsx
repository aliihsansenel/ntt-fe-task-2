import { Box } from "@mui/material";
import React from "react";

import searchIcon from "../../assets/search-icon.svg";

function SearchIcon() {
    return (
        <Box
            className="search-icon"
            sx={{
                backgroundColor: "#0059BC",
                borderRadius: "4px",
                width: 110,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img height="24" src={searchIcon} alt="Search icon" />
        </Box>
    );
}

export default SearchIcon;
