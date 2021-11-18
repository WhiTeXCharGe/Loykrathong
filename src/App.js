import React from 'react';
import Landing from './Landing';
import KrathongSelect from './krathongSelect';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {


  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>

        <Route exact path="/select" element={<KrathongSelect/>}/>
          
      </Routes>
    </Router>

  );
}

export default App;