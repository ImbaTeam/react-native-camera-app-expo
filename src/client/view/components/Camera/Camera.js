import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";

export default class CameraContainer extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };
  async componentWillMount() {
    console.log("here");
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    console.log(status);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      console.log("here2");
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: "black",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  alignSelf: "flex-end",
                  alignItems: "center",
                  "backgroundColor": "red"
                }}
                onPress={() => {
                  console.log("pressed");
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
