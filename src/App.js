import "./App.css";
import NavBar from "./component/NavBar";

import React, { useState } from "react";
function App() {
  const [Task, setTask] = useState("");

  return (
    <div className="App">
      <NavBar />
      
    </div>
  );
}

export default App;
