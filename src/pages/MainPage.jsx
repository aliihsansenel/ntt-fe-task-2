import React, { createContext} from "react";
import Container from "@mui/material/Container";

import Header from "@components/general/Header";
import MenuList from "@components/general/MenuList";
import Carousel from "@components/general/Carousel";
import StackRow from "@components/layout/StackRow";
import ProductCardArea from "@components/general/ProductCardArea";
import Drawer from "@components/general/Drawer";
import Footer from "@components/general/Footer";

import useDrawer from "@hooks/useDrawer";

import { mainPageMenuData } from "../data";
import { Divider, Stack } from "@mui/material";


function MainPage() {
    const [ drawerState, toggleDrawer ] = useDrawer();

    return (
        <>
            <Stack justifyContent={"space-between"}>
                <div>
                    <Header toggleDrawer={toggleDrawer} />
                    <Divider
                        background="#89919A"
                        sx={{ borderColor: "black", height: "1px" }}
                    />
                    <MenuList menuData={mainPageMenuData} />
                    <StackRow>
                        <Carousel name={"carousel"} length={4} />
                    </StackRow>
                    <ProductCardArea />
                </div>
                <Footer />
            </Stack>
            <Drawer open={drawerState} toggleDrawer={toggleDrawer} />
        </>
    );
}

export default MainPage;
