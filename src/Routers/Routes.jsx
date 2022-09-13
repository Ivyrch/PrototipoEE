import React from "react";
import { Route} from "react-router-dom";
import NewAdress from "../pages/NewAdress";
import Home from "../pages/Home";



const Routes = () => {
   return(
      
           <Routes>
           <Route component = { <Home/> }  path="/home
           " />
           <Route component = { <NewAdress/> }  path="/envio" />
           </Routes>
      
   )
}

export default Routes;