import * as React from 'react';
import {AppBar, Box, CssBaseline, IconButton, Toolbar, Typography} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import styled from "@emotion/styled";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

const Header = () => {

    const drawerWidth = 240;
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            '& .MuiDrawer-paper': {
                position: 'relative',
                whiteSpace: 'nowrap',
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9),
                    },
                }),
            },
        }),
    );

    const mdTheme = createTheme();

    function DashboardContent() {
        const [open, setOpen] = React.useState(true);
        const toggleDrawer = () => {
            setOpen(!open);
        };
    }


    return (
        <div className='header'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
            <ThemeProvider theme={mdTheme}>
                <Typography
                    component="h1"
                    variant="h6"
                    color="black"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    >
                    Dashboard
                </Typography>
            </ThemeProvider>
            </Box>
        </div>
    )
}

export default Header
