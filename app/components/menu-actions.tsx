import React, {PureComponent} from 'react';
import {BottomSheet, ListItem, withTheme, colors} from 'react-native-elements';
import colorsDark from 'react-native-elements/src/config/colorsDark';
import {connect} from 'react-redux';
import {compose} from '@reduxjs/toolkit';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {RootState} from '@app/modules/store';
import {toggleDarkMode} from '@app/modules/dark-mode/dark-mode.actions';
import {logout} from '@app/modules/user/user.thunk';
import {translate} from '@app/i18n';
import Icon from 'react-native-vector-icons/MaterialIcons';

// menu actions that contain dark mode switcher and logout button
class MenuActions extends PureComponent {
  state = {
    isVisible: false,
  };

  onClickLogout = async () => {
    const {onLogout} = this.props as any;
    await onLogout();
  };

  onClickChangeDarkMode = () => {
    const {changeDarkMode, darkMode, updateTheme} = this.props as any;
    changeDarkMode(!darkMode);
    this.toggleBottomSheet();
    updateTheme({colors: darkMode ? colors : colorsDark});
  };

  toggleBottomSheet = () => this.setState({isVisible: !this.state.isVisible});

  renderOpenBottomSheetButton = () => (
    <TouchableOpacity onPress={this.toggleBottomSheet}>
      <Icon name="menu" size={24} />
    </TouchableOpacity>
  );

  render() {
    const {isVisible} = this.state;
    const {darkMode} = this.props as any;
    return (
      <>
        {this.renderOpenBottomSheetButton()}
        <TouchableWithoutFeedback onPress={this.toggleBottomSheet}>
          <BottomSheet
            modalProps={{onRequestClose: this.toggleBottomSheet}}
            isVisible={isVisible}>
            <ListItem onPress={this.onClickChangeDarkMode}>
              <ListItem.Content>
                <ListItem.Title>
                  {darkMode
                    ? translate('settings.light_mode')
                    : translate('settings.dark_mode')}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem onPress={this.onClickLogout}>
              <ListItem.Content>
                <ListItem.Title>Logout</ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem onPress={this.toggleBottomSheet}>
              <ListItem.Content>
                <ListItem.Title>Close</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </BottomSheet>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => dispatch(logout()),
    changeDarkMode: (value: boolean) => dispatch(toggleDarkMode(value)),
  };
};

export default compose(
  withTheme,
  connect(mapStateToProps, mapDispatchToProps),
)(MenuActions);
