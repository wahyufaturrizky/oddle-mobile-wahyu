import {Button} from 'components/Button';
import {Text} from 'components/Text';
import {Title} from 'components/Title';
import {Col} from 'layout/Col';
import {Row} from 'layout/Row';
import React from 'react';
import {Modal as RNModal, View} from 'react-native';
import {ColorBaseEnum, ColorBaseGrayEnum} from 'styles/Colors';
import {BorderRadiusEnum, MarginEnum, PaddingEnum} from 'styles/Spacer';

export const ModalResponsive = (props) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      onRequestClose={() => props.handleRequestClose()}
      visible={props.isModalVisible}>
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: ColorBaseEnum.blackOpacity,
        }}>
        <View
          style={{
            borderRadius: BorderRadiusEnum['2x'],
            backgroundColor: ColorBaseEnum.white,
            padding: PaddingEnum['2x'],
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
              paddingVertical: PaddingEnum['0.5x'],
              borderBottomWidth: props.isUseBorder ? 1 : 0,
              borderColor: ColorBaseGrayEnum.gray400,
            }}>
            <Title
              variant="title3"
              label={props.title || ' '}
              color={ColorBaseGrayEnum.gray700}
            />
            <View style={{marginTop: MarginEnum['1x']}}>
              <Text
                label={props.message || ' '}
                color={ColorBaseGrayEnum.gray600}
              />
            </View>
            <View style={{marginTop: MarginEnum['1x']}}>{props.svgImage}</View>
            <View style={{flexDirection: 'row', marginTop: MarginEnum['1x']}}>
              <Row>
                {props.swapButton && (
                  <Col
                    style={{
                      marginHorizontal: MarginEnum['0.5x'],
                      justifyContent: 'flex-end',
                    }}>
                    <Button.Normal
                      accessibilityLabel={props.accessibilityLabel}
                      onPress={props.primaryButton?.onPress}
                      label={props.primaryButton.label || 'Button Label'}
                    />
                  </Col>
                )}
                {props.secondaryButton?.onPress && (
                  <Col
                    style={{
                      marginHorizontal: MarginEnum['0.5x'],
                      justifyContent: 'flex-end',
                    }}>
                    <Button.Normal
                      variant="secondary"
                      accessibilityLabel={props.accessibilityLabel}
                      onPress={props.secondaryButton?.onPress}
                      label={props.secondaryButton.label || 'Button Label'}
                    />
                  </Col>
                )}
                {!props.swapButton && (
                  <Col
                    style={{
                      marginHorizontal: MarginEnum['0.5x'],
                      justifyContent: 'flex-end',
                    }}>
                    <Button.Normal
                      accessibilityLabel={props.accessibilityLabel}
                      onPress={props.primaryButton?.onPress}
                      label={props.primaryButton.label || 'Button Label'}
                    />
                  </Col>
                )}
              </Row>
            </View>
          </View>
        </View>
      </View>
    </RNModal>
  );
};
