import { Stack } from "@mui/system";
import { styled } from "@mui/system";

const ModifiedStackRow = styled(Stack)({
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
});

function StackRow({ children, ...rest }) {
    return (
        <ModifiedStackRow className="stack-row" {...rest}>
            {children}
        </ModifiedStackRow>
    );
}

export default StackRow;
