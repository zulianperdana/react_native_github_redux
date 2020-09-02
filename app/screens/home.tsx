import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Card, Input, withTheme, Avatar, Header} from 'react-native-elements';
import {Formik} from 'formik';
import {compose} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {translate} from '@app/i18n';
import {Text} from '@app/components';
import {RootState} from '@app/modules/store';
import {loadRepository} from '@app/modules/commit/commit.thunk';
import {fetchSuggestions} from '@app/modules/search/search.thunk';
import {
  replaceSuggestions,
  addToSearchHistory,
} from '@app/modules/search/search.actions';
import {MenuActions, BaseScrollView} from '@app/components';
import {
  searchRepositoryValidationSchema,
  searchRepositoryInitialValues,
} from '@app/modules/search/search.formik';

const styles = StyleSheet.create({
  body: {
    padding: 24,
  },
  card: {
    marginTop: 18,
  },
  repositoryItem: {
    marginBottom: 12,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarStyle: {
    marginRight: 12,
  },
});

class HomeScreen extends PureComponent {
  onSubmit = async ({repository}: any, {setSubmitting, setErrors}: any) => {
    const {submitForm, navigation, addToSearchHistory} = this.props as any;
    const result = await submitForm(repository);
    setSubmitting(false);
    if (!result.payload) {
      setErrors({repository: translate('home.repository_not_found')});
    } else {
      addToSearchHistory(repository);
      navigation.push('commit', {repository});
    }
  };

  renderTitle = () => {
    const {userDetails} = this.props.user;
    const {username, avatarUrl} = userDetails;
    return (
      <View style={styles.titleContainer}>
        <Avatar
          containerStyle={styles.avatarStyle}
          rounded
          source={{uri: avatarUrl}}
        />
        <Text>{username}</Text>
      </View>
    );
  };

  renderCloseIcon = (resetForm, setFieldValue) => {
    const {clearSuggestions} = this.props as any;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          resetForm({repository: ''});
          setFieldValue('repository', '');
          clearSuggestions();
        }}>
        <Icon name="close" size={24} />
      </TouchableWithoutFeedback>
    );
  };
  renderLoadingIndicator = () => <ActivityIndicator />;

  renderOption = (item: any, setFieldValue, handleSubmit) => {
    return (
      <TouchableOpacity
        style={styles.repositoryItem}
        key={item}
        onPress={() => {
          setFieldValue('repository', item);
          handleSubmit();
        }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  renderCardHeader = () => <Text tx="home.search_histories" />;
  renderSuggestionsCardHeader = () => <Text tx="home.search_suggestions" />;
  searchHistoryItem = (item: string) => {
    const {navigation} = this.props as any;
    return (
      <TouchableOpacity
        style={styles.repositoryItem}
        key={item}
        onPress={() => navigation.push('commit', {repository: item})}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {search, onFetchSuggestions} = this.props as any;
    const {searchSuggestions, searchHistories} = search;
    return (
      <BaseScrollView>
        <Header
          leftComponent={this.renderTitle()}
          rightComponent={<MenuActions />}
        />
        <Formik
          validationSchema={searchRepositoryValidationSchema}
          initialValues={searchRepositoryInitialValues}
          onSubmit={this.onSubmit}>
          {({
            setFieldValue,
            setFieldTouched,
            touched,
            errors,
            handleSubmit,
            values,
            isSubmitting,
            resetForm,
          }) => (
            <View style={styles.body}>
              <Input
                label={translate('home.search_label')}
                autoCapitalize="none"
                value={values.repository}
                onChangeText={(value) => {
                  onFetchSuggestions(value);
                  setFieldValue('repository', value);
                }}
                onBlur={() => setFieldTouched('repository')}
                editable={!isSubmitting}
                rightIcon={
                  isSubmitting
                    ? this.renderLoadingIndicator()
                    : this.renderCloseIcon(resetForm, setFieldValue)
                }
                errorMessage={
                  touched.repository && errors.repository
                    ? errors.repository
                    : undefined
                }
                onSubmitEditing={handleSubmit}
                autoFocus={true}
              />
              {searchSuggestions.length > 0 && (
                <Card containerStyle={styles.card}>
                  <Card.Title>{this.renderSuggestionsCardHeader()}</Card.Title>
                  <Card.Divider />
                  {searchSuggestions.map((s) =>
                    this.renderOption(s, setFieldValue, handleSubmit),
                  )}
                </Card>
              )}
              {searchHistories.length > 0 && (
                <Card containerStyle={styles.card}>
                  <Card.Title>{this.renderCardHeader()}</Card.Title>
                  <Card.Divider />
                  {searchHistories.map(this.searchHistoryItem)}
                </Card>
              )}
            </View>
          )}
        </Formik>
        <SafeAreaView />
      </BaseScrollView>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    search: state.search,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchSuggestions: (repository: string) =>
      dispatch(fetchSuggestions(repository)),
    submitForm: (repository: string) => dispatch(loadRepository(repository)),
    addToSearchHistory: (repository: string) =>
      dispatch(addToSearchHistory(repository)),
    clearSuggestions: () => dispatch(replaceSuggestions([])),
  };
};

export default compose(
  withTheme,
  connect(mapStateToProps, mapDispatchToProps),
)(HomeScreen);
