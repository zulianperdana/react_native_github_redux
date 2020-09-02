import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {withTheme} from 'react-native-elements';

class BaseContainer extends PureComponent {
  render() {
    const {theme, children} = this.props as any;
    // using inline styles to apply react-native-element theme
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          backgroundColor: theme.colors.white,
        }}>
        {children}
      </View>
    );
  }
}

export default withTheme(BaseContainer);
