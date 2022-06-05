import IconFeather from 'react-native-vector-icons/Feather';
import {Text} from 'components/Text';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Row} from 'layout/Row';
import {ColorBaseGrayEnum, ColorSemanticDangerEnum} from 'styles/Colors';
import {MarginEnum} from 'styles/Spacer';

const FormGroupLabel = ({
  label,
  labelColor,
  required,
  textTransform,
  textAlign,
  bold,
  textVariant,
  onPressInfo,
}) => {
  return (
    <>
      {label === 'Bukti Kepemilikan Akun Bank' ? (
        <Row>
          <Text
            label={`${label}${required ? '*' : ''}`}
            color={labelColor || ColorBaseGrayEnum.gray700}
            textAlign={textAlign || 'left'}
            variant={textVariant || 'regular'}
            textTransform={textTransform || 'capitalize'}
            marginBottom={MarginEnum['0x']}
            bold={bold}
          />
          <TouchableOpacity
            style={{marginLeft: 4, marginTop: 3}}
            onPress={onPressInfo}>
            <IconFeather
              name="info"
              size={15}
              color={ColorBaseGrayEnum.gray400}
            />
          </TouchableOpacity>
        </Row>
      ) : (
        <Text
          label={`${label}${required ? '*' : ''}`}
          color={labelColor || ColorBaseGrayEnum.gray700}
          textAlign={textAlign || 'left'}
          variant={textVariant || 'regular'}
          textTransform={textTransform || 'capitalize'}
          marginBottom={MarginEnum['1x']}
          bold={bold}
        />
      )}
    </>
  );
};

export const Group = (props) => {
  return (
    <View
      style={{
        marginBottom:
          props.exampleValue || props.errorMessage
            ? MarginEnum['2x']
            : MarginEnum['0x'],
        marginTop: props.marginTop,
        top: props.top,
        position: props.position,
        left: props.left,
        right: props.right,
      }}>
      {props.label && (
        <FormGroupLabel
          onPressInfo={props.onPressInfo}
          label={props.label}
          textAlign={props.labelTextAlign}
          required={props.required}
          labelColor={props.labelColor}
          bold={props.bold}
          textVariant={props.textVariant}
          textTransform={props.labelTextTransform}
        />
      )}
      {props.children}
      {!!props.exampleValue && (
        <Text
          marginBottom={MarginEnum['2x']}
          label={props.exampleValue}
          color={ColorBaseGrayEnum.gray500}
          variant={props.exampleTextVariant || 'micro'}
          textTransform="capitalize"
        />
      )}
      {!!props.errorMessage && (
        <Text
          marginTop={MarginEnum['1x']}
          marginBottom={MarginEnum['2x']}
          label={props.errorMessage}
          color={ColorSemanticDangerEnum.default}
          variant={props.exampleTextVariant || 'super-small'}
          isError
        />
      )}
    </View>
  );
};
