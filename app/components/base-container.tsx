import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {withTheme} from 'react-native-elements';

interface Props {
  withPadding?: boolean;
  theme?: any;
}

class BaseContainer extends PureComponent<Props, any> {
  render() {
    const {theme, children, withPadding} = this.props;
    // using inline styles to apply react-native-element theme
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: withPadding ? 24 : 0,
          backgroundColor: theme.colors.white,
        }}>
        {children}
      </View>
    );
  }
}

BaseContainer.defaultProps = {
  withPadding: true,
};

export default withTheme(BaseContainer);
