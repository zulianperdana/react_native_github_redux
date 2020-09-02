export default [
  {
    sha: 'b5b4a7041027fd767850a564b5d80fa4a98ba2a2',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6YjViNGE3MDQxMDI3ZmQ3Njc4NTBhNTY0YjVkODBmYTRhOThiYTJhMg==',
    commit: {
      author: {
        name: 'Lulu Wu',
        email: 'luluwu@fb.com',
        date: '2020-09-02T12:26:50Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-02T12:28:49Z',
      },
      message:
        'Set caretHidden to true to fix the Xiaomi crash\n\nSummary:\nAfter monitoring scuba for a few days,  previous fixes(D23301714 D23331828 (https://github.com/facebook/react-native/commit/07a597ad185c8c31ac38bdd4d022b0b880d02859)) don\'t work as expected.\n\nI managed to test this issue on a Xiaomi device, the crash didn\'t happen but the there was a popup "Frequetly used email" on top of email edit text:\n\n{F317216473}\n\nGetting rid of the popup probably be the right fix.\n\nFor more context see https://github.com/facebook/react-native/issues/27204\n\nChangelog: [Android] - Set caretHidden to true to fix the Xiaomi crash\n\nReviewed By: mdvacca\n\nDifferential Revision: D23451929\n\nfbshipit-source-id: 521931422f3a46a056a9faa4b10fe93cf4732db0',
      tree: {
        sha: '5dd1ef61c243afdf70a2bb28e4fae443a0fb2f70',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/5dd1ef61c243afdf70a2bb28e4fae443a0fb2f70',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/b5b4a7041027fd767850a564b5d80fa4a98ba2a2',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/b5b4a7041027fd767850a564b5d80fa4a98ba2a2',
    html_url:
      'https://github.com/facebook/react-native/commit/b5b4a7041027fd767850a564b5d80fa4a98ba2a2',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/b5b4a7041027fd767850a564b5d80fa4a98ba2a2/comments',
    author: null,
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4',
        html_url:
          'https://github.com/facebook/react-native/commit/59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4',
      },
    ],
  },
  {
    sha: '59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6NTlkZGQ3Y2Q0YjZkZmNmMTRhZDlmNmZjYzMxMjc3YmY0ZjU1N2RiNA==',
    commit: {
      author: {
        name: 'Lulu Wu',
        email: 'luluwu@fb.com',
        date: '2020-09-02T09:59:06Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-02T10:00:57Z',
      },
      message:
        'Add memory pressure listener in ReactHost\n\nSummary:\nAdd memory pressure listener for ReactHost and ReactInstance\n\nChangelog: [Internal]\n\nReviewed By: ejanzer\n\nDifferential Revision: D23214241\n\nfbshipit-source-id: ec8476aeda8d9781d918ea41e5cab69fa862996e',
      tree: {
        sha: 'c589b44cacd1132fc0874c47ed640e2397cbe13a',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/c589b44cacd1132fc0874c47ed640e2397cbe13a',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4',
    html_url:
      'https://github.com/facebook/react-native/commit/59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/59ddd7cd4b6dfcf14ad9f6fcc31277bf4f557db4/comments',
    author: null,
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '6581c77d0a975413c802a2731bac1d38903bd0dd',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/6581c77d0a975413c802a2731bac1d38903bd0dd',
        html_url:
          'https://github.com/facebook/react-native/commit/6581c77d0a975413c802a2731bac1d38903bd0dd',
      },
    ],
  },
  {
    sha: '6581c77d0a975413c802a2731bac1d38903bd0dd',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6NjU4MWM3N2QwYTk3NTQxM2M4MDJhMjczMWJhYzFkMzg5MDNiZDBkZA==',
    commit: {
      author: {
        name: 'Ankit Tiwari',
        email: 'ankitt255@gmail.com',
        date: '2020-09-02T02:32:59Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-02T02:34:52Z',
      },
      message:
        "Refactor RNTester (#29777)\n\nSummary:\nThis PR tries to remove the code duplication between `RNTesterApp.ios.js` and `RNTesterApp.android.js`. The common code has been moved to `RNTesterAppShared.js`.\n\nThis PR also refactors the state architecture and simplifies it to use just one single `useReducer` hook to manage the app's state.\n\nIt also adds the visibility hack to make the screen change a little bit faster and removed the unneeded test files.\n\nPull Request resolved: https://github.com/facebook/react-native/pull/29777\n\nReviewed By: cpojer\n\nDifferential Revision: D23349302\n\nPulled By: rickhanlonii\n\nfbshipit-source-id: ce0d7b03e6ef65b1655bcb744817b73c5144438b",
      tree: {
        sha: '539eca50db713d4068ee078ee22706c31758301b',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/539eca50db713d4068ee078ee22706c31758301b',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/6581c77d0a975413c802a2731bac1d38903bd0dd',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/6581c77d0a975413c802a2731bac1d38903bd0dd',
    html_url:
      'https://github.com/facebook/react-native/commit/6581c77d0a975413c802a2731bac1d38903bd0dd',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/6581c77d0a975413c802a2731bac1d38903bd0dd/comments',
    author: {
      login: 'anku255',
      id: 22813027,
      node_id: 'MDQ6VXNlcjIyODEzMDI3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/22813027?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/anku255',
      html_url: 'https://github.com/anku255',
      followers_url: 'https://api.github.com/users/anku255/followers',
      following_url:
        'https://api.github.com/users/anku255/following{/other_user}',
      gists_url: 'https://api.github.com/users/anku255/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/anku255/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/anku255/subscriptions',
      organizations_url: 'https://api.github.com/users/anku255/orgs',
      repos_url: 'https://api.github.com/users/anku255/repos',
      events_url: 'https://api.github.com/users/anku255/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/anku255/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: 'abb6433f506851430dffb66f0dd34c1e70a223fe',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/abb6433f506851430dffb66f0dd34c1e70a223fe',
        html_url:
          'https://github.com/facebook/react-native/commit/abb6433f506851430dffb66f0dd34c1e70a223fe',
      },
    ],
  },
  {
    sha: 'abb6433f506851430dffb66f0dd34c1e70a223fe',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6YWJiNjQzM2Y1MDY4NTE0MzBkZmZiNjZmMGRkMzRjMWU3MGEyMjNmZQ==',
    commit: {
      author: {
        name: 'chirag-singhal',
        email: 'csinghal208@gmail.com',
        date: '2020-09-02T01:45:05Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-02T01:47:08Z',
      },
      message:
        'Fix RNTester Path (#29786)\n\nSummary:\n* Corrects running on android instructions for rn-tester\n * Corrects path for rn-tester in package.json, contributing.md and .buckconfig\n\n## Changelog\n\n[General] [Fixed] - Fix rn-tester path in documentation and configs\n\nPull Request resolved: https://github.com/facebook/react-native/pull/29786\n\nReviewed By: hramos\n\nDifferential Revision: D23441274\n\nPulled By: rickhanlonii\n\nfbshipit-source-id: 9454679335d3794b59a1e4c2e7eae23ed348a427',
      tree: {
        sha: '17ea013637defb44c441cd478a57a6ceb0264fc7',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/17ea013637defb44c441cd478a57a6ceb0264fc7',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/abb6433f506851430dffb66f0dd34c1e70a223fe',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/abb6433f506851430dffb66f0dd34c1e70a223fe',
    html_url:
      'https://github.com/facebook/react-native/commit/abb6433f506851430dffb66f0dd34c1e70a223fe',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/abb6433f506851430dffb66f0dd34c1e70a223fe/comments',
    author: {
      login: 'chirag-singhal',
      id: 42653703,
      node_id: 'MDQ6VXNlcjQyNjUzNzAz',
      avatar_url: 'https://avatars3.githubusercontent.com/u/42653703?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/chirag-singhal',
      html_url: 'https://github.com/chirag-singhal',
      followers_url: 'https://api.github.com/users/chirag-singhal/followers',
      following_url:
        'https://api.github.com/users/chirag-singhal/following{/other_user}',
      gists_url: 'https://api.github.com/users/chirag-singhal/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/chirag-singhal/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/chirag-singhal/subscriptions',
      organizations_url: 'https://api.github.com/users/chirag-singhal/orgs',
      repos_url: 'https://api.github.com/users/chirag-singhal/repos',
      events_url:
        'https://api.github.com/users/chirag-singhal/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/chirag-singhal/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38',
        html_url:
          'https://github.com/facebook/react-native/commit/3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38',
      },
    ],
  },
  {
    sha: '3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6M2E4NTU5Yjg2YzNjMGIwYWI2ZDZjNjkwNGM2ZWZkOTdhYjJjN2IzOA==',
    commit: {
      author: {
        name: 'Frieder Bluemle',
        email: 'frieder.bluemle@gmail.com',
        date: '2020-09-02T00:06:43Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-02T00:09:27Z',
      },
      message:
        "Use Gradle Wrapper 6.6 (-all variant) (#29793)\n\nSummary:\n`-all` is the **default** for projects generated by Android Studio, and it provides **additional sources** helpful for debugging. It's also much more likely to already exist on a developer's machine (which has built other Android projects), avoiding additional downloads and saving disk space.\n\n`-all` has also been the variant used in `react-native` for all versions prior to 5bc67b658e581e0176deb7ed95b51a5c1cbe65c2.\n\nFollow-up to https://github.com/facebook/react-native/issues/29613\n\n## Changelog\n\n[Android] [Changed] - Use Gradle Wrapper 6.6 (-all variant)\n\nPull Request resolved: https://github.com/facebook/react-native/pull/29793\n\nTest Plan: No test needed since versions are the same.\n\nReviewed By: fkgozali\n\nDifferential Revision: D23406546\n\nPulled By: mdvacca\n\nfbshipit-source-id: b74dbbfc0317bccf1940b1e5062d866e50aed28a",
      tree: {
        sha: 'cef2f00c355fee83fcf80f9850c7d64ccf709601',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/cef2f00c355fee83fcf80f9850c7d64ccf709601',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38',
    html_url:
      'https://github.com/facebook/react-native/commit/3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38/comments',
    author: {
      login: 'friederbluemle',
      id: 743291,
      node_id: 'MDQ6VXNlcjc0MzI5MQ==',
      avatar_url: 'https://avatars0.githubusercontent.com/u/743291?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/friederbluemle',
      html_url: 'https://github.com/friederbluemle',
      followers_url: 'https://api.github.com/users/friederbluemle/followers',
      following_url:
        'https://api.github.com/users/friederbluemle/following{/other_user}',
      gists_url: 'https://api.github.com/users/friederbluemle/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/friederbluemle/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/friederbluemle/subscriptions',
      organizations_url: 'https://api.github.com/users/friederbluemle/orgs',
      repos_url: 'https://api.github.com/users/friederbluemle/repos',
      events_url:
        'https://api.github.com/users/friederbluemle/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/friederbluemle/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '7d6d5daa2b8622c671ce279774f915dd9b4543c2',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/7d6d5daa2b8622c671ce279774f915dd9b4543c2',
        html_url:
          'https://github.com/facebook/react-native/commit/7d6d5daa2b8622c671ce279774f915dd9b4543c2',
      },
    ],
  },
  {
    sha: '7d6d5daa2b8622c671ce279774f915dd9b4543c2',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6N2Q2ZDVkYWEyYjg2MjJjNjcxY2UyNzk3NzRmOTE1ZGQ5YjQ1NDNjMg==',
    commit: {
      author: {
        name: 'David Vacca',
        email: 'dvacca@fb.com',
        date: '2020-09-02T00:06:43Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-02T00:09:27Z',
      },
      message:
        'Refactor caching of Spannable objects instide TextLayoutManager\n\nSummary:\nThis diff optimizes the caching of Spannable objects managed by the TextLayoutManager class.\nPreviously, these objects were cached using unsing a String representation of the RedableMap (creating this string adds a non trivial cost), this diff improves the caching performance relying on the equals / hashcode methods of the ReadableNativeMap class\n\nI created a MC just to have a killswitch\n\nMotivation: I was analysing another bug and I found this non performant code\n\nchangelog: [internal] internal\n\nReviewed By: shergin\n\nDifferential Revision: D23429365\n\nfbshipit-source-id: 59e5ad0b1b95da992ac393aecfe029da68a8df97',
      tree: {
        sha: '0682b068c09951ced2f34220e203914f22257d2d',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/0682b068c09951ced2f34220e203914f22257d2d',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/7d6d5daa2b8622c671ce279774f915dd9b4543c2',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/7d6d5daa2b8622c671ce279774f915dd9b4543c2',
    html_url:
      'https://github.com/facebook/react-native/commit/7d6d5daa2b8622c671ce279774f915dd9b4543c2',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/7d6d5daa2b8622c671ce279774f915dd9b4543c2/comments',
    author: {
      login: 'mdvacca',
      id: 515103,
      node_id: 'MDQ6VXNlcjUxNTEwMw==',
      avatar_url: 'https://avatars0.githubusercontent.com/u/515103?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mdvacca',
      html_url: 'https://github.com/mdvacca',
      followers_url: 'https://api.github.com/users/mdvacca/followers',
      following_url:
        'https://api.github.com/users/mdvacca/following{/other_user}',
      gists_url: 'https://api.github.com/users/mdvacca/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/mdvacca/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mdvacca/subscriptions',
      organizations_url: 'https://api.github.com/users/mdvacca/orgs',
      repos_url: 'https://api.github.com/users/mdvacca/repos',
      events_url: 'https://api.github.com/users/mdvacca/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/mdvacca/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '045d8fe8c391c9ee70f8d6f84a49e1390c416279',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/045d8fe8c391c9ee70f8d6f84a49e1390c416279',
        html_url:
          'https://github.com/facebook/react-native/commit/045d8fe8c391c9ee70f8d6f84a49e1390c416279',
      },
    ],
  },
  {
    sha: '045d8fe8c391c9ee70f8d6f84a49e1390c416279',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6MDQ1ZDhmZThjMzkxYzllZTcwZjhkNmY4NGE0OWUxMzkwYzQxNjI3OQ==',
    commit: {
      author: {
        name: 'Emily Janzer',
        email: 'janzer@fb.com',
        date: '2020-09-01T23:44:54Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-01T23:47:14Z',
      },
      message:
        'Revert D23426786: Prevent ScrollView From Stealing Responder Capture When Using Physical Keyboard\n\nDifferential Revision:\nD23426786 (https://github.com/facebook/react-native/commit/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243)\n\nOriginal commit changeset: 7138ef0bc450\n\nfbshipit-source-id: 363d18e68390c2cbc3dabd3cba343ddd313a8b23',
      tree: {
        sha: '726aabb074b986a4e7b31981baa75ff21af3ccae',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/726aabb074b986a4e7b31981baa75ff21af3ccae',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/045d8fe8c391c9ee70f8d6f84a49e1390c416279',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/045d8fe8c391c9ee70f8d6f84a49e1390c416279',
    html_url:
      'https://github.com/facebook/react-native/commit/045d8fe8c391c9ee70f8d6f84a49e1390c416279',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/045d8fe8c391c9ee70f8d6f84a49e1390c416279/comments',
    author: {
      login: 'ejanzer',
      id: 2308395,
      node_id: 'MDQ6VXNlcjIzMDgzOTU=',
      avatar_url: 'https://avatars1.githubusercontent.com/u/2308395?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ejanzer',
      html_url: 'https://github.com/ejanzer',
      followers_url: 'https://api.github.com/users/ejanzer/followers',
      following_url:
        'https://api.github.com/users/ejanzer/following{/other_user}',
      gists_url: 'https://api.github.com/users/ejanzer/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/ejanzer/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ejanzer/subscriptions',
      organizations_url: 'https://api.github.com/users/ejanzer/orgs',
      repos_url: 'https://api.github.com/users/ejanzer/repos',
      events_url: 'https://api.github.com/users/ejanzer/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/ejanzer/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '345baf477cd708cf2f5b90cae8ddc1c312023e11',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/345baf477cd708cf2f5b90cae8ddc1c312023e11',
        html_url:
          'https://github.com/facebook/react-native/commit/345baf477cd708cf2f5b90cae8ddc1c312023e11',
      },
    ],
  },
  {
    sha: '345baf477cd708cf2f5b90cae8ddc1c312023e11',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6MzQ1YmFmNDc3Y2Q3MDhjZjJmNWI5MGNhZThkZGMxYzMxMjAyM2UxMQ==',
    commit: {
      author: {
        name: 'Moti Zilberman',
        email: 'moti@fb.com',
        date: '2020-09-01T14:30:37Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-09-01T14:32:57Z',
      },
      message:
        'Fix reorder-init-list warning in RCTViewComponentView\n\nSummary:\nChanges the order of `RCTBorderColors` field designators to match their declaration order, fixing one case of `-Wreorder-init-list` when compiling the RN codebase with Xcode 12.\n\nChangelog: [Internal]\n\nReviewed By: MichaReiser\n\nDifferential Revision: D23447685\n\nfbshipit-source-id: f04a3841187f0869d2efb60e81ce075c45f27f3c',
      tree: {
        sha: 'f7eea3c9e97b3eb11baf367ddfec0034fc22654b',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/f7eea3c9e97b3eb11baf367ddfec0034fc22654b',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/345baf477cd708cf2f5b90cae8ddc1c312023e11',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/345baf477cd708cf2f5b90cae8ddc1c312023e11',
    html_url:
      'https://github.com/facebook/react-native/commit/345baf477cd708cf2f5b90cae8ddc1c312023e11',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/345baf477cd708cf2f5b90cae8ddc1c312023e11/comments',
    author: {
      login: 'motiz88',
      id: 2246565,
      node_id: 'MDQ6VXNlcjIyNDY1NjU=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/2246565?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/motiz88',
      html_url: 'https://github.com/motiz88',
      followers_url: 'https://api.github.com/users/motiz88/followers',
      following_url:
        'https://api.github.com/users/motiz88/following{/other_user}',
      gists_url: 'https://api.github.com/users/motiz88/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/motiz88/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/motiz88/subscriptions',
      organizations_url: 'https://api.github.com/users/motiz88/orgs',
      repos_url: 'https://api.github.com/users/motiz88/repos',
      events_url: 'https://api.github.com/users/motiz88/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/motiz88/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '93e7a7a70dc2f41fccd3c1e4cce80d92913c4243',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243',
        html_url:
          'https://github.com/facebook/react-native/commit/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243',
      },
    ],
  },
  {
    sha: '93e7a7a70dc2f41fccd3c1e4cce80d92913c4243',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6OTNlN2E3YTcwZGMyZjQxZmNjZDNjMWU0Y2NlODBkOTI5MTNjNDI0Mw==',
    commit: {
      author: {
        name: 'Nick Gerleman',
        email: 'ngerlem@microsoft.com',
        date: '2020-08-31T21:49:31Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-08-31T21:51:39Z',
      },
      message:
        'Prevent ScrollView From Stealing Responder Capture When Using Physical Keyboard (#29798)\n\nSummary:\nFixes https://github.com/microsoft/react-native-windows/issues/5867\n\nScrollResponder has logic so that the first tap exiting out of a soft keyboard is captured instead of leaking to its children. This state is checked by testing if `TextInputState.currentlyFocusedInput()` is non-null. This also fires in cases a soft keyboard is not present (e.g. on Desktop where a physical keyboard is in use). This presents to users as clicks/taps not being registered when moving from a TextInput to something esle.\n\nInstead of checking TextInputState to see if the softKeyboard is open, check `this.keyboardWillOpenTo`, which is tied to keyboard open and close events.\n\n## Changelog\n\n[General] [Fixed] - Prevent ScrollView From Stealing Responder Capture When Using Physical Keyboard\n\nPull Request resolved: https://github.com/facebook/react-native/pull/29798\n\nTest Plan: Validated that on react-native-windows, ScrollView will capture responder events when tapped and a soft-keyboard is open, but will not capture events when clicking from a TextView to a child of a ScrollView and no soft keyboard is open.\n\nReviewed By: kacieb\n\nDifferential Revision: D23426786\n\nPulled By: TheSavior\n\nfbshipit-source-id: 7138ef0bc4508aaec5531f455b022b105b5d858a',
      tree: {
        sha: 'a9a7041370234809e7f049fd39dff4396dba7b8e',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/a9a7041370234809e7f049fd39dff4396dba7b8e',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243',
    html_url:
      'https://github.com/facebook/react-native/commit/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243/comments',
    author: {
      login: 'NickGerleman',
      id: 835219,
      node_id: 'MDQ6VXNlcjgzNTIxOQ==',
      avatar_url: 'https://avatars3.githubusercontent.com/u/835219?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/NickGerleman',
      html_url: 'https://github.com/NickGerleman',
      followers_url: 'https://api.github.com/users/NickGerleman/followers',
      following_url:
        'https://api.github.com/users/NickGerleman/following{/other_user}',
      gists_url: 'https://api.github.com/users/NickGerleman/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/NickGerleman/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/NickGerleman/subscriptions',
      organizations_url: 'https://api.github.com/users/NickGerleman/orgs',
      repos_url: 'https://api.github.com/users/NickGerleman/repos',
      events_url: 'https://api.github.com/users/NickGerleman/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/NickGerleman/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: 'b231e3ab41a017fd8ac9feaae1b06d360396aedc',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/b231e3ab41a017fd8ac9feaae1b06d360396aedc',
        html_url:
          'https://github.com/facebook/react-native/commit/b231e3ab41a017fd8ac9feaae1b06d360396aedc',
      },
    ],
  },
  {
    sha: 'b231e3ab41a017fd8ac9feaae1b06d360396aedc',
    node_id:
      'MDY6Q29tbWl0MjkwMjg3NzU6YjIzMWUzYWI0MWEwMTdmZDhhYzlmZWFhZTFiMDZkMzYwMzk2YWVkYw==',
    commit: {
      author: {
        name: 'Peter Argany',
        email: 'petetheheat@fb.com',
        date: '2020-08-31T18:36:43Z',
      },
      committer: {
        name: 'Facebook GitHub Bot',
        email: 'facebook-github-bot@users.noreply.github.com',
        date: '2020-08-31T18:39:54Z',
      },
      message:
        "Fix CircleCI breakage in RCTPropsAnimatedNode (#29800)\n\nSummary:\nPull Request resolved: https://github.com/facebook/react-native/pull/29800\n\nI changed this line in D23272735 (https://github.com/facebook/react-native/commit/700960c9f1a27a12d703b4f0a17673690799f019), to conform to normal ObjC semantics: impl files can import their header by file name.\n\nI forgot that their's some special linking logic happening in this directory that doesn't allow for this import type.\n\nThis diff just reverts one line to fix CircleCI builds.\n\nChangelog: [Internal]\n\nReviewed By: shergin\n\nDifferential Revision: D23399893\n\nfbshipit-source-id: 976199c659522effd632aaeb38616d0d6c962f1f",
      tree: {
        sha: '2d4228b77069aba0129475ae9f94220751bb2e59',
        url:
          'https://api.github.com/repos/facebook/react-native/git/trees/2d4228b77069aba0129475ae9f94220751bb2e59',
      },
      url:
        'https://api.github.com/repos/facebook/react-native/git/commits/b231e3ab41a017fd8ac9feaae1b06d360396aedc',
      comment_count: 0,
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null,
      },
    },
    url:
      'https://api.github.com/repos/facebook/react-native/commits/b231e3ab41a017fd8ac9feaae1b06d360396aedc',
    html_url:
      'https://github.com/facebook/react-native/commit/b231e3ab41a017fd8ac9feaae1b06d360396aedc',
    comments_url:
      'https://api.github.com/repos/facebook/react-native/commits/b231e3ab41a017fd8ac9feaae1b06d360396aedc/comments',
    author: {
      login: 'PeteTheHeat',
      id: 6011080,
      node_id: 'MDQ6VXNlcjYwMTEwODA=',
      avatar_url: 'https://avatars0.githubusercontent.com/u/6011080?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/PeteTheHeat',
      html_url: 'https://github.com/PeteTheHeat',
      followers_url: 'https://api.github.com/users/PeteTheHeat/followers',
      following_url:
        'https://api.github.com/users/PeteTheHeat/following{/other_user}',
      gists_url: 'https://api.github.com/users/PeteTheHeat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/PeteTheHeat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/PeteTheHeat/subscriptions',
      organizations_url: 'https://api.github.com/users/PeteTheHeat/orgs',
      repos_url: 'https://api.github.com/users/PeteTheHeat/repos',
      events_url: 'https://api.github.com/users/PeteTheHeat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/PeteTheHeat/received_events',
      type: 'User',
      site_admin: false,
    },
    committer: {
      login: 'facebook-github-bot',
      id: 6422482,
      node_id: 'MDQ6VXNlcjY0MjI0ODI=',
      avatar_url: 'https://avatars3.githubusercontent.com/u/6422482?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/facebook-github-bot',
      html_url: 'https://github.com/facebook-github-bot',
      followers_url:
        'https://api.github.com/users/facebook-github-bot/followers',
      following_url:
        'https://api.github.com/users/facebook-github-bot/following{/other_user}',
      gists_url:
        'https://api.github.com/users/facebook-github-bot/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/facebook-github-bot/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/facebook-github-bot/subscriptions',
      organizations_url:
        'https://api.github.com/users/facebook-github-bot/orgs',
      repos_url: 'https://api.github.com/users/facebook-github-bot/repos',
      events_url:
        'https://api.github.com/users/facebook-github-bot/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/facebook-github-bot/received_events',
      type: 'User',
      site_admin: false,
    },
    parents: [
      {
        sha: '05abbd245c2326b12d24698bb13007a7ce11e586',
        url:
          'https://api.github.com/repos/facebook/react-native/commits/05abbd245c2326b12d24698bb13007a7ce11e586',
        html_url:
          'https://github.com/facebook/react-native/commit/05abbd245c2326b12d24698bb13007a7ce11e586',
      },
    ],
  },
];
