import {Text} from 'components/Text';
import {Row} from 'layout/Row';
import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ColorBaseEnum, ColorBaseGrayEnum} from 'styles/Colors';
import {BorderRadiusEnum, MarginEnum, PaddingEnum} from 'styles/Spacer';
import {FontWeightSizeEnum} from '../../styles/Spacer';

export const ButtonSocialMedia = (props: ButtonSocialMediaProps) => {
  return (
    <TouchableOpacity
      style={{
        padding: PaddingEnum['2.5x'],
        borderWidth: 2,
        borderRadius: BorderRadiusEnum['1x'],
        backgroundColor: props.invertColor
          ? ColorBaseEnum.black
          : ColorBaseEnum.white,
        borderColor: props.isLoading
          ? ColorBaseGrayEnum.gray400
          : ColorBaseGrayEnum.gray700,
      }}
      onPress={props.onPress}>
      <Row justifyContent="center">
        {props.isLoading ? (
          <ActivityIndicator color={ColorBaseGrayEnum.gray700} />
        ) : (
          <>
            <IconAntDesign name={props.icon || 'google'} size={24} />
            <Text
              label={props.label}
              textAlign="center"
              marginLeft={MarginEnum['1x']}
              color={
                props.invertColor
                  ? ColorBaseGrayEnum.gray100
                  : ColorBaseGrayEnum.gray700
              }
              fontWeight={FontWeightSizeEnum.bold}
            />
          </>
        )}
      </Row>
    </TouchableOpacity>
  );
};
