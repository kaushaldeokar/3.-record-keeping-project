import "./App.css";
import NavBar from "./component/NavBar";

import React, { useState } from "react";
function App() {
  const [Task, setTask] = useState("");

  

  return (
    <div className="App">
      <NavBar />
      <div className="input">
        <form>
          <div className="form-group">
            <label
              htmlFor="exampleInputEmail1"
              style={{ backgroundColor: "DodgerBlue" }}
            >
              Add Your Task
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            //onClick={}//
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
