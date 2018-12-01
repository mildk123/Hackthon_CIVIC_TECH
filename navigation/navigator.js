import { createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator';
import authScreen from '../screens/authScreen'
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default AppStackNavigator = createStackNavigator({
    // Auth: authScreen,
    // LoginScreen: LoginScreen,
    // SignUpScreen : SignUpScreen,
    Main: MainTabNavigator,
},{
    navigationOptions : {
        gesturesEnabled: false,
        header: null
    }
})