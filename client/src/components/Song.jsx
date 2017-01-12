import React from 'react';

const Song = function(props){

  

  return (<img src={props.img} draggable="true" onDragStart={function(e){
      
    e.dataTransfer.setData("text/plain",e.currentTarget.id);


  }} id={(props.id)}/>)
}

export default Song