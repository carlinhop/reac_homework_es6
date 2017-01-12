import React from 'react'
import Song from './Song'

const List = function({songs}){
  
  let songList = songs.map((disc,index)=>{
    
    return (<Song img={disc["im:image"][2].label} key={index} id={index}/>)
  });

  return (<div className="left">{songList}</div>)
}

export default List