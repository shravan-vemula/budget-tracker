import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Btracker from 'images/Btracker.png';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import { api } from 'js/utils/resources';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({


    logo:{
        width: "50%",
        position: "relative",
        left: "0%"
    },

    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '60%', // Fix IE 11 issue.

      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

 function SignIn(props) {
  const [onChangeValue,setOnChangeValue] = React.useState(false)
  const [userEmail,setUserEmail] = React.useState("");
  const [userPassword,setUserPassword] = React.useState("");
  const [open,setOpen] = React.useState(false)
  const classes = useStyles();
  const history = useHistory();

    async function handlePostToken(event){
      event.preventDefault();
      let data={
        method:'POST',
        body:JSON.stringify({
          client_id:api.CLIENT_ID,
          username:userEmail,
          password:userPassword,
          grant_type: 'password',
          audience: api.AUDIENCE
           
        }),
        headers:{
            'Accept':'application/json',
           'Content-Type': 'application/json'
        }
      }
      return fetch(api.TOKENAPI,data)
        .then(response=>
          response.json().then(user=>({user,response})))
          .then(({user,response})=>{
            if(response.ok){
              setOnChangeValue(true);
              setOpen(false);
              localStorage.setItem('access_token', user.access_token)
              localStorage.setItem('user_email',userEmail)
              history.replace("/SelectBank/BankTiles") 
              window.location.reload(false);
            }
            else{
              console.log("invalid details")
              setOpen(true)
              
            }  
          }
        );
    }


  const handleChangeInUserEmail = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  const handleChangeInPassword = (event) => {
    const password = event.target.value;
    setUserPassword(password);
  };  


    return (
      <div id="sign-in" className={"signin"}  style={{fontFamily:"Inter,sans-serif"}}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}  style={{fontFamily:"Inter,sans-serif"}}>
        <div id="budget-tracker-heading" align="center" className={classes.logo} style={{fontFamily:"Inter,sans-serif"}}>
        <img src={Btracker} alt="Logo" height="100%" width="80%" ></img>
        </div>

          <Typography component="h1" variant="h5"  style={{fontFamily:"Inter,sans-serif"}}>
            Sign in
          </Typography>
          <Collapse in={open}>
            <Alert severity="error" style={{width:"100%"}}>
        
            Invalid password/Email
        </Alert>
        </Collapse>
          <form className={classes.form} data-testId="LoginSubmit" noValidate onSubmit={handlePostToken}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              inputProps={{ "data-testid": "username" }}
              id="email"
              label= "Enter Email id"
              name="email"
              autoComplete="email"
              onChange={handleChangeInUserEmail}
              value={userEmail}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              inputProps={{ "data-testid": "password" }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangeInPassword}
              value={userPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              data-testId="SigninButton"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          

          
        </div>
      </Container>
      </div>
    );
  }
export default SignIn;
