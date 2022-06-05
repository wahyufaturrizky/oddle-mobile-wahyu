import React from 'react';
import {View} from 'react-native';
import {ColorBaseEnum} from 'styles/Colors';
import {BorderRadiusEnum, PaddingEnum} from 'styles/Spacer';

export const WhiteLayout = ({children, borderRadius, backgroundColor}) => (
  <View
    style={{
      backgroundColor: backgroundColor || ColorBaseEnum.white,
      flex: 1,
      paddingVertical: PaddingEnum['3x'],
      paddingHorizontal: PaddingEnum['4x'],
      borderRadius: borderRadius || BorderRadiusEnum['0x'],
    }}>
    {children}
  </View>
);
