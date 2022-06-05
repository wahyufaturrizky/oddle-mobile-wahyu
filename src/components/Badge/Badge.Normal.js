import React from 'react';
import {View} from 'react-native';
import {
  ColorBaseEnum,
  ColorBaseGrayEnum,
  ColorSemanticDangerEnum,
  ColorSemanticInfoEnum,
  ColorSemanticWarningEnum,
} from 'styles/Colors';
import {BorderRadiusEnum, PaddingEnum} from 'styles/Spacer';

export const BadgeNormal = (props) => {
  return (
    <View
      style={{
        padding: props.padding,
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical,
        marginRight: props.marginRight,
        alignItems: 'center',
        borderRadius: BorderRadiusEnum.wide,
        backgroundColor:
          props.variant === 'info'
            ? ColorSemanticInfoEnum.lighter
            : props.variant === 'danger'
            ? ColorSemanticDangerEnum.lighter
            : props.variant === 'warning'
            ? ColorSemanticWarningEnum.lighter
            : props.variant === 'white'
            ? ColorBaseEnum.white
            : ColorBaseGrayEnum.gray200,
        color:
          props.variant === 'info'
            ? ColorSemanticInfoEnum.darker
            : props.variant === 'danger'
            ? ColorSemanticDangerEnum.darker
            : props.variant === 'warning'
            ? ColorSemanticWarningEnum.darker
            : props.variant === 'white'
            ? ColorBaseGrayEnum.gray700
            : ColorBaseGrayEnum.gray400,
      }}>
      {props.children}
    </View>
  );
};
