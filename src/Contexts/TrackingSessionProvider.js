import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { globalRoutingContext } from "../App";
import { handleRoute } from '../App';
import { Alert } from 'evergreen-ui';




export const TrackingSession = React.createContext({});
export const DialogContext = React.createContext({});




const TrackingSessionProvider = ({ children }) => {
    const[isTracking,setIsTracking] = useState(false); 
    let [started,setStarted] = useState(false);
    //DIALOG-------------
    const [actionList, setActionList] = useState(JSON.parse(localStorage.getItem('ActionsList')));
    const [NewName, setNewName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [condition, setCondition]= useState('');
    const [newCondition,setNewCondition]=useState('');
    const [newGroup,setNewGroup]=useState('');
    const [openSnack, setOpenSnack] = React.useState(false);
    const [openEditSnack, setOpenEditSnack] = React.useState(false);
    const [openSlideDialog, setOpenSlideDialog] = React.useState(false);
    const [openLoading,setopenLoading] = React.useState(false);

    const handleopenLoading = () => {
      setopenLoading(true);
    };

    const handlecloseLoading = () => {
      setopenLoading(false);
    };

    const handleClickOpenSlideDialog = () => {
      setOpenSlideDialog(true);
    };

  const handleCloseSlideDialog = () => {
    setOpenSlideDialog(false);
  };


    const handleClickSnack = () => {
    setOpenSnack(true);
    };
    const handleClickEditSnack = () => {
      setOpenEditSnack(true);
      };

    const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
    };

    const handleCloseEditSnack = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenEditSnack(false);
      };
    
    const handleNewCondition = (event) => {
      setNewCondition(event.target.value);
    }
    
    const handleNewGroup = (event) => {
      setNewGroup(event.target.value);
    }

    const handleSelectChange = (event) => {             
    setAge(event.target.value);
    };
    
    const onConditionDropdownSelected = (event) => {
      setCondition(event.target.value);
    }
    const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: ""
    }
  );
  const [nameInput,setNameInput] = useReducer(
    (state,newState) => ({...state, ...newState}),
    {
      nameInput: ""
    }
  );
  
  const handleNameInput = evt => {
    const nameInput = evt.target.name;
    const newValue = evt.target.value;
    setNameInput({ [nameInput]: newValue });
  };
  
  useEffect(()=>{
  },[newCondition])

  useEffect(()=>{
  },[newGroup])

  useEffect(()=>{
  },[age])
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const EditFormSubmit = (e) => {
    e.preventDefault();
    console.log('prevented')
  }
  const PauseTracking = () => {
    handleRoute('TrackingP');
  }

  const EditForm = (action) => {
    localStorage.setItem('ActionToEdit',JSON.stringify(action));
    handleRoute('EditAction');
  }

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let File = { formInput };
    axios.post('http://127.0.0.1:5000/Tracking',{
      message : "Starting",
      FileName : File['formInput'].name,
      windowLocation : window.location.href
    }).then(function(response){   
      setStarted(true);   
      localStorage.setItem("TSid",JSON.stringify(response['data']['data'].data));            
      handleRoute('TrackingSession');
      window.postMessage({ type: "started" }, "*");
    }).catch(function(response){
      console.log(response);
    });  
        
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    let name = { nameInput }; 
    let actiontoedit = JSON.parse(localStorage.getItem('ActionToEdit'));
    actiontoedit = actiontoedit['Item'];
    axios.post('http://127.0.0.1:5000/Tracking',{
    message:'editActivity',
    actid:parseInt(localStorage.getItem('TSid')),
    actiontoedit:actiontoedit,
    ActivityName:name['nameInput'].nameInput,
    condition:newCondition,
    group:newGroup,
    id : parseInt(localStorage.getItem('TSid'))
    }).then(function(response){
      let newactiontoreplace = response['data']['data']['data2']['action'];      
      let oldaction = response['data']['data']['data']['action'];
      console.log(oldaction['name'])
      console.log(newactiontoreplace['name'])
      let actionTab = JSON.parse(localStorage.getItem('ActionsList'));
      for (var i =0 ; i<actionTab.length;i++){
        if(actionTab[i]['name'] === actiontoedit['name']){
          if(actionTab[i]['name'] != newactiontoreplace['name']){
          actionTab[i]['name'] = newactiontoreplace['name']
        }          
          localStorage.setItem('ActionsList',JSON.stringify(actionTab));
          setActionList(JSON.parse(localStorage.getItem('ActionsList')));       
        }
      }      
    }).then(
      handleClickEditSnack()
    ).catch(function(response){
      console.log(response)
    }).then(
      handleRoute('TrackingSession')
    ).catch(function(response){
      console.log(response)
    });
  };
  
  useEffect(() => {
    function listenForStorage() {
      const item = localStorage.getItem("aelement");
      if (item) {
        console.log(item);
        setActionList(item);
      }
    }

    window.addEventListener("storage", listenForStorage);
    return () => {
      window.removeEventListener("storage", listenForStorage);
    };
  }, []);

  useEffect(() => {
  }, [actionList]);

  useEffect( () => {
    window.addEventListener("message", function(e) {
    if (e.data.type && (e.data.type === "Action")) {             
    if(localStorage.getItem('ActionsList') != null){
      let actionsTAB = JSON.parse(localStorage.getItem('ActionsList'));
      e.data.action['group'] = actionsTAB.length+1;
      actionsTAB.push(e.data.action);
      localStorage.setItem('ActionsList',JSON.stringify(actionsTAB));
    }else{
      let actionsTAB = [];
      actionsTAB.push(e.data.action);
      localStorage.setItem('ActionsList',JSON.stringify(actionsTAB));
    }
    axios.post('http://127.0.0.1:5000/Tracking',{
    message : 'adding',  
    sessionId : parseInt(localStorage.getItem('TSid')),
    activities : e.data.action,
    validateStatus: () => true
  }).then(res => {    
    console.log(res.status);
  }).then(
    setActionList(JSON.parse(localStorage.getItem('ActionsList')),
    console.log(actionList)
  )).catch(function(response){
    console.log(response);
  });

    }
  });

}, []);


function deleteActionCookies(actionId){
  let actionTab = JSON.parse(localStorage.getItem('ActionsList'));
  for (var i =0 ; i<actionTab.length;i++){
    if(actionTab[i]['name'] === actionId){    
      actionTab.splice(i,1);
      localStorage.setItem('ActionsList',JSON.stringify(actionTab));
      setActionList(JSON.parse(localStorage.getItem('ActionsList')));       
    }
  }
}

const deleteAction = (actionId) =>{

axios.post('http://127.0.0.1:5000/Tracking',{
    message : "deleting",
    actid : actionId,
    id : parseInt(localStorage.getItem('TSid'))

  }).then(
      deleteActionCookies(actionId)
      ).catch(function(response){
    console.log(response);
  }).then(
    handleClickSnack()
  ).catch(function(response){
    console.log(response)
  });
}

const stopTracking = (toopen) => {   
  axios.post('http://127.0.0.1:5000/Tracking',{
    message : "stopping",
    data : parseInt(localStorage.getItem('TSid')),
    toopen : toopen
  }).then(function(response){
    localStorage.clear();
    console.log(response);    
  }).then(() => {
    handleRoute('TWroute');
  }).catch(function(response){
    console.log(response);
  });
}

const goback = () =>{
  handleRoute('TrackingSession');
}
    return (
        <TrackingSession.Provider
            value={{
                PauseTracking,
                stopTracking,
                isTracking,
                handleSubmit,
                handleInput,
                formInput,
                deleteAction,
                handleClickOpen,
                handleClose,
                open,
                EditFormSubmit,
                handleSelectChange,
                NewName,
                EditForm,
                age,
                condition,
                onConditionDropdownSelected,
                handleNewCondition,
                handleNewGroup,
                handleNameInput,
                handleEditSubmit,
                goback,
                handleClickSnack,
                handleCloseSnack,
                openSnack,
                setOpenSnack,
                openEditSnack,
                setOpenEditSnack,
                handleCloseEditSnack,
                openSlideDialog, 
                setOpenSlideDialog,
                handleClickOpenSlideDialog,
                handleCloseSlideDialog,
                handleopenLoading,
                handlecloseLoading,
                openLoading                
            }}
        >
            {children}
        </TrackingSession.Provider>
    );

};
export default TrackingSessionProvider;