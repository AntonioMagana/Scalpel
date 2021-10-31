import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({
    palette: {
        background: {
            primary: '#3f51b5',
        },
    },
});

export const TopNav = ( {homeClick, bbClick, amazonClick, walmartClick, howClick, aboutClick} ) => {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            <Stack spacing={2} direction="row">
                                <Button variant="contained"  onClick={homeClick}>Home</Button>
                                <Button variant="contained"  onClick={homeClick}>Best Buy</Button>
                                <Button variant="contained"  onClick={homeClick}>Amazon</Button>
                                <Button variant="contained"  onClick={homeClick}>Walmart</Button>
                                <Button variant="contained"  onClick={homeClick}>How To?</Button>
                                <Button variant="contained"  onClick={homeClick}>About Us</Button>
                            </Stack>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}

export default TopNav