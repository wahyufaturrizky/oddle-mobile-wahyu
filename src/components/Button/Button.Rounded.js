import {Text} from 'components/Text';
import React, {useState} from 'react';
import {TouchableHighlight, ActivityIndicator} from 'react-native';
import {
  ColorBaseEnum,
  ColorBaseGrayEnum,
  ColorPrimaryEnum,
} from 'styles/Colors';
import {BorderRadiusEnum, FontWeightSizeEnum, PaddingEnum} from 'styles/Spacer';

export const ButtonRounded = (props) => {
  const [isPress, setIsPress] = useState(false);

  const textPrimaryColor = props.isDisable
    ? ColorBaseGrayEnum.gray400
    : ColorBaseEnum.white;
  const textSecondaryColor = props.isDisable
    ? ColorBaseGrayEnum.gray400
    : ColorPrimaryEnum.red;

  if (props.variant === 'secondary') {
    return (
      <TouchableHighlight
        style={{
          paddingVertical: PaddingEnum['2.5x'],
          paddingHorizontal: PaddingEnum['3x'],
          borderRadius: BorderRadiusEnum.wide,
          backgroundColor: ColorBaseEnum.white,
          marginBottom: props.marginBottom,
          opacity: isPress ? 0.7 : 1,
          borderColor: props.isDisable
            ? ColorBaseGrayEnum.gray400
            : ColorPrimaryEnum.red,
          borderWidth: 1.5,
        }}
        onPress={props.isDisable ? undefined : props.onPress}
        onHideUnderlay={() => setIsPress(false)}
        onShowUnderlay={() => setIsPress(true)}
        underlayColor="transparent">
        <Text
          label={props.label}
          color={textSecondaryColor}
          textAlign="center"
          textTransform="capitalize"
          fontWeight={FontWeightSizeEnum['bold']}
        />
      </TouchableHighlight>
    );
  }
  return (
    <TouchableHighlight
      style={{
        paddingVertical: PaddingEnum['2.5x'],
        paddingHorizontal: PaddingEnum['3x'],
        borderRadius: BorderRadiusEnum.wide,
        marginBottom: props.marginBottom,
        opacity: isPress ? 0.7 : 1,
        backgroundColor: props.isDisable
          ? ColorBaseGrayEnum.gray00
          : ColorPrimaryEnum.red,
        borderColor: props.isDisable
          ? ColorBaseGrayEnum.gray400
          : ColorBaseEnum.white,
        borderWidth: 1.5,
      }}
      onPress={props.isDisable || props.isLoading ? undefined : props.onPress}
      onHideUnderlay={() => setIsPress(false)}
      onShowUnderlay={() => setIsPress(true)}
      underlayColor={ColorPrimaryEnum.red}>
      {props.isLoading ? (
        <ActivityIndicator color={ColorBaseEnum.white} />
      ) : (
        <Text
          label={props.label}
          color={textPrimaryColor}
          textAlign="center"
          textTransform="capitalize"
          fontWeight={FontWeightSizeEnum['bold']}
        />
      )}
    </TouchableHighlight>
  );
};
