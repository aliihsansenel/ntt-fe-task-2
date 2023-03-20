import React from "react";
import Header from "../components/general/Header";

import Container from "@mui/material/Container";

import MenuList from "../components/general/MenuList";
import Carousel from "../components/general/Carousel";
import StackRow from "../components/layout/StackRow";

import { mainPageMenuData } from "../data";

function MainPage() {
    return (
        <>
            <Header />
            {/* <Container sx={{ justifyContent: 'center' }}>
                <MenuList menuData={mainPageMenuData}/>
            </Container> */}
            {/* <StackRow>
                <Carousel />
            </StackRow> */}
            
        </>
    );
}

export default MainPage;
