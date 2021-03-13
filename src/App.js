import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-bootstrap"
import Login from "./Pages/login";
import Register from "./Pages/register";
import InstitutionalMaster from "./InstitutationMaster/institutationalMaster";

import { BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <div>
    <Router>
     <div className="App">
     <div className="container heading" >
       <h1>Vaijnath Devsthan Trust Online Management Portal</h1>
       <span>District: Beed , Pincode : 431515.</span>
       <hr className="line"/>
     </div>
     
    
        <Route path="/" component={Login}  exact/>
        <Route path="/stdreg" component={Register} exact/>
        <Route path="/insmaster" component={InstitutionalMaster} exact />
      </div>

    </Router>
    </div>
  );
}

export default App;
