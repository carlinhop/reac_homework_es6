import React from 'react';
import List from '../components/List'

const Right = function(props){
  return (<div className="right" onDragEnter={function(e){
    e.preventDefault();
    console.dir(e);
  }} onDragOver={function(e){
    e.preventDefault();
  }} onDrop={function(e){
    e.preventDefault();
    
    let imageSrc = e.dataTransfer.getData("text");
    let right = document.querySelector(".right");
    
    let img = new Image();
    img.src = imageSrc;
    
    right.appendChild(img);

    
  }}>Placeholder</div>)
}

export default Right

// left.addEventListener("dragstart", 
// function(event){
// //event.preventDefault();
// event.dataTransfer.setData("text/plain",event.currentTarget.innerText);
// //console.dir(event);
// }, false);

// right.addEventListener("dragenter",
// function(event){
// event.preventDefault();
// console.dir(event);;
// }, false);

// right.addEventListener("dragover",
// function(event){
// event.preventDefault();
// //console.log(event);
// }, false);

// right.addEventListener("drop",
// function(event){
// event.preventDefault();
// right.innerText = event.dataTransfer.getData("text/plain");
// }, false);