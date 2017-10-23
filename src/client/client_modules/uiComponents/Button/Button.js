import React, {Component}  from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Button as Btn } from "react-native";
import style from "./Button.style.js";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={style.Button}>
        <Btn color={this.props.color} onPress={this.props.onPress} title={this.props.title} accessibilityLabel={this.props.accessibilityLabel}/>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
  accessibilityLabel: PropTypes.string
}

Button.defaultProps = {
  onPress: ()=>{},
  color: "black"
}
