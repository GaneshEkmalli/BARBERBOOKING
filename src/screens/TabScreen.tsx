import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BRIGHT_GRAY, LIGHTBLUE, WHITE } from '../shared/constants/color';
import HistoryIcon from '../svg/HistoryIcon';
import DashboardIcon from '../svg/DashboardIcon';
import Dashboard from './Dashboard/Dashboard';
import History from './History';

const Tab = createBottomTabNavigator()
const TabScreen = () => {

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor: WHITE,
            tabBarInactiveTintColor: WHITE,
            tabBarActiveBackgroundColor: LIGHTBLUE,
            tabBarInactiveBackgroundColor: LIGHTBLUE,
            tabBarLabelStyle: { fontSize: 14 },
            headerShown: false,
            tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5, backgroundColor: LIGHTBLUE }
        }}>
            <Tab.Screen name="Dashboard" component={Dashboard}
                options={{
                    tabBarIcon: () => (<DashboardIcon width={25} height={25} />
                    )
                }}
            />
            <Tab.Screen name="Booking History" component={History}
                options={{
                    tabBarIcon: () => (<HistoryIcon width={25} height={25} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default TabScreen;