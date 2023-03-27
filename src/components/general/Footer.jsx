import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

import NttLogo from "../icon/NttLogo";

import nttMotto from "@assets/motto-logo.svg";
import StackRow from "../layout/StackRow";
import EmailSearchBar from "./SearchBar2";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    const { breakpoints } = useTheme();

    const StyledContainer = styled(Stack)({
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "#0059BC",
        height: "258px",
        [breakpoints.only("mobile")]: {
            // margin: "48px 16px 16px",
        },
        [breakpoints.up("tablet")]: {
            height: "400px",
            // margin: "48px 32px 32px",
        },
        [breakpoints.up("desktop")]: {
            // margin: "48px 120px 64px",
        },
        "& .MuiTypography-h1": {
            fontWeight: 500,
            fontSize: "min(2em, calc(1em + 0.8vw))",
        },
        "& .MuiButton-contained": {
            padding: "4px 8px",
        },
    });
    return (
        <StyledContainer>
            <Stack justifyContent={"space-between"} alignSelf={"stretch"}>
                <Stack rowGap={"7.5px"}>
                    <NttLogo fillColor={"#ffffff"} />
                    <img
                        height="10"
                        width="136.2px"
                        src={nttMotto}
                        alt="Ntt Motto"
                    />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur. Auctor tempor
                        pretium aliquam neque.
                    </Typography>
                </Stack>
                <EmailSearchBar />
            </Stack>
            <FooterLinks />
        </StyledContainer>
    );
};

export default Footer;
