import React from 'react'
import Song from './Song'

const List = function({songs}){

  let songList = [{title: "disc1"}].map((disc,index)=>{
    return (<Song title={disc.title} key={index}/>)
  });

  return (<div>{songList}</div>)
}

export default List