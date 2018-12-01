import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <View style={styles.container}>
          <Text>Map here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
