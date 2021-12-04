import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BestBuyPage = () => {
    return (

        <div>
            <br />
            <Card sx={{ minWidth: 275 }} >
              <CardContent>
                  <Typography variant="h5" component="div">
                    Currently in development
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Be back soon!
                  </Typography>
              </CardContent>
            </Card>
        </div>
    )
}

export default BestBuyPage
