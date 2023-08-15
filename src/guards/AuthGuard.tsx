import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import { WHITE } from '../shared/constants/color';

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const { isAuthenticated } = useSelector((state: any) => state.auth);
    if (isAuthenticated) {
        return <>{children}</>;
    } else {
        return (
            <>
                <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
                <AuthNavigator />
            </>
        );
    }
};

export default AuthGuard;