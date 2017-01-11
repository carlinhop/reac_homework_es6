import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main'

window.onload = function(){
  ReactDOM.render(
    <Main url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json'> </Main>,
    document.getElementById('app')
  );
}
