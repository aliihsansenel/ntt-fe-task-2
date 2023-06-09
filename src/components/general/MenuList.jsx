import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ResponsiveContainerHOC from "@components/layout/ResponsiveContainerHOC";
import { Stack } from "@mui/material";

import StackRow from "@components/layout/StackRow";
import HeaderLinks from "./HeaderLinks";
import MenuPopover from "./MenuPopover";

function MenuList({ menuData }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuIdx, setMenuIdx] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuIdx(Number(event.currentTarget.id.split("menu-data-").at(-1)));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Stack
            columnGap="35px"
            rowGap="0"
            flexDirection={"row"}
            justifyContent="space-between"
            m={"25px 0 12px"}
            sx={{ flexWrap: "wrap" }}
            className={"menu-list"}
        >
            {Object.keys(menuData).map((key, idx) => (
                <Button
                    key={key}
                    id={`menu-data-${idx}`}
                    aria-describedby={`menu-data-${idx}`}
                    variant="text"
                    onClick={handleClick}
                    sx={{ p: "0px 0px 10px", flex: "1 0 auto" }}
                >
                    <Typography
                        sx={{ color: "#6A6D70", fontSize: 16, fontWeight: 500 }}
                    >
                        {key}
                    </Typography>
                </Button>
            ))}
            <MenuPopover
                menuIdx={menuIdx}
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                contentComp={<HeaderLinks />}
            />
        </Stack>
    );
}

export default ResponsiveContainerHOC(MenuList);
