
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewAdress from './pages/NewAdress'



function App() {
  

  return (
    

     <div>
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/envio" element={<NewAdress />} />
           </Routes>
        </Router>
          
   </div> 
  )
}

export default App;
