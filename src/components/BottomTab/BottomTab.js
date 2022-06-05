import FoundationActiveIcon from '@assets/images/Icons/SVG/FoundationActiveIcon.svg';
import FoundationInActiveIcon from '@assets/images/Icons/SVG/FoundationInActiveIcon.svg';
import HistoryActive from '@assets/images/Icons/SVG/HistoryActive.svg';
import HistoryInActive from '@assets/images/Icons/SVG/HistoryInActive.svg';
import HomeActiveIcon from '@assets/images/Icons/SVG/HomeActiveIcon.svg';
import HomeInactiveIcon from '@assets/images/Icons/SVG/HomeInactiveIcon.svg';
import SettingsActive from '@assets/images/Icons/SVG/SettingsActive.svg';
import SettingsInActive from '@assets/images/Icons/SVG/SettingsInActive.svg';
import {CommonActions} from '@react-navigation/native';
import {Text} from 'components/Text';
import React from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ColorBaseEnum} from '../../styles/Colors';
import {PaddingEnum} from '../../styles/Spacer';

const BottomTab = (props) => {
  const title = props.route.params?.title || props.route.name;

  const gotoAkun = async () => {
    props.navigation.navigate('MyAccount', {title: 'Settings'});
  };

  const gotoHistory = async () => {
    Alert.alert('Under constructions ...');
  };

  const gotoCategory = () => {
    props.navigation.navigate('CategoryPage', {title: 'Category'});
  };

  const gotoHome = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'HomePage', params: {title: 'Home Page'}}],
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
          {title === 'Home Page' || title === 'HomePage' ? (
            <HomeActiveIcon />
          ) : (
            <HomeInactiveIcon />
          )}
          {props.withText && <Text label="Home" />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoCategory}>
        <View style={{alignItems: 'center'}}>
          {title === 'Category' ? (
            <FoundationActiveIcon />
          ) : (
            <FoundationInActiveIcon />
          )}
          {props.withText && <Text label="Category" />}
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={gotoHistory}>
        <View style={{alignItems: 'center'}}>
          {title === 'Donation Report' ? (
            <HistoryActive />
          ) : (
            <HistoryInActive />
          )}
          {props.withText && <Text label="Report" />}
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={gotoAkun}>
        <View style={{alignItems: 'center'}}>
          {title === 'Settings' ? <SettingsActive /> : <SettingsInActive />}
          {props.withText && <Text label="Settings" />}
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
