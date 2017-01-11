import React from 'react'
import Song from './Song'

const List = function({songs}){
  console.log(songs);
  let songList = songs.map((disc,index)=>{
    return (<Song title={disc.title.label} key={index}/>)
  });

  return (<div>{songList}</div>)
}

export default List