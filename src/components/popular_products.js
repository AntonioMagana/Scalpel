import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
import {alpha, createTheme, styled, ThemeProvider} from '@mui/material/styles';
import {Box, Card, Container, Grid, LinearProgress, Typography} from '@mui/material';
import {Fragment, useEffect, useState} from "react";
import {blue} from "@mui/material/colors";
import Button from "@mui/material/Button";

// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error,
    backgroundColor: theme.palette.error
}));
const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.error.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
        theme.palette.error.dark,
        0.24
    )} 100%)`
}));
// ----------------------------------------------------------------------

export default function Popular_products(collectionRef) {
    const [info, setInfo] = useState([]);
    const [isLoading, setLoading] = useState(true);
    var length = 49;

    const theme = createTheme({
        palette: {
            primary: {
                main: "#42a5f5"
            },
            secondary: {
                main: '#11cb5f', // color green in hex.
            },
            error: {
                main: "#f44336"
            }
        },
    });
    // Get all documents in a collection
    var rows = [];
    function createData(title, prices, out_of_stock, image, asin, full_link, ship_info) {
        return {title, prices, out_of_stock, image, asin, full_link, ship_info}
    }

    // Query collection group so it only gets item documents, NOT web-traffic
    useEffect(async () => {
        await collectionRef.where('title', '!=', 'web-traffic').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                rows.push(createData(
                    doc.data().title,
                    doc.data().prices,
                    doc.data().out_of_stock,
                    doc.data().image,
                    doc.data().asin,
                    doc.data().full_link,
                    doc.data().ship_info
                ));
                //console.log(rows);
            })
            setInfo(rows);
            setLoading(false);
        })
    }, []);
    console.log(info[0]);

    // Pre-firebase backup HTML page
    if(isLoading) {
        return <Fragment>
                <LinearProgress />
            </Fragment>
    }

    // Actual HTML page
    return (
        <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3} >
                        <RootStyle>
                            <a href={info[0].full_link}>
                                <img src={info[0].image} alt='pic' width="100" height="auto"/>
                            </a>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                <a href={info[0].full_link}>
                                    { info[0].title.substring(0, length) + "..." }
                                </a>
                            </Typography>
                            <br/>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="error">Not Available</Button>
                            </ThemeProvider>
                        </RootStyle>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} height={180}>
                        <RootStyle>
                            <a href={info[1].full_link}>
                                <img src={info[1].image} alt='pic' width="100" height="auto"/>
                            </a>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                <a href={info[1].full_link}>
                                    { info[1].title.substring(0, length) + "..." }
                                </a>
                            </Typography>
                            <br/>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="error">Not Available</Button>
                            </ThemeProvider>
                        </RootStyle>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} height={180}>
                        <RootStyle>
                            <a href={info[2].full_link}>
                                <img src={info[2].image} alt='pic' width="100" height="auto"/>
                            </a>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                <a href={info[2].full_link}>
                                    { info[2].title.substring(0, length) + "..." }
                                </a>
                            </Typography>
                            <br/>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="secondary">
                                    <a href={info[2].full_link}>
                                        Scalp now
                                    </a>
                                </Button>
                            </ThemeProvider>
                        </RootStyle>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <RootStyle>
                            <a href={info[3].full_link}>
                                <img src={info[3].image} alt='pic' width="100" height="auto"/>
                            </a>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                <a href={info[3].full_link}>
                                    { info[3].title.substring(0, length) + "..." }
                                </a>
                            </Typography>
                            <br/>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="error">Not Available</Button>
                            </ThemeProvider>
                        </RootStyle>
                    </Grid>
                </Grid>
        </div>
    );
}
