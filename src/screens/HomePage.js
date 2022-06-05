import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {ButtonVariant} from 'demo-component/ButtonVariant';

const HomePage = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <ButtonVariant />
    </View>
  );
};

export default HomePage;
