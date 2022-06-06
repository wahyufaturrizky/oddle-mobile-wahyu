import HomeActiveIcon from '@assets/HomeActive.svg';
import HomeInactiveIcon from '@assets/HomeInActive.svg';
import FavoriteActive from '@assets/favorite-active.svg';
import FavoriteInActive from '@assets/favorite-inactive.svg';
import ShopIconActive from '@assets/shop-icon-active.svg';
import ShopIconInActive from '@assets/shop-icon-inactive.svg';
import {CommonActions} from '@react-navigation/native';
import {Text} from 'components/Text';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ColorBaseEnum} from 'styles/Colors';
import {PaddingEnum} from 'styles/Spacer';

const BottomTab = (props) => {
  const title = props.route.params?.title || props.route.name;

  const gotoFavorite = async () => {
    props.navigation.navigate('FavoritePage', {title: 'Favourites'});
  };

  const gotoShop = () => {
    props.navigation.navigate('ShopPage', {title: 'Shop'});
  };

  const gotoHome = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'HomePage', params: {title: 'Home'}}],
      }),
    );
  };

  return (
    <View
      style={[
        styles.shadow,
        {
          backgroundColor: ColorBaseEnum.white,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: PaddingEnum['1x'],
          paddingBottom: PaddingEnum['1x'],
        },
      ]}>
      <TouchableOpacity onPress={gotoHome}>
        <View style={{alignItems: 'center'}}>
          {props.route.name === 'HomePage' ? (
            <HomeActiveIcon />
          ) : (
            <HomeInactiveIcon />
          )}
          <Text variant="p-label" label="Home" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: -12}} onPress={gotoShop}>
        <View style={{alignItems: 'center'}}>
          {props.route.name === 'ShopPage' ? (
            <ShopIconActive />
          ) : (
            <ShopIconInActive />
          )}
          <Text variant="p-label" label="Shop" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoFavorite}>
        <View style={{alignItems: 'center'}}>
          {props.route.name === 'FavoritePage' ? (
            <FavoriteActive />
          ) : (
            <FavoriteInActive />
          )}
          <Text variant="p-label" label="Favourites" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  shadow: {
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});
