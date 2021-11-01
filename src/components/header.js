import * as React from 'react';
import {AppBar, Box, CssBaseline, IconButton, Toolbar, Typography} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";


const Header = () => {
    const mdTheme = createTheme();
    return (
        <div className='header'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <ThemeProvider theme={mdTheme}>
                    <Typography component="h1" variant="h6" color="black" noWrap
                                sx={{ flexGrow: 1, fontSize: 26, fontWeight:"bolder" }}>
                        Scalpel
                    </Typography>
                </ThemeProvider>
            </Box>
        </div>
    )
}

export default Header
