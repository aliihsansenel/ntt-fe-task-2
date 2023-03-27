import React from "react";
import { Box, useTheme } from "@mui/material";

import nttLogo from "@assets/ntt-logo.svg";
import burgerIcon from "@assets/burger-menu-icon.svg";
import SearchBar from "./SearchBar";
import StackRow from "../layout/StackRow";
import ResponsiveContainerHOC from "../layout/ResponsiveContainerHOC";
import SearchButton from "./SearchButton";

function Header() {
    const theme = useTheme();
    return (
        <Box
            component="header"
            sx={{
                paddingTop: "25px",
                paddingBottom: "25px"
            }}
        >
            <StackRow
                sx={{
                    flexWrap: "wrap",
                    columnGap: "13px",
                    "& .line-break": {
                        width: "100%",
                        [theme.breakpoints.up("tablet")]: {
                            display: "none",
                        },
                    },
                    "& .search-bar": {
                        flexGrow: 1,
                        paddingRight: 0,
                        "& .search-icon": {
                            [theme.breakpoints.up("tablet")]: {
                                display: "none",
                            },
                        },
                        "& .category-select": {
                            [theme.breakpoints.down("tablet")]: {
                                display: "none",
                            },
                        },
                        "&+ .search-icon": {
                            [theme.breakpoints.down("tablet")]: {
                                display: "none",
                            },
                        },
                    },
                    rowGap: "12px",
                }}
            >
                <StackRow
                    sx={{
                        justifyContent: "space-between",
                        [theme.breakpoints.down("tablet")]: {
                            flexGrow: 1,
                        },
                        "& img:last-of-type": {
                            [theme.breakpoints.up("tablet")]: {
                                display: "none",
                            },
                        },
                        [theme.breakpoints.up("tablet")]: {
                            columnGap: "48px",
                        },
                        [theme.breakpoints.up("desktop")]: {
                            columnGap: "25px",
                        },
                    }}
                >
                    <img height="24" src={nttLogo} alt="Ntt Logo" />
                    <img height="24" src={burgerIcon} alt="Burger Menu Icon" />
                </StackRow>
                <div className="line-break" />
                <SearchBar />
                <SearchButton />
            </StackRow>
        </Box>
    );
}

export default ResponsiveContainerHOC(Header);
