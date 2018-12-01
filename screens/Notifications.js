import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Notifications extends Component {

    static navigationOptions = {
        title: 'Notifications '
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Notifications</Text>
            </View>
        );
    }
}
export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});