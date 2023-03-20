import { InputBase, MenuItem, Paper, Select } from "@mui/material";
import React from "react";

function SearchBar() {
    const [category, setCategory] = React.useState(0);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Website"
                inputProps={{ "aria-label": "search website" }}
            />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChange}
                renderValue={(value) => (value ? value : "Categories")}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </Paper>
    );
}

export default SearchBar;