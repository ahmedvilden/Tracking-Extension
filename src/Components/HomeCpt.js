import { globalRoutingContext } from "../App";
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { TrackingSession } from '../Contexts/TrackingSessionProvider';

const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
}));

const HomeCpt = () => {
  const classes = useStyles();
  return (
    <globalRoutingContext.Consumer>
    {({ 
            handleRoute
              }) => ( 
    <Container component="main" maxWidth="xs">      
    <CssBaseline />       
    <div className={classes.paper}>    
    <img className='authImg' src="data:image/png;base64,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"/>
                <br/>
                <br/>
                <br/>                
                <Typography component="h1" variant="h5">
                    Activity tracking Extension
                </Typography>
                
                <TrackingSession>
                {({             
              }) => ( 
                <div>
                <br></br>
                <br></br>                
                    <Button
                    variant="outlined"
                    fullWidth
                    autoFocus
                    onClick={() => {
                      
                      handleRoute('TrackingIP')}
                      
                      }>
                      Start
                    </Button>                    
                    </div>
                  )}
                  
                  </TrackingSession>
                
                    <br>
                    </br>
                    <br></br>
                             
    </div>
    </Container>
    )}
    </globalRoutingContext.Consumer>
  );

};

export default HomeCpt;