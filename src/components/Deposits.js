import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>
            <Title>Average Costs</Title>
            <Typography component="p" variant="h4">
                $289.03
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 31 October, 2021
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                   Product Link
                </Link>
            </div>
        </React.Fragment>
    );
}