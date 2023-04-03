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
import { Divider, Stack, useTheme } from "@mui/material";
import { styled } from "@mui/system";


function MainPage() {
    const [ drawerState, toggleDrawer ] = useDrawer();
    const { breakpoints } = useTheme();

    const Container = styled(Stack)({
        "& .menu-list": {
            [breakpoints.only("mobile")]: {
                display: 'none'
            }
        }
    });

    return (
        <>
            <Container justifyContent={"space-between"}>
                <div>
                    <Header toggleDrawer={toggleDrawer} />
                    <Divider
                        background="#89919A"
                        sx={{ borderColor: "black", height: "1px" }}
                    />
                    <MenuList
                        menuData={mainPageMenuData}
                        sx={{
                            [breakpoints.only("mobile")]: {
                                display: "none",
                            }
                        }}
                    />
                    <StackRow>
                        <Carousel name={"carousel"} length={4} />
                    </StackRow>
                    <ProductCardArea />
                </div>
                <Footer />
            </Container>
            <Drawer open={drawerState} toggleDrawer={toggleDrawer} />
        </>
    );
}

export default MainPage;
