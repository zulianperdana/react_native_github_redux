import React, {PureComponent} from 'react';
import {withTheme, CheckBox} from 'react-native-elements';

interface Props {
  onPress: () => any;
  theme: any;
  checked: boolean;
  title: string;
}

// add react-native-elements theme to CheckBox
class BaseCheckbox extends PureComponent<Props, any> {
  render() {
    const {onPress, checked, title, theme} = this.props;
    const {colors} = theme;
    // using inline styles to apply react-native-element theme
    return (
      <CheckBox
        iconType="material"
        title={title}
        checked={checked}
        uncheckedColor={colors.black}
        containerStyle={{backgroundColor: colors.white}}
        checkedIcon="check-box"
        uncheckedIcon="check-box-outline-blank"
        onPress={onPress}
      />
    );
  }
}

export default withTheme(BaseCheckbox);
