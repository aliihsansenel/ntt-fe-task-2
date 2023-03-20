import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function MenuList({ menuData }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuIdx, setMenuIdx] = React.useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuIdx(
            new Number(event.currentTarget.id.split("menu-data-").at(-1))
        );
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const MenuDataMemo = /*React.memo(*/({ menuData }) => {
        return Object.keys(menuData).map((key, idx) => {
            <Button
                key={key}
                id={"menu-data-" + idx}
                aria-describedby={"menu-data-" + idx}
                variant="contained"
                onClick={handleClick}
            >
                {key}
            </Button>;
        });
    }/*)*/;

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <MenuDataMemo menuData={menuData} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <Typography sx={{ p: 2 }}>{menuIdx}</Typography>
            </Popover>
        </div>
    );
}