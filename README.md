#  React Native Github Redux

React Native Github Commit Explorer.

## Improvements:
 - Using Redux,Redux Thunk, React-Native-Elements and Formik
 - Trying my best to follow all best practices
 - Inject auth into Api Instance
 - Complete rewrite from scratch
 - Unit test for redix and thunk

## Main Features:

- Login using your GitHub account with password / personal access token (only works with account with no 2 Factor Auth)
- Browse commit by repository
- Offline Capability, you can access your search history and their commits without internet connection
- Dark Mode 
- Internationalization (support en and id, you can change the settings through your phone Language Settings)

## Extra Features:

- Search Repository Suggestions
- Pagination
- Filter commits made by you
- Access private repository

## Security:

- Your credential is stored securely with [https://github.com/oblador/react-native-keychain](https://github.com/oblador/react-native-keychain)

## Screenshoots

1             |  2
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/zulianperdana/react_native_github_redux/master/screenshoots/ss6.png)  |  ![](https://raw.githubusercontent.com/zulianperdana/react_native_github_redux/master/screenshoots/ss7.png)

3             |  4
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/zulianperdana/react_native_github_redux/master/screenshoots/ss8.png)  |  ![](https://raw.githubusercontent.com/zulianperdana/react_native_github_redux/master/screenshoots/ss9.png)


## Quick Start

Make sure you have your React Native environment set up.
```
1. git clone https://github.com/zulianperdana/react_native_github.git
2. cd react_native_github
3. yarn install
4. react-native run-ios / react-native run-android
```

## Tested On

1. iOS 13.1 Emulator
2. Android 9 Real Device


## To Do

1. Add app icon
2. App Splashscreen for iOS and Android
5. Improve pagination implementation (need to fetch total commit count)
6. Add branch functionality so user can explore indivual branch
