import React from 'react';

const Song = function({img}){

  

  return (<img src={img} draggable="true" onDragStart={function(e){
    
    e.dataTransfer.setData("text/plain",e.currentTarget.src);
  }}/>)
}

export default Song