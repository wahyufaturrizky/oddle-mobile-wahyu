import React from 'react';
import {View} from 'react-native';
import {MarginEnum} from 'styles/Spacer';

export const Row = (props) => {
  return (
    <View
      style={{
        flexDirection: props.flexDirection ?? 'row',
        padding: props.padding,
        paddingBottom: props.paddingBottom,
        margin: MarginEnum['0x'],
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        flexWrap: props.flexWrap || 'nowrap',
        alignItems: props.alignItems ?? 'center',
        justifyContent: props.justifyContent,
        marginLeft: props.marginLeft,
        backgroundColor: props.backgroundColor,
        borderTopWidth: props.borderTopWidth,
        borderBottomWidth: props.borderBottomWidth,
        borderBottomColor: props.borderBottomColor,
        borderTopColor: props.borderTopColor,
        borderStyle: props.borderStyle,
        paddingVertical: props.paddingVertical,
        marginVertical: props.marginVertical,
        flex: props.flex,
        borderRadius: props.borderRadius,
      }}>
      {props.children}
    </View>
  );
};
