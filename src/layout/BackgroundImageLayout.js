import React from 'react';
import {ImageBackground, View} from 'react-native';
import {ColorPrimaryEnum} from 'styles/Colors';

export const BackgroundImageLayout = (props) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        resizeMode: props.resizeMode,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        height: props.height,
        width: props.width,
        padding: props.padding,
        backgroundColor: ColorPrimaryEnum.grey,
      }}
      imageStyle={props.imageStyle}
      {...props}>
      {!props.transparent && (
        <View
          style={{
            backgroundColor: props.backgroundColor,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: props.opacity,
          }}
        />
      )}
      {props.children}
    </ImageBackground>
  );
};
