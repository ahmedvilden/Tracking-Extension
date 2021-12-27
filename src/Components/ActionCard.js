import React, { Component } from 'react';
import { Row, Col, Card} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { TrackingSession } from '../Contexts/TrackingSessionProvider';

    const { Meta } = Card;
    function createSelectItems () {
        let items = [];
        JSON.parse(localStorage.getItem('ActionsList')).map((itm)=>
        items.push(<MenuItem value={itm['name']}>{itm['name']}</MenuItem>)
        );                                         
        return items;
    }

    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
      
export const ActionCard = (Item) => {      
    return(
        <TrackingSession.Consumer>
            {
            ({ 
            deleteAction,handleClickOpen,open,handleClose,EditFormSubmit,onDropdownSelected,EditForm,handleClickSnack,handleCloseSnack,openSnack,setOpenSnack
            }) => (
                <div>
        <Card style={{ margin: '5px'}}       
        id = "ExtModal"
        cover={
            <img
                id = "ExtModal"
                src="https://findicons.com/files/icons/1579/devine/256/file.png"                
            />
        }
        actions={[
            <Button icon={<EditOutlined />} 
            id = "ExtBtn"
            onClick={() => EditForm(Item)}
            />,
            <Button icon={<DeleteOutlined />} 
            onClick={()=> {deleteAction(Item['Item']['name'])}}
            id="ExtBtn"
            />,
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="success">
                Action deleted successfully!
            </Alert>
            </Snackbar>
        ]}
        

        
    >

        <Meta
            id = "ExtModal"
            title={Item['Item']['type']}
            description={Item['Item']['name']}
        />
        </Card>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" id="ExtBtn" maxWidth>
        <DialogTitle id="form-dialog-title">Edit Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Action Infos : 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={"Action name: "+Item['Item']['name']}
            type="email"
            fullWidth
          />
          <Select
                autoFocus                
                onChange={onDropdownSelected}                
            >
            {createSelectItems()}
            </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={EditFormSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
        </Dialog>
        </div> 
        )}                   
    </TrackingSession.Consumer> 
)
}