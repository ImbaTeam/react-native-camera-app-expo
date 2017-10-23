import Index from "./view/index.js";
import React, { Component } from "react";
import Styles from "./assets/style/index.style.js";

export default class App extends Component {
  render(){
    return (
      <Index styles={Styles}/>
    )
  }
};


export { App };
