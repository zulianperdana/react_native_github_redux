import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input, Header, Avatar} from 'react-native-elements';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BaseContainer from '@app/components/base-container';
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
  root: {
    flex: 1,
  },
});

class PasswordScreen extends PureComponent {
  onSubmit = async ({password}: any, {setSubmitting, setErrors}: any) => {
    const {submitForm, tempUserDetails} = this.props as any;
    const result: boolean = await submitForm(
      tempUserDetails.username,
      password,
    );
    setSubmitting(false);
    if (!result) {
      setErrors({password: translate('login.password_validation_1')});
    }
  };
  onBackPressed = () => {
    const {navigation} = this.props as any;
    navigation.pop();
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
            <BaseContainer>
              <View style={styles.header}>
                <View style={styles.headerImageContainer}>
                  <Avatar rounded source={{uri: avatarUrl}} />
                </View>
                <View style={styles.headerImageContainer}>
                  <Text h4>
                    {translate('login.password_greetings')} {username}
                  </Text>
                  <Text h4 tx="login.password_greetings_description" />
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
            </BaseContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordScreen);
