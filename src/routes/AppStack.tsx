import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SpendingPage from '../pages/SpendingPage';
import Refund from '../pages/Refund';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="SpendingPage" component={SpendingPage}></Screen>
                <Screen name="Refund" component={Refund}></Screen>

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;

