import React from 'react'

function useDrawer() {
    const [drawerState, setDrawerState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        console.log('open', open);
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        
        setDrawerState(open);
    };

    return [ drawerState, toggleDrawer ];
}

export default useDrawer