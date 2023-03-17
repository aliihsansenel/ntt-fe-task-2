import { Box } from "@mui/material";
import nttLogo from "./assets/ntt-logo.svg";
import SearchBar from "./components/general/SearchBar";
import StackRow from "./components/layout/StackRow";

function App() {
    return (
        <Box component="header">
            <StackRow>
                <img height="24" src={nttLogo} alt="Ntt logo" />
                <SearchBar />
            </StackRow>
        </Box>
    );
}

export default App;
