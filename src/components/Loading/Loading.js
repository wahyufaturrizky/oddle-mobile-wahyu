/* eslint-disable react-native/no-inline-styles */
import {BasicLayout} from 'layout/BasicLayout';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ColorBaseGrayEnum} from 'styles/Colors';
import {PaddingEnum} from 'styles/Spacer';

const Loading = (props) => (
  <BasicLayout backgroundColor="transparent">
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: PaddingEnum['2x'],
      }}>
      <ActivityIndicator
        size={props.size || 'large'}
        color={props.color || ColorBaseGrayEnum.gray700}
      />
    </View>
  </BasicLayout>
);

Loading;

export default Loading;
