import React from 'react';
import Avatar from '@material-ui/core/Avatar';
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
import {useLocation} from 'react-router-dom';
import images from 'js/utils/images';

import AnimationModalSuccess from 'js/_components/atoms/AnimationModalSuccess'


const useStyles = makeStyles((theme) => ({
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

 function LoginPage(props) {
  const [onChangeValue,setOnChangeValue] = React.useState(false)
    const classes = useStyles();
    const location = useLocation();
    const {logo,placeHolder} = location.state

      const getImage = (array,attr,value) =>{

        for(var i = 0; i < array.length; i += 1) {
          
          if(array[i][attr] === value) {
              console.log("array [i]",array[i]);
              return array[i].picture;
          }

      }
      }

    const label = "Enter "+placeHolder+" id"
    const pic = getImage(images,"source",logo)
    console.log("images ",images);
    

    const handleSubmit = (event) =>{
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      if(email==='kaushik@gmail.com' && password === 'kaushik'){
        console.log("email is " + email + " password is "+password)
        setOnChangeValue(true);

    }
      else
        alert("Invalid login details");
      
    }

    if(onChangeValue === true){
     
      console.log("true");
     return ( 
       <>
      <LoginPage />
      <AnimationModalSuccess placeHolder={placeHolder}/>
      </>   
      )
    }
    

    return (
      <div id="bank-selection-layout-1" className="bankSelectionLayout1"  style={{fontFamily:"Inter,sans-serif"}}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}  style={{fontFamily:"Inter,sans-serif"}}>
        <Avatar alt="Remy Sharp" src={pic} className={classes.large} variant="square"></Avatar> 
          <Typography component="h1" variant="h5"  style={{fontFamily:"Inter,sans-serif"}}>
            Sign in
          </Typography>
          <form className={classes.form} data-testId="LoginSubmit" noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              inputProps={{ "data-testid": "username" }}
              id="email"
              label= {label}
              name="email"
              autoComplete="email"
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
                <Link href="#" variant="body2">
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
export default LoginPage
