import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base'

import firebase from '../Config/firebase'
// const database = firebase.database().ref()

class SignUpScreen extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    _signUp = () => {
        if ((this.state.signUpEmail !== undefined) && (this.state.signUpPassword !== undefined) ){
            firebase.auth().createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
            .then(() => {
                this.props.navigation.navigate('Home')
            })
            .catch((error) => {
                alert(error.message)
            });
        }
        else{
            alert('please enter email and password')
        }
    }

    _onChange = (key, value) => {
        this.setState({
            [key] : value
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>Create Account</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(email) => this._onChange('signUpEmail', email)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(Password) => this._onChange('signUpPassword', Password)}
                            />
                        </Item>
                    </Form>
                    <View style={styles.btn}>
                        <Button info  onPress={() => this._signUp()}>
                            <Text> Create Account </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    btn: {
       flex:1 ,
       flexDirection : 'row',
       justifyContent : 'flex-end',
       padding: 13
    }
});