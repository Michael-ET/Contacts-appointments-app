import React from "react";


export const Tile = (object) => {


  for(let i=0; i<object.length; i++){
    
  }

  return (
    
    <div className="tile-container">
      <div className='title-title'>
        {object.value.title ? <p id='contactFont'>{object.value.title} with {object.value.contact}<br></br>{object.value.date} at {object.value.time}</p> : <p id='contactFont'>{object.value.name} - {object.value.phone} - {object.value.email}</p> }
      </div>
    </div>
    
  );
};

export default Tile;