import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes"




const App = () => {
  const [id,setId]=useState(1);
  return (
    
    <BrowserRouter>
      <Routes id={id} setId={setId}/> 
    </BrowserRouter>
  );
};

export default App;
