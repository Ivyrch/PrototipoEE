
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SendedForm from './pages/SendedForm';



function App() {
  

  return (
    

     <div>
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/envio" element={<SendedForm />} />
           </Routes>
        </Router>
          
   </div> 
  )
}

export default App;
