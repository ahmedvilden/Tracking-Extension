import { globalRoutingContext } from "../App";
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TrackingSession } from '../Contexts/TrackingSessionProvider';
import { Card, Col, Row,Divider } from 'antd';
import {ActionCard} from './ActionCard';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import 'antd/dist/antd.css'
const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  paper2 :{
    display:'flex',
    flexDirection:'column',
    overflow:'auto',
    maxHeight:500
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
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TrackingSessionS = () => {
  const classes = useStyles();
  const [searchbar,setsearchbar] = useState('');
  const editsearchbar = (e) => {
    setsearchbar(e.target.value)
  }  
  const dynamicSearch = () => {    
    /*Object.keys(act).map((key)=>{
      console.log(act[key].name);
    });*/
    return Object.keys(JSON.parse(localStorage.getItem('ActionsList'))).filter(key => JSON.parse(localStorage.getItem('ActionsList'))[key].name.toLowerCase().includes(searchbar.toLowerCase()));
    
    /*console.log(typeof(searchtab));
    console.log(searchtab.filter(name=>name.toLowerCase().includes(searchbar.toLowerCase())));
    return searchtab.filter(name=>name.toString().toLowerCase().includes(searchbar.toLowerCase()));*/
  }
return (
    <globalRoutingContext.Consumer>
      {({ 
            handleRoute
              }) => (  
                <div id = "ExtModal">
          <CssBaseline />
          <TrackingSession.Consumer>
            {
            ({ 
            lastAction,PauseTracking,stopTracking,
            openSlideDialog, setOpenSlideDialog,
            handleClickOpenSlideDialog,handleCloseSlideDialog,
            handleopenLoading,
            handlecloseLoading,
            openLoading,openEditSnack,handleCloseEditSnack,   
            }) => ( 
          <div className={classes.paper} 
          id = "ExtModal"
          >       
            <Typography component="h3" variant="h5">
                Tracking session started
            </Typography>
            <br/>
            <Divider orientation="left">Actions :</Divider>
            <Button
            id = "ExtModal"
            variant="contained" color="primary"
            onClick={()=> PauseTracking()}
            >Pause Tracking</Button>
            <br/>
            <Button
            id = "ExtModal"
            variant="contained" color="primary"
            onClick={()=> handleClickOpenSlideDialog()}
            >Stop tracking
            </Button>            
            {/*<CircularProgress color="secondary" 
            open={openLoading}
            onClose={handlecloseLoading}
            />*/}
            <Dialog            
            open={openSlideDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseSlideDialog}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
        <DialogTitle id="alert-dialog-slide-title">{"Tracking Stopped"}</DialogTitle>
        <DialogContent
        id="ExtModal"
        >
          <DialogContentText id="alert-dialog-slide-description">
            Tracking Completed, Do you want to open the specifications file ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>stopTracking(true)} color="primary"
          id="ExtModal"
          >
            Open
          </Button>
          <Button onClick={()=>stopTracking(false)} color="primary"
          id="ExtModal"
          >
            Skip
          </Button>
        </DialogActions>
      </Dialog>
            <br/>        
            {localStorage.getItem('ActionsList') != null ?
            <Divider orientation="left">Tracked Actions : {JSON.parse(localStorage.getItem('ActionsList')).length}</Divider> 
            :
            <>
            </>
            }
            {localStorage.getItem('ActionsList') != null ?                                 
            <div className={classes.paper2}
            id = "ExtModal"
            >
            <Box display="flex" justifyContent="center" m={1} p={1}>
            <Box p={1}>
            <TextField id="standard-basic" 
            label="Search for an action" 
            onChange={editsearchbar}
            value={searchbar}
            />
            </Box>
            </Box>
            <Container id = "ExtModal">                
            <Snackbar open={openEditSnack} autoHideDuration={6000} onClose={handleCloseEditSnack}>
            <Alert onClose={handleCloseEditSnack} severity="success">
                Action edited successfully!
            </Alert>
            </Snackbar>        
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>            
            {
             /*                            
            JSON.parse(localStorage.getItem('ActionsList')).map((itm)=>
            
                <Col className="gutter-row" span={12}><ActionCard Item={itm}/></Col>

            )*/
            dynamicSearch().map((itm)=>
            <Col className="gutter-row" span={12}><ActionCard Item={JSON.parse(localStorage.getItem('ActionsList'))[itm]}/></Col>
            )
            }
            </Row>  
            </Container>
            </div>
            :
                  <Typography component="h3" variant="h5">
                  No actions tracked
                </Typography>
            }
            </div>            
            )}                   
            </TrackingSession.Consumer>     
                  
            </div>
)}
    </globalRoutingContext.Consumer>
);};
export default TrackingSessionS ;