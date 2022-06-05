import React from 'react';
import {Image as RNImage} from 'react-native';
import {ColorBaseGrayEnum, ColorBaseTransparentEnum} from 'styles/Colors';

const Image = (props) => {
  return (
    <RNImage
      style={{
        width: props.size,
        height: props.size,
        alignSelf: props.alignSelf,
        backgroundColor: props.noBackgroundColor
          ? ColorBaseTransparentEnum.whiteTransparent
          : ColorBaseGrayEnum.gray100,
        borderRadius: props.borderRadius,
        borderTopLeftRadius: props.borderTopLeftRadius,
        borderBottomLeftRadius: props.borderBottomLeftRadius,
        marginTop: props.marginTop,
        marginRight: props.marginRight,
        resizeMode: props.resizeMode,
        marginVertical: props.marginVertical,
      }}
      {...props}
    />
  );
};

export default Image;
