import * as reducers from "./reducers.js";
import * as actions from "./actions.js";


export default class Store {
  constructor(state){
    this.state = {
      ...state
    };

    this.stateChangeCb = null;

    this.dispatch = this.dispatch.bind(this);
    this.getActions = this.getActions.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.getState = this.getState.bind(this);
  }
  dispatch(action){
    if(reducers.hasOwnProperty(action.type)){
      let newState = JSON.parse(JSON.stringify(reducers[action.type](this.state,action)));
      this.stateChangeCb(newState);

    } else {
      console.error(`No Reducer of ${action.type}`);
    }
  }
  getActions(){
    return actions;
  }
  onStateChange(cb){
    this.stateChangeCb = cb;
  }
  getState(){
    return this.state;
  }
}
