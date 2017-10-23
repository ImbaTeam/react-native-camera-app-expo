import Index from "./view/index.js";
import React, { Component } from "react";
import Styles from "./assets/style/index.style.js";
import Store from "./client_modules/store/index.js";

export default class App extends Component {
  constructor(props){
    super(...props);
    this.state = {
      route: "home"
    }
    this.store = new Store(this.state);
    this.store.onStateChange((newState)=>{
      this.setState(newState)
    });
  }
  render(){
    return (
      <Index store={this.store} state={this.state} styles={Styles}/>
    )
  }
};


export { App };
