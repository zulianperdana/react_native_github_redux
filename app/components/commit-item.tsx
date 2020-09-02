import React, {PureComponent} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Text} from './text';
import {UserDetails} from '@app/schemas';
import TimeAgo from 'react-timeago';
import {Avatar, Card, Button} from 'react-native-elements';
import enStrings from 'react-timeago/lib/language-strings/en';
import idStrings from 'react-timeago/lib/language-strings/id';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import i18n from 'i18n-js';
import {translate} from '@app/i18n';

const enFormatter = buildFormatter(enStrings);
const idFormatter = buildFormatter(idStrings);

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: 6,
  },
  avatarNameContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  avatarText: {
    flexGrow: 1,
    marginLeft: 12,
  },
  cardTitle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginBottom: 12,
  },
  root: {
    flexDirection: 'column',
  },
});

export interface CommitItemDisplayProps {
  commit: any;
  repository: string;
}

// render commit item
export default class CommitItemDisplay extends PureComponent {
  timeAgoRenderer = (props: any) => <Text {...props} />;
  renderTimeago = (time: Date) => (
    <TimeAgo
      date={time}
      component={this.timeAgoRenderer}
      formatter={i18n.locale === 'en' ? enFormatter : idFormatter}
    />
  );
  renderAvatar = (user: UserDetails, type: string, time: Date) => {
    const date = new Date(time);
    const dateTime = `${date.toDateString()} ${date.toLocaleTimeString()}`;
    return (
      <View style={styles.avatarContainer}>
        <View style={styles.avatarNameContainer}>
          <Avatar source={{uri: user.avatarUrl}} />
          <Text style={styles.avatarText}>
            {user.username} {type}
          </Text>
        </View>
        <Text>{dateTime}</Text>
      </View>
    );
  };
  renderFooter = (commentCount: number, repository: string, sha: string) => (
    <View>
      <Button
        onPress={() =>
          Linking.openURL(`https://github.com/${repository}/commit/${sha}`)
        }
        title={`${translate(
          'commits.see_details',
        )} (${commentCount}) ${translate('commits.comments')}`}
      />
    </View>
  );
  render() {
    const {commit, repository} = this.props;
    const {
      author,
      authorTime,
      commentCount,
      commiterTime,
      committer,
      message,
      sha,
    } = commit;
    return (
      <Card>
        <View style={styles.cardTitle}>
          {author.username !== '' &&
            this.renderAvatar(author, 'authored', authorTime)}
          {committer.username !== '' &&
            committer.username !== author.username &&
            this.renderAvatar(committer, 'committed', commiterTime)}
        </View>
        <View style={styles.root}>
          <Text>{message}</Text>
          {this.renderFooter(commentCount, repository, sha)}
        </View>
      </Card>
    );
  }
}
