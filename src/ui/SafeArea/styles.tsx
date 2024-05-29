import {StyleSheet, Platform, StatusBar} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
