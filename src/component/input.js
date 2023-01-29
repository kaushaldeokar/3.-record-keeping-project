import React , {useState} from 'react'

const input = (props) => {

  
  return (
    <div style={{justifyContent:"center", display:"flex",paddingTop:"10vh"}}>
      <input type="text" placeholder="add todos" value={props.value}
      onChange={(e)=>{
        props.dataSet(e.target.value);
      }}
      />
      <br />
      
    </div>
  )
}

export default input
