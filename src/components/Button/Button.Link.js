import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ColorBaseGrayEnum, ColorPrimaryEnum} from 'styles/Colors';
import {BorderRadiusEnum, PaddingEnum} from 'styles/Spacer';

export const ButtonLink = (props) => {
  if (props.variant === 'navbar') {
    return (
      <TouchableOpacity
        style={{
          borderRadius: BorderRadiusEnum['2x'],
          backgroundColor: props.bgColor || ColorBaseGrayEnum.gray200,
          padding: PaddingEnum['1x'],
        }}
        onPress={props.onPress}>
        {props.children}
      </TouchableOpacity>
    );
  }
  if (props.variant === 'navigation-tab') {
    return (
      <TouchableOpacity
        style={{
          borderRadius: BorderRadiusEnum['6x'],
          backgroundColor: ColorPrimaryEnum.red,
          justifyContent: 'center',
          padding: PaddingEnum['2x'],
        }}
        onPress={props.onPress}>
        {props.children}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.isDisable}>
      {props.children}
    </TouchableOpacity>
  );
};
