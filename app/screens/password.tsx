import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input, Header, Avatar} from 'react-native-elements';
import {Formik} from 'formik';
import {withRouter} from 'react-router-native';
import {compose} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {translate} from '@app/i18n';
import {Text} from '@app/components';
import {RootState} from '@app/modules/store';
import {loginToGithub} from '@app/modules/user/user.thunk';
import {
  userPasswordValidationSchema,
  userPasswordInitialValues,
} from '@app/modules/user/user.formik';

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
  },
  padding: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

class PasswordScreen extends PureComponent {
  onSubmit = async (
    {username, password}: any,
    {setSubmitting, setErrors}: any,
  ) => {
    const {submitForm} = this.props as any;
    const result: boolean = await submitForm(username, password);
    setSubmitting(false);
    if (result) {
    } else {
      setErrors({password: translate('login.password_validation_1')});
    }
  };
  onBackPressed = () => {
    const {history} = this.props as any;
    history.goBack();
  };
  render() {
    const {tempUserDetails} = this.props as any;
    const {avatarUrl, username} = tempUserDetails;
    return (
      <Formik
        validationSchema={userPasswordValidationSchema}
        initialValues={userPasswordInitialValues}
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
          <View style={styles.root}>
            <Header
              leftComponent={
                <TouchableOpacity onPress={this.onBackPressed}>
                  <Icon name={'arrow-back'} size={24} color="#fff" />
                </TouchableOpacity>
              }
            />
            <View style={styles.padding}>
              <View style={styles.header}>
                <View style={styles.headerImageContainer}>
                  <Avatar rounded source={{uri: avatarUrl}} />
                </View>
                <View style={styles.headerImageContainer}>
                  <Text category="h1">
                    {translate('login.password_greetings')} {username}
                  </Text>
                  <Text
                    category="p1"
                    tx="login.password_greetings_description"
                  />
                </View>
              </View>
              <View style={styles.content}>
                <Input
                  label="Password / Access Token"
                  autoCapitalize="none"
                  value={values.password}
                  onChangeText={(value) => setFieldValue('password', value)}
                  onBlur={() => setFieldTouched('password')}
                  editable={!isSubmitting}
                  errorMessage={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                  secureTextEntry={true}
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
            </View>
          </View>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    tempUserDetails: state.user.tempUserDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    submitForm: (username: string, password: string) =>
      dispatch(loginToGithub(username, password)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(PasswordScreen);
