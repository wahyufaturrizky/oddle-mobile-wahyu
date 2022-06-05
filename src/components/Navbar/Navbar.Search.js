/* eslint-disable react-native/no-inline-styles */
import {Col} from 'layout/Col';
import {Row} from 'layout/Row';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {ColorBaseEnum, ColorBaseGrayEnum} from 'styles/Colors';
import {PaddingEnum, SizeEnum} from 'styles/Spacer';
import {alertBackAction} from 'utils/alertBackAction';

const NavbarSearch = (props) => {
  return (
    <View
      style={{
        padding: PaddingEnum['2x'],
        backgroundColor: props.backgroundColor || ColorBaseEnum.white,
      }}>
      <Row>
        {props.icon && (
          <Col>
            <TouchableOpacity
              onPress={
                props.onPress
                  ? props.onPress
                  : () =>
                      props.isExitBack
                        ? alertBackAction(props.navigation)
                        : props.navigation.goBack()
              }>
              <IconIonicons
                name={props.icon}
                color={ColorBaseGrayEnum.gray600}
                size={SizeEnum['5x']}
              />
            </TouchableOpacity>
          </Col>
        )}
        <Col>
          <TextInput
            style={{
              height: 45,
              backgroundColor: ColorBaseEnum.white,
              borderRadius: 12,
              paddingLeft: props.icon ? 20 : 15,
              color: ColorBaseGrayEnum.gray400,
              fontWeight: '500',
            }}
            placeholder={props.placeholder || 'Cari'}
            onChangeText={(value) => props.setSearchText(value)}
            value={props?.searchText?.toString()}
          />
        </Col>
      </Row>
    </View>
  );
};

export default NavbarSearch;
