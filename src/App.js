import React, {Component} from 'react';
import $ from "jquery";
import WhatWeDo from "./components/what we do/what-we-do";
import './App.css';

class App extends Component {
  
  //CONSTRUCTOR
  constructor(props)
  {
    super(props);

    this.state = { data : {} };
  }

  //SERVER
  getData() {
    $.ajax({
      url: "./data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  //RENDER
  render() {
    return(
      <div className='App'>
        <WhatWeDo data={this.state.data.what_we_do} />
      </div>
    );
  }
}

export default App;
