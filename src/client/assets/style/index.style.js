import { StyleSheet } from 'react-native';
import * as Components from "./components/index.js";
const _ = {
  reduce: require("lodash/reduce")
}

let rootStyles = {
  root: {
    backgroundColor: "#fff",
    flex: 1
  },
}


rootStyles = _.reduce(Components,(rootStyle,curComponent,i,arr)=>{
  return Object.assign({},rootStyle,curComponent);
},rootStyles);

const styleSheet = StyleSheet.create(rootStyles);

export default styleSheet;
