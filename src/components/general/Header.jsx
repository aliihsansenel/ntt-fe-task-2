import React from "react";

import { Box } from "@mui/material";
import nttLogo from "../../assets/ntt-logo.svg";
import burgerIcon from "../../assets/burger-menu-icon.svg";
import SearchBar from "./SearchBar";
import StackRow from "../layout/StackRow";

function Header() {
    return (
        <Box component="header">
            <StackRow
                sx={{
                    flexWrap: "wrap",
                    "& .line-break": {
                        width: "100%",
                    },
                }}
            >
                <StackRow
                    sx={{
                        flexGrow: 1,
                        justifyContent: "space-between",
                    }}
                >
                    <img height="24" src={nttLogo} alt="Ntt logo" />
                    <img height="24" src={burgerIcon} alt="Burger Menu Icon" />
                </StackRow>
                <div className="line-break" />
                <SearchBar />
            </StackRow>
        </Box>
    );
}

export default Header;
