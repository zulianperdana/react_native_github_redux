import * as ACTIONS from './dark-mode.actionTypes';

export function toggleDarkMode(value: boolean) {
  return {type: ACTIONS.TOGGLE_DARK_MODE, payload: {value}};
}
