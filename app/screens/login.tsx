import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Image, View, StyleSheet} from 'react-native';
import {Button, Input, withTheme} from 'react-native-elements';
import {Formik} from 'formik';
import {compose} from 'redux';

import BaseContainer from '@app/components/base-container';
import {translate} from '@app/i18n';
import {Text} from '@app/components';
import {RootState} from '@app/modules/store';
import {checkUsername} from '@app/modules/user/user.thunk';
import {
  userLoginValidationSchema,
  userLoginInitialValues,
} from '@app/modules/user/user.formik';

const logoWhite = require('../assets/image/logo_white.png');
const logoBlack = require('../assets/image/logo_black.png');

const styles = StyleSheet.create({
  content: {
    flexGrow: 3,
    marginTop: 24,
  },
  footer: {
    height: 50,
  },
  header: {
    flexGrow: 2,
  },
  headerImage: {
    height: 50,
    width: 50,
  },
  headerImageContainer: {
    flexGrow: 2,
    justifyContent: 'flex-end',
  },
  headerTextContainer: {
    flexGrow: 3,
    justifyContent: 'center',
  },
  root: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

class LoginScreen extends PureComponent {
  onSubmit = async ({username}: any, {setSubmitting, setErrors}: any) => {
    const {submitForm, navigation} = this.props as any;
    const result = await submitForm(username);
    setSubmitting(false);
    if (result == null) {
      setErrors({username: translate('login.username_validation_2')});
    } else {
      navigation.push('password');
    }
  };
  render() {
    const {darkMode} = this.props as any;
    return (
      <Formik
        validationSchema={userLoginValidationSchema}
        initialValues={userLoginInitialValues}
        onSubmit={this.onSubmit}>
        {({
          setFieldValue,
          setFieldTouched,
          touched,
          errors,
          handleSubmit,
          values,
          isSubmitting,
        }) => (
          <BaseContainer>
            <SafeAreaView />
            <View style={styles.header}>
              <View style={styles.headerImageContainer}>
                <Image
                  source={darkMode ? logoWhite : logoBlack}
                  style={styles.headerImage}
                />
              </View>
              <View style={styles.headerImageContainer}>
                <Text h4 tx="login.greetings" />
                <Text h4 tx="login.greetings_description" />
              </View>
            </View>
            <View style={styles.content}>
              <Input
                label="Username"
                autoCapitalize="none"
                value={values.username}
                onChangeText={(value) => setFieldValue('username', value)}
                onBlur={() => setFieldTouched('username')}
                editable={!isSubmitting}
                errorMessage={
                  touched.username && errors.username
                    ? errors.username
                    : undefined
                }
                onSubmitEditing={handleSubmit}
                autoFocus={true}
              />
            </View>
            <SafeAreaView>
              <View style={styles.footer}>
                <Button
                  loading={isSubmitting}
                  title={translate('common.next')}
                  onPress={handleSubmit}
                />
              </View>
            </SafeAreaView>
          </BaseContainer>
        )}
      </Formik>
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
    submitForm: (username: string) => dispatch(checkUsername(username)),
  };
};

export default compose(
  withTheme,
  connect(mapStateToProps, mapDispatchToProps),
)(LoginScreen);
