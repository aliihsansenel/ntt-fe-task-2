import React from "react";
import { Box, Stack, useTheme } from "@mui/material";

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
                paddingBottom: "25px",
                [theme.breakpoints.up("desktop")]: {
                    paddingBottom: "15px",
                },
            }}
        >
            <StackRow
                sx={{
                    flexWrap: "wrap",
                    columnGap: "20px",
                    width: "100%",
                    justifyContent: "space-between",
                    "& .line-break": {
                        width: "100%",
                        [theme.breakpoints.up("tablet")]: {
                            display: "none",
                            "& + .s2": {
                                maxWidth: "70%",
                            },
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
                        }
                    },
                    "& .search-icon": {
                        [theme.breakpoints.up("tablet")]: {
                            display: 'none',
                        },
                    },
                    "& .s2 > .search-icon": {
                        [theme.breakpoints.up("tablet")]: {
                            display: 'flex',
                        },
                        [theme.breakpoints.down("tablet")]: {
                            display: "none",
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
                <Stack
                    flexGrow={1}
                    columnGap={"15px"}
                    className="s2"
                    flexDirection={"row-reverse"}
                >
                    <SearchButton />
                    <SearchBar />
                </Stack>
            </StackRow>
        </Box>
    );
}

export default ResponsiveContainerHOC(Header);
