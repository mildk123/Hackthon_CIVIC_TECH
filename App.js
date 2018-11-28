import React, { Component } from "react";
import {
  StyleSheet
} from "react-native";

import { Font, AppLoading } from "expo";

import AppStackNavigator from './navigation/navigator'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }



  _loadResourcesAsync = async () => {
    return Promise.all([

      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      })
    ]);
  };

  render() {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={() => this.setState({ loading: false }) }
        />
      );
    }
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