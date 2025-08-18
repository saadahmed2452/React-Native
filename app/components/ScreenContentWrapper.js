import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScreenContentWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,  // Example padding, adjust as needed
    backgroundColor: 'white',  // You can adjust the background color
  },
});

export default ScreenContentWrapper;
