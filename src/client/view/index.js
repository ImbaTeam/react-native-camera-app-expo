import React from "react";
import { Text, View } from "react-native";
import { Home, Camera as CameraComponent } from "./components";

export default class Index extends React.Component {
  state = {
    route: "home"
  };
  render() {
    return (
      <View style={this.props.styles.container}>
        {this.state.route === "home" && <Home styles={this.props.styles} />}
        {this.state.route === "camera" && <CameraComponent styles={this.props.styles} />}
      </View>
    );
  }
}
