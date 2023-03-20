import { Stack } from "@mui/system";
import React from "react";

function StackRow({ children, ...rest}) {
    return (
        <Stack direction="row" justifyContent="flex-start" alignItems="center" {...rest}>
            {children}
        </Stack>
    );
}

export default StackRow;
