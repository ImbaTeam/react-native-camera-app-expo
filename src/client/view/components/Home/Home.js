import React from "react";
import { Text, View } from "react-native";

import Button from "../../../client_modules/uiComponents/Button/Button.js";

export default class Home extends React.Component {
  render() {
    onBtnPress = () => {
      console.log("press btn");
    }
    console.log(this.props.styles);
    return (
      <View style={this.props.styles.container}>
        <Button color={"black"} onPress={this.onBtnPress} title="Press Me" accessibilityLabel="Click This Button To Start"/>
      </View>
    );
  }
}
