import * as constants from "./constants.js";
import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false
});
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set("focused", true);
  }
  if (action.type === constants.SEARCH_BULR) {
    return state.set("focused", false);
  }
  return state;
};
