import {Text} from 'components/Text';
import {Col} from 'layout/Col';
import {Row} from 'layout/Row';
import React from 'react';
import {TouchableHighlight} from 'react-native';
import {
  ColorBaseEnum,
  ColorBaseGrayEnum,
  ColorPrimaryEnum,
  ColorSemanticDangerEnum,
} from 'styles/Colors';
import {BorderRadiusEnum} from 'styles/Spacer';
import {currencyFormatter} from 'utils/currencyFormatter';
import {FontWeightSizeEnum} from '../../styles/Spacer';

export const ButtonContextual = (props) => {
  const textColor = props.isDisable
    ? ColorBaseGrayEnum.gray400
    : ColorBaseEnum.white;

  return (
    <TouchableHighlight
      style={{
        height: 48,
        backgroundColor: props.isDisable
          ? ColorBaseGrayEnum.gray300
          : ColorPrimaryEnum.magenta,
        borderRadius: BorderRadiusEnum['2x'],
      }}
      onPress={props.isDisable ? undefined : props.onPress}
      underlayColor={ColorSemanticDangerEnum.dark}>
      <Row>
        <Col justifyContent="center" alignItems="center" size={2}>
          <Text
            label={(props.counter && props.counter.toString()) || ''}
            color={textColor}
            fontWeight={FontWeightSizeEnum.bold}
          />
        </Col>
        <Col
          style={{justifyContent: 'center', alignItems: 'flex-start'}}
          size={5}>
          <Text
            label={props.label}
            color={textColor}
            fontWeight={FontWeightSizeEnum.bold}
            textTransform="capitalize"
          />
        </Col>
        <Col size={3}>
          <Text
            label={currencyFormatter(props.price)}
            color={textColor}
            fontWeight={FontWeightSizeEnum.bold}
          />
        </Col>
      </Row>
    </TouchableHighlight>
  );
};
