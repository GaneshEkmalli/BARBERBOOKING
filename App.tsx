import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import AuthGuard from './src/guards/AuthGuard';
import IntroSliderScreen from './src/introSlider/IntroSliderScreen';
import AppRouter from './src/routes/AppRouter';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './src/redux/Store';

function App(): JSX.Element {
  const { isIntroSliderDone } = useSelector((state: any) => state.auth);
  return (
    <NavigationContainer>
      {!isIntroSliderDone ?
        <IntroSliderScreen /> :
        <>
          <AuthGuard>
            <AppRouter />
          </AuthGuard>
        </>
      }
    </NavigationContainer>
  );
}
export default () => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);