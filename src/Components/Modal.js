import React from 'react';
import { X } from 'react-feather';
import Draggable from 'react-draggable';
import { ModalContext } from '../Contexts/ModalProvider';
import { TrackingSession } from '../Contexts/TrackingSessionProvider';
import {globalRoutingContext} from '../App';
import { SideSheet } from 'evergreen-ui';
import HomeCpt from './HomeCpt';
import TrackingIP from './TrackingIP';
import TrackingP from './TrackingP';
import TrackingSessionS from './TrackingSessionS';
import EditActionFormCpt  from './EditActionForm';



const Modal = () => {
  
  return (
    <globalRoutingContext.Consumer>
                  {contextRouting => (  
                    <div id = "ExtModal">
            <SideSheet
                isShown={true}
                onCloseComplete={() => {}}
                preventBodyScrolling
                id = "ExtModal"
            >      
                            {   localStorage.getItem("TWroute")  == 'TrackingIP' ?
                                <TrackingIP/> : localStorage.getItem("TWroute")  == 'TrackingSession' ? 
                                <TrackingSessionS session = {localStorage.getItem("TSid")} /> :
                                localStorage.getItem("TWroute") == 'TrackingP' ?
                                <TrackingP session = {localStorage.getItem("TSid")}/> 
                                
                                :localStorage.getItem("TWroute") == 'EditAction' ? 
                                <EditActionFormCpt/>
                                :
                                <HomeCpt/>
                            }

                   
    </SideSheet>    
    </div>
          )}
      </globalRoutingContext.Consumer>
  );
};

export default Modal;
