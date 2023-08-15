
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FORGET_SCREEN, RESET_PASSWORD, SIGIN_SCREEN } from '../routes/Routes';
import SignIn from '../screens/SignIn/SignIn';
import ResetPassword from '../screens/SignIn/ResetPassword';
import ForgetPassword from '../screens/SignIn/ForgetPassword';
export type RootStackParamList = {
    SignIn: any,
    ForgetPassword: any,
    ResetPassword: any
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={SIGIN_SCREEN} options={{ headerShown: false }} component={SignIn} />
            <RootStack.Screen name={FORGET_SCREEN} options={{ headerShown: false }} component={ForgetPassword} />
            <RootStack.Screen name={RESET_PASSWORD} options={{ headerShown: false }} component={ResetPassword} />
        </RootStack.Navigator>
    );
}

export default AuthNavigator;