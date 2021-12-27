import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from 'antd';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import { Row } from 'antd';
import { TrackingSession } from '../Contexts/TrackingSessionProvider';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { ArrowLeftOutlined  } from '@ant-design/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems:   'center'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    paper2 :{
        display:'flex',
        flexDirection:'column',
        overflow:'auto',
        maxHeight:500
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      }
  }));
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  


const EditActionFormCpt = (props) => {
const classes = useStyles();
let actiontoedit = JSON.parse(localStorage.getItem('ActionToEdit'));
function createSelectItems () {
  let conditions = [];
  let actiontoedit = JSON.parse(localStorage.getItem('ActionToEdit'));
  let item = actiontoedit['Item']['name'];
  let items = JSON.parse(localStorage.getItem('ActionsList'));                                           
  for(var i = 0 ; i<items.length;i++){
    if(items[i]['name']!=item){
      conditions.push(<MenuItem value={items['name']}>{items['name']}</MenuItem>)
    }
  }
  return conditions;
}
function createGroupItems () {
  let groups = [];
  let item = actiontoedit['Item']['name'];
  let items = JSON.parse(localStorage.getItem('ActionsList'));    
  for ( var i = 0 ; i<items.length;i++){
    if(items[i]['name']==item){
      if(items[i-1]&&items[i+1]){
        groups.push(<MenuItem value={items[i-1]['name']}>{items[i-1]['name']}</MenuItem>)
        groups.push(<MenuItem value={items[i+1]['name']}>{items[i+1]['name']}</MenuItem>)
      }else if (items[i-1]&& !(items[i+1])){
        groups.push(<MenuItem value={items[i-1]['name']}>{items[i-1]['name']}</MenuItem>)
      }else if (!(items[i-1])&&items[i+1]){
      groups.push(<MenuItem value={items[i+1]['name']}>{items[i+1]['name']}</MenuItem>)
    }
    }
  }
  return groups;
}
return( 
    <TrackingSession.Consumer>
    {
    ({ 
    handleSelectChange,age,onConditionDropdownSelected,condition,handleNewCondition,handleNewGroup,handleNameInput,handleEditSubmit,
    goback,
    handleCloseEditSnack,openEditSnack
    }) => ( 
    <div className={classes.paper} 
    id = "ExtModal"
    style={{ width: '100%' }}
    >
    <div style={{ width: '100%' }}>
    <Box
    id = "ExtModal"
    display="flex" p={1}
    >
      <Box flexGrow={1} p={1}
      id = "ExtModal"
      >
      <ArrowLeftOutlined 
      onClick={goback}
      />
      </Box>
      <Box p={1} fontWeight="bold" color="blue" id = "ExtModal">      
            Action Edit  
    </Box>
    </Box>
    </div>
    <Divider orientation="left">General Info</Divider>
    <form onSubmit={handleEditSubmit} className={classes.form}
    id = "ExtModal"
    >
        <TextField label="Action Name" id="nameInput" name="nameInput" defaultValue={actiontoedit['Item']['name']} 
        onChange={handleNameInput}
        />
        <br/>
        <br/>
        <InputLabel id="demo-simple-select-label">Select Action Type</InputLabel>
        { actiontoedit['Item']['type'] == 'click_selenium' ?
        <Select autoFous
        onChange={handleSelectChange}
        >
            <MenuItem value='seleniumClick'>             
            selenium click
            </MenuItem>
        </Select> : actiontoedit['Item']['type'] == 'navigate' ?
        <Select autoFocus
        onChange={handleSelectChange}
        >
        <MenuItem value='navigateto'>    
        Navigation         
        </MenuItem>
        </Select> : actiontoedit['Item']['type'] == 'FormSubmit' ?
        <Select autoFocus
        onChange={handleSelectChange}
        >
        <MenuItem value='FormSubmit'>    
        Form Submit         
        </MenuItem>
        </Select> : 
        <Select autoFocus
        onChange={handleSelectChange}
        >
        <MenuItem value='read'>    
        Read         
        </MenuItem>
        </Select>
        }
        {age != '' ? 
        <Divider orientation="left">Action Informations</Divider>    : 
        <div
        id = "ExtModal"
        >        
        </div>
        }
        {age != '' ?            
        <div className={classes.paper2}
        id = "ExtModal"
        >
            <Container>            
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Typography component="h3" variant="h5">
            Action Edit
            </Typography>
            </Row>
            <br/>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Condition</InputLabel>
            <Select    
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"        
            onChange={onConditionDropdownSelected}
            >
            <MenuItem value='false'>False</MenuItem>
            <MenuItem value='true'>True</MenuItem>
            </Select>          
            </FormControl>            
            <br/>         
            <FormControl className={classes.formControl}>
            <Select
            autoFocus
            onChange={handleNewGroup}
            >
            {JSON.parse(localStorage.getItem('ActionsList')).map((itm,i,actions)=>
            <MenuItem value={itm['name']}>{itm['name']}</MenuItem>              
              )}
            </Select>
            <FormHelperText>Select Action Group</FormHelperText>
            </FormControl>               
            {condition == 'true' ?
            <div
            id = "ExtModal"
            >
            <FormControl className={classes.formControl}>
            <Select
            autoFocus            
            onChange={handleNewCondition}
            >
            {
              JSON.parse(localStorage.getItem('ActionsList')).map((itm)=>
              <MenuItem value={itm['name']}>{itm['name']}</MenuItem>
              )
            }
            </Select>
            <FormHelperText>Select Action Condition</FormHelperText>            
            </FormControl>   
            <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submit}  
            id = "ExtBtn"                                      
            >
           Edit Action
          </Button>
          </div>
            :
            <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submit}  
            id = "ExtBtn"                                      
            >
           Edit Action
          </Button>
            }    
            </Container>
        </div>          
    :    
    <>
    </>        
    }                 
    </form>
 </div>
    )}
    </TrackingSession.Consumer>
 );
}
export default EditActionFormCpt;