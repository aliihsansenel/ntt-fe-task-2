import React from "react";
import Header from "../components/general/Header";

import MenuList from "../components/general/MenuList";
import Carousel from "../components/general/Carousel";
import StackRow from "../components/layout/StackRow";

function MainPage() {
    return (
        <>
            <Header />
            <StackRow>
                <MenuList />
            </StackRow>
            {/* <StackRow>
                <Carousel />
            </StackRow> */}
        </>
    );
}

export default MainPage;
