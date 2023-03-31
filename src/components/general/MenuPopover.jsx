import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ResponsiveContainerHOC from "@components/layout/ResponsiveContainerHOC";
import { Stack } from "@mui/material";

import StackRow from "@components/layout/StackRow";
import HeaderLinks from "./HeaderLinks";

function MenuList({ contentComp, anchorEl, open, handleClose, menuIdx }) {

    return (
        <Popover
            id={`menu-data-${menuIdx}`}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            sx={{ maxWidth: "1200px" }}
        >
            <StackRow height="300px">
                {contentComp}
                <img src={"/img/menu-img.png"} alt="Menu image" />
            </StackRow>
        </Popover>
    );
}

export default ResponsiveContainerHOC(MenuList);
