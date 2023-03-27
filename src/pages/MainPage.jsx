import React from "react";
import Container from "@mui/material/Container";

import Header from "@components/general/Header";
import MenuList from "@components/general/MenuList";
import Carousel from "@components/general/Carousel";
import StackRow from "@components/layout/StackRow";
import ProductCardArea from "@components/general/ProductCardArea";

import { mainPageMenuData } from "../data";

function MainPage() {
    return (
        <>
            <Header />
            {/* <Container sx={{ justifyContent: 'center' }}>
                <MenuList menuData={mainPageMenuData}/>
            </Container> */}
            <StackRow>
                <Carousel name={"carousel"} length={4} />
            </StackRow>
            <ProductCardArea />
        </>
    );
}

export default MainPage;
