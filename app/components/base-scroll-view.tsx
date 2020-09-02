import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import {withTheme} from 'react-native-elements';

class BaseScrollView extends PureComponent {
  render() {
    const {theme, children} = this.props as any;
    // using inline styles to apply react-native-element theme
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme.colors.white,
        }}>
        {children}
      </ScrollView>
    );
  }
}

export default withTheme(BaseScrollView);
