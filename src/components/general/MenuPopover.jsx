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
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            sx={{  borderRadius: '1px' }}
        >
            <StackRow sx={{ background: '#F4F5F6', p: '30px 48px', columnGap: '98px' }}>
                {contentComp} 
                <img src={"/img/menu-img.png"} alt="Menu image" />
            </StackRow>
        </Popover>
    );
}

export default ResponsiveContainerHOC(MenuList);
