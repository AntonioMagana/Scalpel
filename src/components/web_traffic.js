import { Icon } from '@iconify/react';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
import { alpha, styled } from '@mui/material/styles';
import {Box, Card, Container, Grid, Typography} from '@mui/material';
import db from "../firebase/firebase";
//import SiteTraffic from "./utils/siteTraffic";
import {useEffect, useState} from "react";
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.error,
    backgroundColor: theme.palette.error
}));

//const nSiteClick = SiteTraffic();
// ----------------------------------------------------------------------

export default function WebTraffic() {
    const [site, setSite] = useState([]);
    const [amazonSite, setAmazonSite] = useState([]);

    useEffect(() => {
        const siteRef = db.firestore().collection("items").doc("web_traffic");
        let nSite = 0;
        let nAmazonSite = 0;
        siteRef.get().then((doc) => {
            // Only increments if doc exists
            if(doc.exists) {
                nSite = doc.data().siteClicked;
                nAmazonSite = doc.data().amazonClicked;

                setSite(nSite);
                setAmazonSite(nAmazonSite);
            }
            else{
                console.log("No such document found!");
            }
        })
    }, []);

    return (
        <div>
            <Grid container
                  spacing={8}
                  justifyContent={"center"}
                  alignItems="center"
            >
                <Grid item xs>
                    <RootStyle>
                            <Icon width={50} icon="tabler:device-desktop-analytics" />
                        <Typography variant="h3">{ site }</Typography>
                        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                            User Visits
                        </Typography>
                    </RootStyle>
                </Grid>

                <Grid item xs>
                    <RootStyle>
                            <Icon width={50} icon="ant-design:amazon-circle-filled"/>
                        <Typography variant="h3">{ amazonSite }</Typography>
                        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                            Amazon Visits
                        </Typography>
                    </RootStyle>
                </Grid>

            </Grid>
        </div>
    );
}
