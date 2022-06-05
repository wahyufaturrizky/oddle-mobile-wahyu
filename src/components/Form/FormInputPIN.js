import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {
  ColorBaseEnum,
  ColorBaseGrayEnum,
  ColorPrimaryEnum,
  ColorSemanticDangerEnum,
} from '../../styles/Colors';
import {BorderRadiusEnum, MarginEnum, PaddingEnum} from '../../styles/Spacer';

// Reference: https://github.com/goibibo-labs/react-native-otp-login

const FormInputPIN = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <TextInput
        style={{
          width: 40,
          marginVertical: MarginEnum['0x'],
          marginHorizontal: MarginEnum['1x'],
          paddingVertical: PaddingEnum['1x'],
          paddingHorizontal: PaddingEnum['0x'],
          textAlign: 'center',
          borderBottomWidth: props.variant === 'square' ? null : 1,
          borderBottomColor:
            props.variant !== 'square'
              ? props.isError
                ? ColorSemanticDangerEnum.default
                : isFocused
                ? ColorBaseGrayEnum.gray700
                : ColorBaseGrayEnum.gray400
              : null,
          fontSize: 20,
          borderWidth: props.variant === 'square' ? 1 : null,
          borderColor:
            props.variant === 'square'
              ? props.isError
                ? ColorSemanticDangerEnum.default
                : isFocused
                ? ColorBaseGrayEnum.gray700
                : ColorBaseGrayEnum.gray400
              : null,
          borderRadius: BorderRadiusEnum['1x'],
          backgroundColor: props.isError
            ? ColorPrimaryEnum.redOpacity
            : ColorBaseEnum.white,
          justifyContent: 'center',
          alignItems: 'center',
          color: props.isError ? ColorBaseEnum.white : ColorBaseEnum.black,
        }}
        accessibilityLabel={props.accessibilityLabel}
        keyboardType={'numeric'}
        value={props.value}
        ref={props.refCallback}
        onChangeText={props.onChangeText}
        maxLength={1}
        autoFocus={props.autoFocus}
        onKeyPress={props.onKeyPress}
        secureTextEntry={props.isForPin}
        onBlur={() => {
          setIsFocused(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        isFocus={isFocused}
      />
    </View>
  );
};

export default FormInputPIN;
