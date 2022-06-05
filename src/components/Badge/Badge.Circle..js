import React from 'react';
import {View} from 'react-native';
import {
  ColorBaseGrayEnum,
  ColorSemanticInfoEnum,
  ColorSemanticPositiveEnum,
} from 'styles/Colors';
import {BorderRadiusEnum, PaddingEnum} from 'styles/Spacer';

export const BadgeCircle = (props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        borderRadius: BorderRadiusEnum.wide,
        padding: PaddingEnum['1x'],
        backgroundColor:
          props.variant === 'active'
            ? ColorSemanticInfoEnum.lighter
            : variant === 'done'
            ? ColorSemanticPositiveEnum.lighter
            : ColorBaseGrayEnum.gray400,
      }}>
      {props.children}
    </View>
  );
};
