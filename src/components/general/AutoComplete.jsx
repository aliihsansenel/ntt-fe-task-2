import { Autocomplete, Box, Popper, TextField } from '@mui/material';
import React from 'react'
import { styled } from "@mui/system";

const StyledPopper = styled(Popper)(({ theme }) => ({
    border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
    boxShadow: `0 8px 24px ${
      theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
    }`,
    borderRadius: 6,
    width: 300,
    zIndex: theme.zIndex.modal,
    fontSize: 14,
    "& .MuiPaper-root": {
        color: "white",
        backgroundColor: "#00254F"
    }
}));

// TODO
function AutoComplete({ options, value, changeHandler }) {
  return (
      <Autocomplete
          sx={{
              width: 132,
              height: 40,
          }}
          className="category-select"
          disablePortal
          options={options}
          value={value}
          getOptionLabel={o => o.value}
          onChange={(event, newValue) => {
            changeHandler(newValue);
          }}
          renderInput={(params) => (
              <TextField {...params} sx={{ height: "40px" }} label="" />
          )}
          PopperComponent={StyledPopper}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Box
                sx={{ backgroundColor: selected ? "#0059BC" : "#00254F"}}
                
              >{option.value}</Box>
            </li>
          )}
      />
  );
}

export default AutoComplete