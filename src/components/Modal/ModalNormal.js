import {Button} from 'components/Button';
import {Text} from 'components/Text';
import {Title} from 'components/Title';
import React from 'react';
import {Dimensions, View, Modal as RNModal} from 'react-native';
import {Row} from 'layout/Row';
import {Col} from 'layout/Col';
import {ColorBaseEnum, ColorBaseGrayEnum} from 'styles/Colors';
import {
  PaddingEnum,
  BorderRadiusEnum,
  MarginEnum,
  FontWeightSizeEnum,
} from 'styles/Spacer';

export const ModalNormal = (props) => {
  return (
    <RNModal
      visible={props.isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => props.handleRequestClose()}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: ColorBaseEnum.blackOpacity,
        }}>
        <View
          style={{
            borderRadius: BorderRadiusEnum['2x'],
            backgroundColor: ColorBaseEnum.white,
            padding: PaddingEnum['2.5x'],
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
          {props.children}
          <Row>
            <Col>
              <View
                style={{
                  paddingVertical: PaddingEnum['1x'],
                  borderBottomWidth: props.isUseBorder ? 1 : 0,
                  borderColor: ColorBaseGrayEnum.gray400,
                }}>
                <Title
                  variant="title3"
                  label={props.title || ' '}
                  color={ColorBaseGrayEnum.gray700}
                  textAlign={props.textAlignTitle}
                  fontWeight={FontWeightSizeEnum.bold}
                />
              </View>
              <View style={{justifyContent: 'center', flexGrow: 1}}>
                <Text
                  label={props.message || ' '}
                  color={ColorBaseGrayEnum.gray600}
                  textAlign={props.textAlignMessage}
                />
              </View>
            </Col>
          </Row>
          <Row justifyContent="space-between" marginTop={MarginEnum['2x']}>
            {props.secondaryButton?.onPress && (
              <Col size={5} marginRight={MarginEnum['0.5x']}>
                <Button.Normal
                  variant="secondary"
                  onPress={props?.secondaryButton?.onPress}
                  label={props?.secondaryButton?.label || 'Button Label'}
                />
              </Col>
            )}
            <Col size={5} marginLeft={MarginEnum['0.5x']}>
              <Button.Normal
                onPress={props?.primaryButton?.onPress}
                label={props?.primaryButton?.label || 'Button Label'}
              />
            </Col>
          </Row>
        </View>
      </View>
    </RNModal>
  );
};
