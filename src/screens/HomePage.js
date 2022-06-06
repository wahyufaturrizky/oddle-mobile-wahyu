import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {BasicLayout} from 'layout/BasicLayout';
import {BackgroundImageLayout} from 'layout/BackgroundImageLayout';
import {PaddingEnum, MarginEnum, BorderRadiusEnum} from 'styles/Spacer';

const HomePage = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <BackgroundImageLayout source={require('assets/background-gradient.jpg')}>
      <BasicLayout>
        <FlatList
          data={[1]}
          keyExtractor={({id}) => id?.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            paddingBottom: PaddingEnum['4x'],
          }}
          ItemSeparatorComponent={() => (
            <View style={{marginVertical: MarginEnum['0.5x']}} />
          )}
          renderItem={({item, index}) => (
            <CardRecomended {...item} key={index} onPress={() => {}} />
          )}
        />
      </BasicLayout>
    </BackgroundImageLayout>
  );
};

const CardRecomended = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
        borderRadius: BorderRadiusEnum['2x'],
        height: 372,
        padding: 10,
      }}>
      <View></View>
    </View>
  );
};

export default HomePage;
