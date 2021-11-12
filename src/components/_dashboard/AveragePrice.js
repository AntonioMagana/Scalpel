import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import Box from "@mui/material/Box";

function preventDefault(event) {
    event.preventDefault();
}

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
    },
});

export default function AveragePrice() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Title>Average Smite</Title>
                <Typography component="p" variant="h4">$120.00</Typography>
                <Typography
                    color="text.secondary" sx={{ color:'#009688', flex: 1, display: 'inline', fontWeight:'medium' }}>
                    -6.90%
                    <Typography
                        sx={{ color: 'text.secondary', display: 'inline', fontSize: 12, margin: 1 }}>
                        vs. last smite
                    </Typography>
                </Typography>
                <Link color="primary" href="#" onClick={preventDefault}>Add to Smite</Link>
            </ThemeProvider>
        </React.Fragment>
    );
}

