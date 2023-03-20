import { InputBase, MenuItem, Paper, Select } from "@mui/material";
import React from "react";
import SearchIcon from "./SearchIcon";

function SearchBar() {
    const [category, setCategory] = React.useState(0);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <Paper
            component="form"
            className="search-bar"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: 40,
                maxWidth: '735px',
                border: '1px solid #89919A',
                borderRadius: '4px',
                '& > *': {
                    height: 40,
                },
                '& .search-icon': {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                }
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search website" }}
            />
            <Select
                className="category-select"
                value={category}
                onChange={handleChange}
                renderValue={(value) => (value ? value : "Categories")}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <SearchIcon />
        </Paper>
    );
}

export default SearchBar;