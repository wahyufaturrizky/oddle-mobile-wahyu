import {NavigationContainer} from '@react-navigation/native';
// Must Navigation V.5
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomePageScreen from 'screens/HomePage';
import ShopPageScreen from 'screens/ShopPage';
import FavoritePageScreen from 'screens/FavoritePage';
import OrderWebViewPageScreen from 'screens/OrderWebViewPage';

const Stack = createStackNavigator();

function StackNav(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" headerMode={'none'}>
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="ShopPage" component={ShopPageScreen} />
        <Stack.Screen name="FavoritePage" component={FavoritePageScreen} />
        <Stack.Screen
          name="OrderWebViewPage"
          component={OrderWebViewPageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
