import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title : 'Students '
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Students List here</Text>
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
