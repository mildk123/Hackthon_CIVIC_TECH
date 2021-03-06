import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base'

import { AsyncStorage } from "react-native"

import firebase from '../Config/firebase'

class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    _signIn = () => {
        if ((this.state.loginEmail !== undefined) && (this.state.loginPassword !== undefined) ){
            firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword)
                .then(() => {
                    AsyncStorage.setItem('usered', true);
                    this.props.navigation.navigate('Home')
                })
                .catch((error) => {
                    alert(error.message)
                });
        }
        else {
            alert('please enter email and password')
        }
    }

    _onChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>Login</Text>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(email) => this._onChange('loginEmail', email)}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(Password) => this._onChange('loginPassword', Password)}
                            />
                        </Item>
                    </Form>
                    <View style={styles.btn}>
                        <Button info onPress={() => this._signIn()}>
                            <Text> Sign In </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 13
    }
});