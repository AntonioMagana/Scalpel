import {Fragment} from "react";
import {Divider, Grid, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {List} from "@mui/icons-material";

const HowToPage = () => {
    return (
        <Fragment>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Features
                            </Typography>
<Divider />
                            <br/>
                            <Typography variant="h6" color="text.primary" align="justify">
                                Check multiple stores in one go
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                Get latest product updates from several stores at once!
                            </Typography>
<Divider />
                            <br/>
                            <Typography variant="h6" color="text.primary" align="justify">
                                Item Price Analytics
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                Learn more about item prices with price charts, average costs, and current status.
                            </Typography>
<Divider />
                            <br/>
                            <Typography variant="h6" color="text.primary" align="justify">
                                Popular Items
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                Show the hottest on-demand products to look out for. Get an edge from others with latest news!
                            </Typography>
<Divider />
                            <br/>
                            <Typography variant="h6" color="text.primary" align="justify">
                                Latest News
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                Obtain related restock news in a simple manner. No need for multiple tabs or manual searches!
                            </Typography>
                          </CardContent>
                    </Card>
<Divider />
                    <br/> <br/>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div"> Frequently Asked Questions (FAQ)</Typography>
<Divider />
                            <br/>
                            <Typography variant="h6" color="text.primary" align="justify">
                                How do I search for a product?
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                Searching for a product requires the full URL link of the item.
                            </Typography>
<Divider />
                            <br/>
                            <Typography variant="h6" color="text.primary" align="justify">
                                Where do I find on-demand products from Amazon.com?
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                You can find a blue button called "Amazon" on the top bar on the anywhere on the website.
                            </Typography>
<Divider />
                            <br/>
                            <Typography variant="h6" color="text.primary" align="justify">
                                Why is Best Buy and Walmart not working?
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="justify">
                                Our team is currently developing Best Buy and WalMart to help you guys scalp items you want!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default HowToPage
