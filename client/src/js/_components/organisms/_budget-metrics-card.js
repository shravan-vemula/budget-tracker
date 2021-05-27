import React from 'react';
import { Typography, makeStyles, Card, CardContent, Grid,Box } from '@material-ui/core';
import RupeeIcon from 'js/_components/atoms/_rupee-icon';
import InflowIcon from 'images/inflow-icon.png';
import PiggyIcon from 'images/piggy-card-icon.png';
import { myTheme } from 'theme';
import COLORS from 'js/utils/colors';

const useStyles = makeStyles(() => ({
    topCard:{
        width: '296px',
        height: '172px',
        borderRadius: '14px',
        backgroundColor: COLORS.white,
    },
    heading:{
        width: '69px',
        height: '30px',
        color:myTheme.palette.secondary.main,
        fontSize:'22px',
        margin:'4px 0 0 12px',
    },
    currency:{
        marginLeft:'-10px',
        fontSize:'36px',
        color:myTheme.palette.default.main,
    },
    footerMonth:{
        fontFamily:myTheme.typography.fontFamily.default,
        margin:'0 4px 0 18px',
        fontSize:'16px',
        color:myTheme.palette.secondary.main,
    },
    footerPrice:{
        fontFamily:myTheme.typography.fontFamily.default,
        marginLeft:'3px',
        fontSize:'16px',
        color:myTheme.palette.default.main,
    },
    inflowIcon:{
        height:'25px',
        width:'25px',
        marginTop:'25px',
    },
    inflowValue:{
        fontSize:'14px',
        color:myTheme.palette.secondary.main,
        margin:'28px 0 0 10px',
    },

}));

const BudgetMetricsCard = ({ heading,value,inflow,previousTotalBudget,spentValue,left,text,spent }) => {
    const classes = useStyles();
    const size = "small";
    let metricValue =  heading === "Spent" ? spentValue : value;
    if(heading === "Inflow"){
        metricValue=inflow;
    }
    return (
        <div>
             <Card className={classes.topCard} elevation={2}>
                    <CardContent>
                            <Grid container>
                                <Grid item>
                                    <img src={PiggyIcon} />
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.heading}>
                                        {heading}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                            <Box m={2.5}>
                                <RupeeIcon />
                            </Box>    
                            <Typography component="div">
                            <Box fontWeight={500} m={1.5} className={classes.currency}>
                                {heading === "Remaining" ? value - spentValue: metricValue} 
                            </Box>
                            </Typography>
                            {
                                heading === "Inflow" && 
                                <>
                                <Grid item>
                                <Box>
                                <img src={InflowIcon} className={classes.inflowIcon} />
                                </Box> 
                                </Grid>
                                <Grid item>   
                                <Typography component="div">
                                <Box  className={classes.inflowValue}>
                                    18.5%
                                </Box>
                                </Typography>
                                </Grid>
                                </>
                            }
                            </Grid>
                            { (heading === "Budget" && spent===undefined )  && 
                            <Grid container>
                        
                                <Typography variant="p" className={classes.footerMonth}>
                                    Last month:
                                </Typography>
                                <RupeeIcon size={size}/>
                                <Typography variant="p" className={classes.footerPrice}>
                                    {previousTotalBudget}
                                </Typography>
                            </Grid>
                            }
                            { heading === "Income" && 
                            <Grid container>
                                <Typography variant="p" className={classes.footerMonth}>
                                    {text}
                                </Typography>
                                
                            </Grid>
                            }
                            { heading === "Expense" && 
                            <Grid container>
                                <Typography variant="p" className={classes.footerMonth}>
                                    Spent today:
                                </Typography>
                                <RupeeIcon size={size}/>
                                <Typography variant="p" className={classes.footerPrice}>
                                    {text}
                                </Typography>
                                
                            </Grid>
                            }
                            { (heading === "Budget" && spent!=null) && 
                            <Grid container>
                                <Typography variant="p" className={classes.footerMonth}>
                                    Spent:
                                </Typography>
                                <RupeeIcon size={size}/>
                                <Typography variant="p" className={classes.footerPrice}>
                                    {spent}
                                </Typography>
                                <Typography variant="p" className={classes.footerMonth}>
                                    Left:
                                </Typography>
                                <RupeeIcon size={size}/>
                                <Typography variant="p" className={classes.footerPrice}>
                                    {left}
                                </Typography>
                            </Grid>
                            }
                    </CardContent>
                </Card>
        </div>
    );
};
export default BudgetMetricsCard;