import React, {PureComponent} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {BaseContainer, CheckBox, MenuActions, Text} from '@app/components';
import CommitItemDisplay from '@app/components/commit-item';
import {actions} from '@app/modules/commit/commit.action.reducer.ts';
import repositorySelector from '@app/modules/commit/commit.selector';
import {loadNextPage} from '@app/modules/commit/commit.thunk';
import {RootState} from '@app/modules/store';
import {CommitItem, RepositoryItem} from '@app/schemas';
import {translate} from '@app/i18n';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 24,
  },
  empty: {
    alignItems: 'center',
    marginTop: 50,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  listHeaderView: {
    alignItems: 'flex-end',
    marginBottom: 12,
  },
});

class CommitScreen extends PureComponent {
  onPressBack = () => this.props.navigation.pop();

  renderTitle = (repository: string) => (
    <Header
      leftComponent={
        <TouchableOpacity onPress={this.onPressBack}>
          <Icon name={'arrow-back'} size={24} color="#000" />
        </TouchableOpacity>
      }
      centerComponent={<Text>{repository}</Text>}
      rightComponent={<MenuActions />}
    />
  );
  renderCommit = (commit: CommitItem, repository: string) => (
    <CommitItemDisplay
      repository={repository}
      key={commit.sha}
      commit={commit}
    />
  );

  onRefresh = async () => {
    const {onLoad, repository} = this.props as any;
    await onLoad(repository.repository, true);
  };

  onLoadMore = async () => {
    const {onLoad, repository} = this.props as any;
    await onLoad(repository.repository, false);
  };
  renderLoadMoreButton = () => {
    const {repository, loadingMore} = this.props as any;
    return (
      <SafeAreaView>
        <View style={styles.footer}>
          {repository.commits.length > 0 &&
            (repository.paginationDone ? (
              <Text tx="commits.no_more_data" />
            ) : loadingMore ? (
              <ActivityIndicator />
            ) : (
              <TouchableOpacity onPress={this.onLoadMore}>
                <Text tx="commits.load_more" />
              </TouchableOpacity>
            ))}
        </View>
      </SafeAreaView>
    );
  };

  onPressCheckbox = () => {
    const {onSetOnlyMyCommit, repository} = this.props as any;
    const {showOnlyMyCommit} = repository;
    onSetOnlyMyCommit(!showOnlyMyCommit);
    this.onRefresh();
  };

  renderListHeader = () => {
    const {repository} = this.props as any;
    const {showOnlyMyCommit} = repository;
    return (
      <View style={styles.listHeaderView}>
        <CheckBox
          title={translate('commits.show_only_my_commits')}
          checked={showOnlyMyCommit}
          onPress={this.onPressCheckbox}
        />
      </View>
    );
  };

  renderEmptyCommit = () => (
    <View style={styles.empty}>
      <Text tx="commits.commits_not_found" />
    </View>
  );

  render() {
    const {refreshing} = this.props as any;
    const currentRepository = this.props.repository;
    const {repository, commits} = currentRepository;
    return (
      <BaseContainer withPadding={false}>
        {this.renderTitle(repository)}
        <FlatList
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          style={styles.content}
          data={commits}
          ListEmptyComponent={this.renderEmptyCommit()}
          keyExtractor={(i) => i.sha}
          ListFooterComponent={this.renderLoadMoreButton()}
          ListHeaderComponent={this.renderListHeader()}
          renderItem={(item) => this.renderCommit(item.item, repository)}
        />
      </BaseContainer>
    );
  }
}

const mapStateToProps = (state: RootState, props: any) => {
  const repository = props.route.params.repository;
  return {
    repository: repositorySelector(state, {
      repository: repository,
    }),
    loadingMore: state.commit.loadingMore,
    refreshing: state.commit.refreshing,
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  const repository = props.route.params.repository;
  return {
    onLoad: (repositoryName: string, reset: boolean) =>
      dispatch(loadNextPage({repositoryName, reset})),
    onSetOnlyMyCommit: (value: boolean) =>
      dispatch(actions.setShowOnlyMyCommit({value, repository})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitScreen);
