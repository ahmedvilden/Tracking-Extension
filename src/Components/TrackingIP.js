import { globalRoutingContext } from "../App";
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { TrackingSession } from '../Contexts/TrackingSessionProvider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  submit: {
        margin: theme.spacing(3, 0, 2),
  },  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const TrackingIP = () => {
  const classes = useStyles();
return (
    <globalRoutingContext.Consumer>
      {({ 
            handleRoute
              }) => (  
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <TrackingSession.Consumer>
            {
            ({ 
            handleInput,handleSubmit
            }) => ( 
          <div className={classes.paper}>       
            <Typography component="h3" variant="h5">
                Start a new tracking session
            </Typography>
            <br/>
            <br/>            
            <br/>
            <FontAwesomeIcon icon={faFile} size = "6x" color="#3D0FCF"/>
            <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your file name"
                    name="name"
                    autoFocus
                    onChange={handleInput}
                />
                 <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.submit}  
                    id = "ExtBtn"                                      
                >
                    Create session
                </Button>

            </form>            
            </div>            
            )}                   
            </TrackingSession.Consumer>     
                  
            
            </Container>
)}
    </globalRoutingContext.Consumer>
);};
export default TrackingIP ;