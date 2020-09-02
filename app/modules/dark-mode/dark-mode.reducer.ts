// This is the vanilla way to create redux module(actions,reducers,thunk),
// this can also be done using Redux Toolkit https://redux-toolkit.js.org/tutorials/basic-tutorial
// please see commit module for Redux Toolkit implementation
import * as ACTIONS from './dark-mode.actionTypes';

const initialState: boolean = false;

export function darkModeReducer(
  state: boolean = initialState,
  {payload, type}: any,
): boolean {
  switch (type) {
    case ACTIONS.TOGGLE_DARK_MODE:
      return payload.value;
    default:
      return state;
  }
}
