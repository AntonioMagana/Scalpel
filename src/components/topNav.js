import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const TopNav = ({homeClick, bbClick, amazonClick, walmartClick, howClick, aboutClick} ) => {
    return (
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
    )
}
/* OLD NAV BAR
<div className='topnav'>
    <button className='navbtn' onClick={homeClick}>Home</button>
    <button className='navbtn' onClick={bbClick}>Best Buy</button>
    <button className='navbtn' onClick={amazonClick}>Amazon</button>
    <button className='navbtn' onClick={walmartClick}>Walmart</button>
    <button className='navbtn' onClick={howClick}>How To?</button>
    <button className='navbtn' onClick={aboutClick}>About Us</button>
</div>

 */
export default TopNav


