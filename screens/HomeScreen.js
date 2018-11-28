import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title : 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text>Test 123</Text>
        </ScrollView>

      </View>
    );
  }

 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
