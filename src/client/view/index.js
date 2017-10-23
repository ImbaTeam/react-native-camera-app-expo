import React from "react";
import { Text, View } from "react-native";
import { Home, Camera as CameraComponent } from "./components";
import CameraExample from "../client_modules/uiComponents/Camera/Camera.js";

export default class Index extends React.Component {
  render() {
    return (
      <View style={this.props.styles.container}>
        {this.props.store.getState().route === "home" && <Home store={this.props.store} state={this.props.state} styles={this.props.styles} />}
        {/* {this.props.store.getState().route === "camera" && <CameraComponent store={this.props.store} state={this.props.state} styles={this.props.styles} />} */}
        {this.props.store.getState().route === "camera" && <CameraExample store={this.props.store} state={this.props.state} styles={this.props.styles} />}
      </View>
    );
  }
}
