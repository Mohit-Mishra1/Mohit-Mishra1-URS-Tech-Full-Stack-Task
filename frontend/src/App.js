import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const App = () => {
  return (
   <div className="bg-gray-200"> 
      <Sidebar/>
      <Main/>
    </div>
  );
};

export default App;

