/* eslint-disable react-native/no-inline-styles */
import CloseImage from '@assets/images/CloseImage.svg';
import {Text} from 'components/Text';
import {Title} from 'components/Title';
import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ColorBaseEnum, ColorBaseGrayEnum} from 'styles/Colors';
import {BorderRadiusEnum, FontWeightSizeEnum, PaddingEnum} from 'styles/Spacer';

const BottomDrawer = (props) => {
  return (
    <Modal
      animationType={props.animationType}
      transparent={props.transparent}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <TouchableOpacity
          onPress={props.onRequestClose}
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <View
            style={{
              backgroundColor: ColorBaseEnum.white,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: ColorBaseGrayEnum.gray700,
            }}>
            <CloseImage />
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: ColorBaseEnum.white,
            borderTopRightRadius: BorderRadiusEnum['4x'],
            borderTopLeftRadius: BorderRadiusEnum['4x'],
            paddingVertical: 42,
            paddingHorizontal: PaddingEnum['5x'],
            shadowColor: ColorBaseEnum.black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Title
            variant={props.headerTextVariant || 'title3'}
            label={props.headerTitle}
            color={ColorBaseGrayEnum.gray600}
            textAlign={props.headerTextAlign}
            fontWeight={FontWeightSizeEnum.bold}
          />
          <Text
            variant={props.subHeaderTextVariant || 'regular'}
            label={props.subHeaderTitle}
            color={ColorBaseGrayEnum.gray500}
            textAlign={props.subHeaderTextAlign}
            marginBottom={props.paddingBottom}
          />
          <ScrollView>{props.children}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default BottomDrawer;
