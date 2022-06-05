/* eslint-disable react-native/no-inline-styles */
import {Loading} from 'components/Loading';
import {Text} from 'components/Text';
import React from 'react';
import {Modal as RNModal, View} from 'react-native';
import {
  ColorBaseEnum,
  ColorBaseGrayEnum,
  ColorPrimaryEnum,
} from 'styles/Colors';
import {BorderRadiusEnum, MarginEnum, PaddingEnum} from 'styles/Spacer';

export const ModalSpinner = (props) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      onRequestClose={() => props.handleRequestClose()}
      visible={props.isModalVisible}>
      <View
        style={{
          flex: 1,
          position: 'relative',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <View
          style={{
            borderRadius: BorderRadiusEnum['2x'],
            backgroundColor: ColorBaseEnum.white,
            padding: PaddingEnum['3x'],
            paddingTop: PaddingEnum['0x'],
            margin: MarginEnum['4x'],
            shadowColor: ColorBaseEnum.black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <View
            style={{
              borderBottomWidth: props.isUseBorder ? 1 : 0,
              borderColor: ColorBaseGrayEnum.gray400,
            }}>
            <Loading
              size={props.sizeLoadingIcon}
              color={ColorPrimaryEnum.red}
            />
            <Text
              label={props.message}
              color={ColorBaseGrayEnum.gray700}
              textAlign="center"
            />
          </View>
        </View>
      </View>
    </RNModal>
  );
};
