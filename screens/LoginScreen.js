import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base'

import firebase from '../Config/firebase'
const database = firebase.database().ref()

class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    _signIn = () => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                alert(error.message)
            });
    }

    _onChange = (key, event) => {
        console.log(key, event )
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChange={() => this._onChange('Username')} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input onChange={() => this._onChange('Password')} />
                        </Item>
                    </Form>
                    <Button info >
                        <Text> Sign In </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});