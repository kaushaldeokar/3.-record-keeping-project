import "./App.css";
import NavBar from "./component/NavBar";
import Input from "./component/input"
import React, { useState } from "react";
function App() {
  
  const [inputData,setData]=useState("");
  const [Items,setItems]=useState([]);
  const addItem=()=>{
    if(inputData){
      setItems([...Items,inputData]);
      setData("");
    }
    
  }
  const remove=()=>{
    setItems([]);
    setData("");
    
  }
  const del=(id)=>{
    console.log(id);
    const updateItems=Items.filter((elem,ind)=>{
      return ind!=id;
    })
    setItems(updateItems);
  }


  return (

    

    <div className="App" >
      <NavBar />
      <h1 style={{justifyContent:"center", display:"flex",paddingTop:"10vh"}}>ADD YOUR LIST </h1>
      <Input value={inputData} dataSet={setData}/>
      <button title ="Add item" style={{justifyContent:"center", display:"flex"}} onClick={addItem} >Add</button>
      <div className="showItems">
       
       {
          Items.map((element,ind)=>{
            return(
              <div className="eachItem" key={ind} style={{justifyContent:"center", display:"flex",paddingTop:"10vh"}}>
              <h3 >{element}</h3>
              <button title ="Remove item" onClick={()=>del(ind)}>Remove</button>
              </div>
            )
          })

       }
       
       
       
        
      </div>

      {/* clear all items */}
      <div className="clear" style={{justifyContent:"center", display:"flex",paddingTop:"10vh"}}>
          <button title ="Add item" onClick={remove}>Remove All</button>
      </div>
    </div>
  );
}

export default App;
