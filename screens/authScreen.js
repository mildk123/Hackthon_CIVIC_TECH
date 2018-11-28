import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class AuthScreen extends Component {
      
  static navigationOptions = {
    header : null
  }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Create Account' onPress={() => this.props.navigation.navigate('SignUpScreen')} />
                <Button title='Login Here' onPress={() => this.props.navigation.navigate('LoginScreen')} />
            </View>
        );
    }
}
export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellowgreen',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center' ,
        justifyContent: 'space-evenly'
    }
});