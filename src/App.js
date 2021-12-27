import React , {useState, useReducer} from 'react';
import './App.css';
import Modal from './Components/Modal';
import ModalProvider from './Contexts/ModalProvider';
import TrackingSessionProvider from './Contexts/TrackingSessionProvider';

/**
 * @return {null}
 */

export  var globalRoutingContext = React.createContext();
export let handleRoute = () => {}

function App() {
  let r = localStorage.getItem("TWroute");
  console.log(r);
  if(r == undefined || r == null ){
    r = 'Home'
  }
  //const [ls,setLs] = useState(ls1);
  const [globalRouting, setGlobalRouting] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {     
      route: r
    }
  ); 
    handleRoute = (prop) => {    
    localStorage.setItem("TWroute",prop);
    setGlobalRouting(localStorage.getItem("TWroute"));
  };
  return (
  <globalRoutingContext.Provider value={{globalRouting,setGlobalRouting,handleRoute}}>
    <ModalProvider>
      <TrackingSessionProvider>
      <Modal />
      </TrackingSessionProvider>    
    </ModalProvider>    
  </globalRoutingContext.Provider>
  );
}

export default App;
