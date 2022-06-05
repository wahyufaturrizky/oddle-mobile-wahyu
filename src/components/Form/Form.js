/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-native/no-inline-styles */
import {Text} from 'components/Text';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Col} from 'layout/Col';
import {Row} from 'layout/Row';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BorderRadiusEnum,
  MarginEnum,
  PaddingEnum,
  SizeEnum,
} from 'styles/Spacer';
import {Group} from './Form.Group';
import {
  ColorBaseGrayEnum,
  ColorBaseEnum,
  ColorSemanticDangerEnum,
} from 'styles/Colors';

export const FormInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Form.Group
      errorMessage={props.errorMessage}
      onPressInfo={props.onPressInfo}
      label={props.label}
      bold={props.labelBold}
      labelColor={props.labelColor}
      labelTextTransform={props.labelTextTransform}
      textVariant={props.labelTextVariant}
      required={props.required}>
      {!props.isPreText && !props.withIcon && !props.isFieldPhone ? (
        <TextInput
          style={{
            backgroundColor: props.isDisabled
              ? ColorBaseGrayEnum.gray300
              : ColorBaseEnum.white,
            color: props.isDisabled
              ? ColorBaseGrayEnum.gray500
              : ColorBaseGrayEnum.gray700,
            padding: PaddingEnum['2x'],
            marginBottom: MarginEnum['0x'],
            borderRadius: BorderRadiusEnum['2x'],
            fontSize: SizeEnum['2.5x'],
            borderColor: props.errorMessageField
              ? ColorSemanticDangerEnum.default
              : isFocused
              ? ColorBaseGrayEnum.gray700
              : ColorBaseGrayEnum.gray400,
            borderWidth: props.isDisabled ? 0 : 1,
            textAlign: props.textAlign,
          }}
          onChangeText={(text) => props.handleChange(text)}
          onBlur={(e) => {
            setIsFocused(false);
            props?.handleBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          value={props?.value?.toString()}
          spellCheck={false}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          onSubmitEditing={props.onSubmitEditing}
          secureTextEntry={props.secureTextEntry}
        />
      ) : props.isFieldPhone ? (
        <Row>
          <Col size={2}>
            <View
              style={{
                paddingVertical: PaddingEnum['3x'],
                paddingHorizontal: PaddingEnum['2x'],
                backgroundColor: ColorBaseEnum.white,
                borderTopLeftRadius: BorderRadiusEnum['2x'],
                borderBottomLeftRadius: BorderRadiusEnum['2x'],
                borderColor: ColorBaseGrayEnum.gray400,
                borderWidth: 1,
              }}>
              <Text label="+62" />
            </View>
          </Col>
          <Col size={8}>
            <TextInput
              style={{
                backgroundColor: props.isDisabled
                  ? ColorBaseGrayEnum.gray300
                  : ColorBaseEnum.white,
                color: props.isDisabled
                  ? ColorBaseGrayEnum.gray500
                  : ColorBaseGrayEnum.gray700,
                padding: PaddingEnum['2x'],
                borderTopRightRadius: BorderRadiusEnum['2x'],
                borderBottomRightRadius: BorderRadiusEnum['2x'],
                fontSize: SizeEnum['2.5x'],
                borderColor: props.errorMessageField
                  ? ColorSemanticDangerEnum.default
                  : isFocused
                  ? ColorBaseGrayEnum.gray700
                  : ColorBaseGrayEnum.gray400,
                borderWidth: props.isDisabled ? 0 : 1,
              }}
              onChangeText={(text) => props.handleChange(text)}
              onBlur={(e) => {
                setIsFocused(false);
                props?.handleBlur(e);
              }}
              onFocus={() => setIsFocused(true)}
              value={props?.value?.toString()}
              spellCheck={false}
              keyboardType={props.keyboardType}
              placeholder={props.placeholder}
              onSubmitEditing={props.onSubmitEditing}
              secureTextEntry={props.secureTextEntry}
            />
          </Col>
        </Row>
      ) : props.withIcon ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: BorderRadiusEnum['2x'],
            // Shadow style
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            elevation: 12,
          }}>
          <Icon
            style={{marginLeft: MarginEnum['2x']}}
            name="magnify"
            size={20}
            color="#949494"
          />
          <TextInput
            style={{
              backgroundColor: props.isDisabled
                ? ColorBaseGrayEnum.gray300
                : ColorBaseEnum.white,
              color: props.isDisabled
                ? ColorBaseGrayEnum.gray500
                : ColorBaseGrayEnum.gray700,
              padding: PaddingEnum['2x'],
              paddingRight: props.paddingRight,
              marginBottom: MarginEnum['0x'],
              borderRadius: BorderRadiusEnum['2x'],
              fontSize: SizeEnum['2.5x'],
              borderColor: !!props.errorMessage
                ? ColorSemanticDangerEnum.default
                : isFocused
                ? ColorBaseGrayEnum.gray700
                : ColorBaseGrayEnum.gray400,
            }}
            onChangeText={(text) => props.handleChange(text)}
            onBlur={(e) => {
              setIsFocused(false);
              props?.handleBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
            value={props?.value?.toString()}
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            onSubmitEditing={props.onSubmitEditing}
            secureTextEntry={props.secureTextEntry}
          />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: props.isDisabled
              ? ColorBaseGrayEnum.gray300
              : ColorBaseEnum.white,
            padding: 15,
            marginBottom: 0,
            borderRadius: 12,
          }}>
          <Row alignItems="center">
            <Col size={1}>
              <Text
                label="Rp"
                color={
                  props.isDisabled
                    ? ColorBaseGrayEnum.gray400
                    : ColorBaseGrayEnum.gray700
                }
                fontStyle={props.preTextFontStyle}
              />
            </Col>
            <Col size={9}>
              <TextInput
                style={{
                  padding: PaddingEnum['0x'],
                  marginLeft: MarginEnum['2x'],
                  fontSize: SizeEnum['2.5x'],
                  color: ColorBaseGrayEnum.gray700,
                }}
                onChangeText={(text) => props.handleChange(text)}
                onBlur={(e) => {
                  setIsFocused(false);
                  props?.handleBlur(e);
                }}
                onFocus={() => setIsFocused(true)}
                value={props?.value?.toString()}
                spellCheck={false}
                keyboardType={props.keyboardType}
                placeholder={props.placeholder}
                onSubmitEditing={props.onSubmitEditing}
              />
            </Col>
          </Row>
        </View>
      )}
      {props.exampleValue && props.exampleValueWithVariantFont ? (
        <Row>
          <Text
            marginBottom={MarginEnum['0x']}
            label={props.exampleValue}
            color={ColorBaseGrayEnum.gray500}
            variant="super-small"
            marginRight={MarginEnum['0.5x']}
          />
          <Text
            marginBottom={MarginEnum['0x']}
            label={props.exampleValueWithVariantFont}
            color={ColorBaseGrayEnum.gray500}
            variant="super-small"
            bold
          />
        </Row>
      ) : (
        <Text
          marginBottom={MarginEnum['0x']}
          label={props.exampleValue}
          color={ColorBaseGrayEnum.gray500}
          variant="super-small"
        />
      )}
    </Form.Group>
  );
};

const Form = (props) => {
  return props.children;
};

Form.Group = Group;

export default Form;
