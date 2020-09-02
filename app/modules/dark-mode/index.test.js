import {darkModeReducer as reducer} from './dark-mode.reducer';
import {toggleDarkMode} from './dark-mode.actions';

describe('darkmode reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });

  it('should handle TOGGLE_DARK_MODE', () => {
    expect(reducer(undefined, toggleDarkMode(true))).toEqual(true);

    expect(reducer(undefined, toggleDarkMode(false))).toEqual(false);
  });
});
