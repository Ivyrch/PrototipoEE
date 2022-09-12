import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import SendedForm from "../pages/SendedForm";
import Home from "../pages/Home";



const Routes = () => {
   return(
      
           <Routes>
           <Route component = { <Home/> }  path="/home
           " />
           <Route component = { <SendedForm/> }  path="/envio" />
           </Routes>
      
   )
}

export default Routes;