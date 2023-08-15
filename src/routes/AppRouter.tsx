import React from 'react';
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TAB_SCREEN } from './Routes';
import { WHITE } from '../shared/constants/color';
import TabScreen from '../screens/TabScreen';
export type RootStackParamList = {
    TabScreen: any,
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppRouter(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
            <RootStack.Navigator>
                <RootStack.Screen name={TAB_SCREEN} options={{ headerShown: false }} component={TabScreen} />
            </RootStack.Navigator>
        </>
    );
}

export default AppRouter;
