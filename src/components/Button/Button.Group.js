import React from 'react';
import {View} from 'react-native';
import {ColorBaseEnum} from 'styles/Colors';
import {PaddingEnum} from 'styles/Spacer';

export const ButtonGroup = (props) => (
  <View
    style={{
      backgroundColor: props.transparent
        ? undefined
        : props.backgroundColor ?? ColorBaseEnum.white,
      paddingTop: PaddingEnum['2.5x'],
      paddingBottom: PaddingEnum['7x'],
      paddingHorizontal: props.noPaddingHorizontal
        ? PaddingEnum['0x']
        : PaddingEnum['3x'],
      elevation: 15,
      shadowColor: ColorBaseEnum.black,
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    }}>
    {props.children}
  </View>
);
