import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
import { alpha, styled } from '@mui/material/styles';
import {Box, Card, Container, Grid, Typography} from '@mui/material';

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

export default function Popular_products() {
    return (
        <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <RootStyle>
                            <IconWrapperStyle>
                                <Icon icon={bugFilled} width={24} height={24} />
                            </IconWrapperStyle>
                            <Typography variant="h3">sm</Typography>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                *item1*
                            </Typography>
                        </RootStyle>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <RootStyle>
                            <IconWrapperStyle>
                                <Icon icon={bugFilled} width={24} height={24} />
                            </IconWrapperStyle>
                            <Typography variant="h3">i</Typography>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                *item2*
                            </Typography>
                        </RootStyle>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <RootStyle>
                            <IconWrapperStyle>
                                <Icon icon={bugFilled} width={24} height={24} />
                            </IconWrapperStyle>
                            <Typography variant="h3">t</Typography>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                *item3*
                            </Typography>
                        </RootStyle>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <RootStyle>
                            <IconWrapperStyle>
                                <Icon icon={bugFilled} width={24} height={24} />
                            </IconWrapperStyle>
                            <Typography variant="h3">e</Typography>
                            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                *item4*
                            </Typography>
                        </RootStyle>
                    </Grid>
                </Grid>
        </div>
    );
}
