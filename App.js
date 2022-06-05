import {NavigationContainer} from '@react-navigation/native';
// Must Navigation V.5
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomePageScreen from 'screens/HomePage';

const Stack = createStackNavigator();

function StackNav(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" headerMode={'none'}>
        <Stack.Screen name="HomePage" component={HomePageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
