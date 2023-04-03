import { InputBase, MenuItem, Paper, Select } from "@mui/material";
import React from "react";
import SearchButton from "./SearchButton";

function SearchBar() {
    const [category, setCategory] = React.useState("Categories");

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
                maxWidth: "735px",
                border: "1px solid #89919A",
                borderRadius: "4px",
                "& > *": {
                    height: 40,
                },
                "& .category-select, .search-icon": {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                },
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search website" }}
            />
            <Select
                sx={{
                    width: 132,
                    backgroundColor:
                        category === "Categories" ? "#F4F5F6" : "white",
                }}
                // TODO borderColor
                className="category-select"
                value={category}
                onChange={handleChange}
                renderValue={(value) => (value ? value : "Categories")}
            >
                <MenuItem value={"Category 1"}>Category 1</MenuItem>
                <MenuItem value={"Category 2"}>Category 2</MenuItem>
                <MenuItem value={"Category 3"}>Category 3</MenuItem>
                <MenuItem value={"Category 3"}>Category 3</MenuItem>
            </Select>
            <SearchButton />
        </Paper>
    );
}

export default SearchBar;
