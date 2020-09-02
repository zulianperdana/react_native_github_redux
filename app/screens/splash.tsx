import * as React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const SplashScreen = () => (
  <View style={styles.indicator}>
    <ActivityIndicator />
  </View>
);

export default SplashScreen;
