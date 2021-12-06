
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from 'react'
function Copyright() {
return (
<Typography variant="body2" color="textSecondary" align="center">
{'Copyright © '}
<Link color="inherit" href="https://mui.com/">
Your Website
</Link>{' '}
{new Date().getFullYear()}
{'.'}
</Typography>
);
}const useStyles = makeStyles((theme) => ({
root: {
height: '100vh',
},
image: {
backgroundImage: 'url(https://source.unsplash.com/random)',
backgroundRepeat: 'no-repeat',
backgroundColor:
theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
backgroundSize: 'cover',
backgroundPosition: 'center',
},
paper: {
margin: theme.spacing(8, 4),
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
},
avatar: {
margin: theme.spacing(1),
backgroundColor: theme.palette.secondary.main,
},
form: {
width: '100%', // Fix IE 11 issue.
marginTop: theme.spacing(1),
},
submit: {
margin: theme.spacing(3, 0, 2),
},
}));
export default function Signin() {

const classes = useStyles();
const [appUser, setAppUser] = useState({
    user: '',
    password: ''
    });
    useEffect(
        () => {
        setAppUser({
        user: '',
        password: ''
        }
        );
        }, []);

        const handleAppUser = (event) => {
            // console.log(event.target.value);
            console.log("handleAppUser")
            setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
            });
            console.log(appUser.user +" user")
           // console.log(appUser.password)
            };
            const submitAppUser = (event) => {
            // console.log(appUser.user);
            // console.log(event.target.user);
            event.preventDefault();
            if (appUser.user === "Admin" && appUser.password === "Root") {
            console.log(appUser.user);
           // props.loginstatus(true)
            //navigate('/transactionform')
            
            }
            else
            {
           // setLoginError(true)
            }
        }


 return (
<Grid container component="main" className={classes.root}>
<CssBaseline />
<Grid item xs={false} sm={4} md={7} className={classes.image} />
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Sign in
</Typography>
<form className={classes.form} noValidate>
<TextField
variant="outlined"
margin="normal"
required
fullWidth
id="username"
label="Username"
name="username"
autoComplete="username"
autoFocus
value={appUser.user}
onChange={handleAppUser}
/>
<TextField
variant="outlined"
margin="normal"
required
fullWidth
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
className={classes.submit}
>
Sign In
</Button>

<Box mt={5}>
<Copyright />
</Box>
</form>
</div>
</Grid>
</Grid>
);
}

