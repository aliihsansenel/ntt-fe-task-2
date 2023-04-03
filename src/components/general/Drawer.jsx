import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";

export default function TemporaryDrawer({ open, toggleDrawer }) {
    const list = () => (
        <Box
            sx={{ width: "100vw" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[1, 2, 3, 4].map(
                    (val, index) => (
                        <ListItemButton>
                            <ListItem key={val} disablePadding>
                                <Typography fontWeight={500} fontSize={24}>Category {val}</Typography>
                            </ListItem>
                        </ListItemButton>
                    )
                )}
            </List>
            <Divider />
        </Box>
    );

    return (
        <>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </>
    );
}
