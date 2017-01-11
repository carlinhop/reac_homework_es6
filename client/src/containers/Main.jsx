import React from 'react';

import Right from './Right'
import Left from './Left'


class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {songs: []};
  }

  loadSongs(url){
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status == 200){
        const jsonString = request.responseText;
        const songsList = JSON.parse(jsonString);
        this.setState({songs: songsList.feed.entry});
      }
    };
    request.send();
  }

  componentDidMount(){
    this.loadSongs(this.props.url);
  }

  render(){
    return (
      <div className="main">
        <Left songs={this.state.songs}/>
        <Right />
      </div>
    )
  }
}

export default Main