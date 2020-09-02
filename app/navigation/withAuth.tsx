// import React, {PureComponent} from 'react';
// import {ActivityIndicator} from 'react-native';
// import {withRouter} from 'react-router-native';

// class RedirectToLogin extends PureComponent {
//   componentDidMount() {
//     this.props.history.replace('/login');
//   }

//   render() {
//     return <ActivityIndicator />;
//   }
// }

// const RedirectToLoginWithRouter = withRouter(RedirectToLogin);

// const withAuth = (isLoggedIn: boolean, WrappedComponent: any) => {
//   class HOC extends PureComponent {
//     render() {
//       return (
//         <>{isLoggedIn ? <WrappedComponent /> : <RedirectToLoginWithRouter />}</>
//       );
//     }
//   }

//   return HOC;
// };

// export default withAuth;
