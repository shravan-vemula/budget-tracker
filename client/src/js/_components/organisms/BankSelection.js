import React from 'react'
import BankSelectionLayout1 from '../molecules/BankSelectionLayout1';
import BankSelectionLayout2 from '../molecules/BankSelectionLayout2';
import NavBar from './Navbar';
import 'js/_components/BankSelection.css';
import { Switch,Route, Redirect} from 'react-router-dom';
import LoginPage from 'js/_components/organisms/LoginPage';
import BankPageRedirect from '../molecules/BankPageRedirect';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { myTheme } from 'theme';
import {getUserId} from "js/services/UserServices";
import auth from 'js/auth/initAuth';

export default function BankSelection(props) {
 
    const useStyle = makeStyles((Theme) =>({

        layout1 : {
            width : "76%",
            display : "block",
            position:"absolute",
            height:"65%"
        },

        layout2 : {
            width : "20%",
            display : "inline-block",
            textAlign:"left",            
            position: "absolute",
            right: "0%",
            top:"3%"
        },

        bankSelectionContent :{
            width: "100%",
            height: "100%",
            padding: "15px 30px 0"
        },

    }))

    const classes = useStyle(myTheme);
    const theToken = localStorage.getItem("access_token");

    React.useEffect(() =>{
      getUserId(props.setId)
      });

      if(!auth.loggedIn()){
          return <Redirect to="/login" />
      }

    return (
        <>
            <div id="nav-bar" className="navbar"  style={{fontFamily:"Inter,sans-serif"}}>
            <NavBar />
            </div>
            <Grid   
                justify="center"
                alignItems="center"
            >
            <div id="bank-selection" className="bankSelection"  style={{fontFamily:"Inter,sans-serif"}}>
                <div id="bank-selection-content" className={classes.bankSelectionContent} >
                <Grid
                        container
                         direction="row"
                            justify="center"
                         alignItems="center"
                         className={classes.layout1}
                    >
                    <Switch>
                    
                    <Route path="/SelectBank/BankTiles" exact component={LoginPage} > 
                        <BankSelectionLayout1 />
                    </Route>
                    
                  
                        <Route path="/SelectBank/LoginPage" exact component={LoginPage} >
                            <LoginPage />    
                        </Route>
                        <Route path="/SelectBank/RedirectLogin" exact component={BankPageRedirect} >
                            <BankPageRedirect />    
                        </Route>

                    </Switch>
                    </Grid>
                    <Grid
                        container
                         direction="row"
                        justify="left"
                         alignItems="left"
                         className={classes.layout2}
                    >    
                        <BankSelectionLayout2 />
                    </Grid>
            </div>
            </div>
            </Grid>
        </>

    );
}
