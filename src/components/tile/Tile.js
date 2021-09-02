import React from "react";

export const Tile = (object) => {


  for(let i=0; i<object.length; i++){
    
  }

  return (
    <div className="tile-container">
      <p className='title-title' id='contactFont'>
        {object.value.name}
        <br/>
        {object.value.phone}
        <br/>
        {object.value.email}
      </p>
      {/* <p className='title-title' id='contactFont'>
        {object.value.title}
        <br/>
        {object.value.contact}
        <br/>
        {object.value.date}
        <br/>
        {object.value.time}
      </p>
       */}
    </div>
  );
};

export default Tile;