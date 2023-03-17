import { Stack } from "@mui/system";
import React from "react";

function StackRow({ children }) {
    return (
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
            {children}
        </Stack>
    );
}

export default StackRow;
