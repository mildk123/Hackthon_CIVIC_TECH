import React, { Component } from "react";
import { 
  StyleSheet
} from "react-native";
import AppStackNavigator from './navigation/navigator'

class App extends Component {


  render() {
    return (
      <AppStackNavigator />
    );
  }
}
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });