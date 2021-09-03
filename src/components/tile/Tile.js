import React from "react";


export const Tile = (object) => {


  for(let i=0; i<object.length; i++){
    
  }

  return (

   
    <div className="tile-container">

      <div className='title-title' id='contactFont'>
        <p>{object.value.name} {object.value.phone} {object.value.email}</p>
        <p>{object.value.title} with {object.value.contact}</p>
        <p>{object.value.date} at {object.value.time}</p>
 
      </div>
    </div>

    
  );
};

export default Tile;