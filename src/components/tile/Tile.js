import React from "react";


export const Tile = (object) => {


  for(let i=0; i<object.length; i++){
    
  }

  return (

   
    <div className="tile-container">

      <p className='title-title' id='contactFont'>
        {object.value.title}
        
        {object.value.contact}
       
        {object.value.date}

        {object.value.time}
     
        {object.value.name}
    
        {object.value.phone}
     
        {object.value.email}
       
        {object.value.contact}
       
      </p>


 
    </div>

    
  );
};

export default Tile;