import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    align: 'right',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const _top_nav = ({homeClick, bbClick, amazonClick, walmartClick, howClick, aboutClick} ) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Stack spacing={2} direction="row">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Scalpel
                        </Typography>
                            <Button variant="contained" className='navbtn' onClick={homeClick}>
                                Home
                            </Button>
                            <Button variant="contained" className='navbtn' onClick={amazonClick}>
                                Amazon
                            </Button>
                            <Button variant="contained" className='navbtn' onClick={bbClick}>
                                Best Buy
                            </Button>
                            <Button variant="contained" className='navbtn' onClick={walmartClick}>
                                Walmart
                            </Button>
                            <Button variant="contained" className='navbtn' onClick={howClick}>
                                How To?
                            </Button>
                            <Button variant="contained" className='navbtn' onClick={aboutClick}>
                                About Us
                            </Button>
                    </Stack>
                    {/*
                        <Search >
                            <SearchIconWrapper>

                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    */}

                </Toolbar>
            </AppBar>
        </Box>
    )
}
/* OLD NAV BAR
<div className='topnav'>
            <Stack spacing={2} direction="row">
                <Button variant="text" className='navbtn' onClick={homeClick}>
                    Home
                </Button>
                <Button variant="contained" className='navbtn' onClick={amazonClick}>
                    Amazon
                </Button>
                <Button variant="contained" className='navbtn' onClick={bbClick}>
                    Best Buy
                </Button>
                <Button variant="contained" className='navbtn' onClick={walmartClick}>
                    Walmart
                </Button>
                <Button variant="text" className='navbtn' onClick={howClick}>
                    How To?
                </Button>
                <Button variant="text" className='navbtn' onClick={aboutClick}>
                    About Us
                </Button>
            </Stack>
        </div>

 */
export default _top_nav


