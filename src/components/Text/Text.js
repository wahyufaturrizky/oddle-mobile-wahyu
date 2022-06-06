/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, View} from 'react-native';
import {Skeleton} from 'components/Skeleton';

const Text = (props) => {
  if (props.isShowSkeleton) {
    return (
      <Skeleton
        color={props.colorSkeleton}
        width={props.widthSkeleton}
        height={props.heightSkeleton}
        borderRadius={props.borderRadiusSkeleton}
        marginTop={props.marginTopSkeleton}
        marginBottom={props.marginBottomSkeleton}
      />
    );
  } else {
    return (
      <View style={props.textContainerStyle}>
        {props.wrapText ? (
          <RNText
            style={{
              fontFamily:
                props.variant === 'h1'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'h2-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'h2-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'h3-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'h3-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'h4-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'h4-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'p-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'p-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'p-small'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'p-small-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'p-link'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'p-label'
                  ? 'IBMPlexSans-Regular'
                  : 'IBMPlexSans-Regular',
              fontSize:
                props.variant === 'h1'
                  ? 26
                  : props.variant === 'h2-regular'
                  ? 24
                  : props.variant === 'h2-bold'
                  ? 24
                  : props.variant === 'h3-regular'
                  ? 20
                  : props.variant === 'h3-bold'
                  ? 20
                  : props.variant === 'h4-regular'
                  ? 18
                  : props.variant === 'h4-bold'
                  ? 18
                  : props.variant === 'p-regular'
                  ? 16
                  : props.variant === 'p-bold'
                  ? 16
                  : props.variant === 'p-small'
                  ? 14
                  : props.variant === 'p-small-bold'
                  ? 14
                  : props.variant === 'p-link'
                  ? 16
                  : props.variant === 'p-label'
                  ? 10
                  : 16,
              lineHeight:
                props.variant === 'h1'
                  ? 34
                  : props.variant === 'h2-regular'
                  ? 31
                  : props.variant === 'h2-bold'
                  ? 31
                  : props.variant === 'h3-regular'
                  ? 26
                  : props.variant === 'h3-bold'
                  ? 26
                  : props.variant === 'h4-regular'
                  ? 23.4
                  : props.variant === 'h4-bold'
                  ? 23.4
                  : props.variant === 'p-regular'
                  ? 20
                  : props.variant === 'p-bold'
                  ? 20
                  : props.variant === 'p-small'
                  ? 20
                  : props.variant === 'p-small-bold'
                  ? 20
                  : props.variant === 'p-link'
                  ? 20
                  : props.variant === 'p-label'
                  ? 12
                  : 23,
              color: props.color,
              textAlign: props.textAlign,
              textDecorationLine:
                props.variant === 'p-link'
                  ? 'underline'
                  : props.textDecorationLine,
              marginVertical: props.marginVertical,
              marginTop: props.marginTop,
              marginBottom: props.marginBottom,
              marginLeft: props.marginLeft,
              marginRight: props.marginRight,
              fontStyle: props.fontStyle,
              fontWeight: props.fontWeight,
              textAlignVertical: props.textAlignVertical,
              padding: props.padding,
              borderRadius: props.borderRadius,
              opacity: props.opacity,
            }}
            textTransform={props.textTransform1}>
            {props.label1}
            <RNText
              style={{
                fontFamily:
                  props.variant === 'h1'
                    ? 'IBMPlexSans-Bold'
                    : props.variant === 'h2-regular'
                    ? 'IBMPlexSans-Regular'
                    : props.variant === 'h2-bold'
                    ? 'IBMPlexSans-Bold'
                    : props.variant === 'h3-regular'
                    ? 'IBMPlexSans-Regular'
                    : props.variant === 'h3-bold'
                    ? 'IBMPlexSans-Bold'
                    : props.variant === 'h4-regular'
                    ? 'IBMPlexSans-Regular'
                    : props.variant === 'h4-bold'
                    ? 'IBMPlexSans-Bold'
                    : props.variant === 'p-regular'
                    ? 'IBMPlexSans-Regular'
                    : props.variant === 'p-bold'
                    ? 'IBMPlexSans-Bold'
                    : props.variant === 'p-small'
                    ? 'IBMPlexSans-Regular'
                    : props.variant === 'p-small-bold'
                    ? 'IBMPlexSans-Bold'
                    : props.variant === 'p-link'
                    ? 'IBMPlexSans-Regular'
                    : props.variant === 'p-label'
                    ? 'IBMPlexSans-Regular'
                    : 'IBMPlexSans-Regular',
                fontSize:
                  props.variant === 'h1'
                    ? 26
                    : props.variant === 'h2-regular'
                    ? 24
                    : props.variant === 'h2-bold'
                    ? 24
                    : props.variant === 'h3-regular'
                    ? 20
                    : props.variant === 'h3-bold'
                    ? 20
                    : props.variant === 'h4-regular'
                    ? 18
                    : props.variant === 'h4-bold'
                    ? 18
                    : props.variant === 'p-regular'
                    ? 16
                    : props.variant === 'p-bold'
                    ? 16
                    : props.variant === 'p-small'
                    ? 14
                    : props.variant === 'p-small-bold'
                    ? 14
                    : props.variant === 'p-link'
                    ? 16
                    : props.variant === 'p-label'
                    ? 10
                    : 16,
                lineHeight:
                  props.variant === 'h1'
                    ? 34
                    : props.variant === 'h2-regular'
                    ? 31
                    : props.variant === 'h2-bold'
                    ? 31
                    : props.variant === 'h3-regular'
                    ? 26
                    : props.variant === 'h3-bold'
                    ? 26
                    : props.variant === 'h4-regular'
                    ? 23.4
                    : props.variant === 'h4-bold'
                    ? 23.4
                    : props.variant === 'p-regular'
                    ? 20
                    : props.variant === 'p-bold'
                    ? 20
                    : props.variant === 'p-small'
                    ? 20
                    : props.variant === 'p-small-bold'
                    ? 20
                    : props.variant === 'p-link'
                    ? 20
                    : props.variant === 'p-label'
                    ? 12
                    : 23,
                color: props.color,
                textAlign: props.textAlign,
                textDecorationLine:
                  props.variant === 'p-link'
                    ? 'underline'
                    : props.textDecorationLine,
                marginVertical: props.marginVertical,
                marginTop: props.marginTop,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
                fontStyle: props.fontStyle,
                fontWeight: props.fontWeight,
                textAlignVertical: props.textAlignVertical,
                padding: props.padding,
                borderRadius: props.borderRadius,
                opacity: props.opacity,
              }}
              textTransform={props.textTransform2}>
              {props.label2}
            </RNText>
          </RNText>
        ) : (
          <RNText
            style={{
              fontFamily:
                props.variant === 'h1'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'h2-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'h2-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'h3-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'h3-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'h4-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'h4-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'p-regular'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'p-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'p-small'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'p-small-bold'
                  ? 'IBMPlexSans-Bold'
                  : props.variant === 'p-link'
                  ? 'IBMPlexSans-Regular'
                  : props.variant === 'p-label'
                  ? 'IBMPlexSans-Regular'
                  : 'IBMPlexSans-Regular',
              fontSize:
                props.variant === 'h1'
                  ? 26
                  : props.variant === 'h2-regular'
                  ? 24
                  : props.variant === 'h2-bold'
                  ? 24
                  : props.variant === 'h3-regular'
                  ? 20
                  : props.variant === 'h3-bold'
                  ? 20
                  : props.variant === 'h4-regular'
                  ? 18
                  : props.variant === 'h4-bold'
                  ? 18
                  : props.variant === 'p-regular'
                  ? 16
                  : props.variant === 'p-bold'
                  ? 16
                  : props.variant === 'p-small'
                  ? 14
                  : props.variant === 'p-small-bold'
                  ? 14
                  : props.variant === 'p-link'
                  ? 16
                  : props.variant === 'p-label'
                  ? 10
                  : 16,
              lineHeight:
                props.variant === 'h1'
                  ? 34
                  : props.variant === 'h2-regular'
                  ? 31
                  : props.variant === 'h2-bold'
                  ? 31
                  : props.variant === 'h3-regular'
                  ? 26
                  : props.variant === 'h3-bold'
                  ? 26
                  : props.variant === 'h4-regular'
                  ? 23.4
                  : props.variant === 'h4-bold'
                  ? 23.4
                  : props.variant === 'p-regular'
                  ? 20
                  : props.variant === 'p-bold'
                  ? 20
                  : props.variant === 'p-small'
                  ? 20
                  : props.variant === 'p-small-bold'
                  ? 20
                  : props.variant === 'p-link'
                  ? 20
                  : props.variant === 'p-label'
                  ? 12
                  : 23,
              color: props.color,
              textAlign: props.textAlign,
              textDecorationLine:
                props.variant === 'p-link'
                  ? 'underline'
                  : props.textDecorationLine,
              marginVertical: props.marginVertical,
              marginTop: props.marginTop,
              marginBottom: props.marginBottom,
              marginLeft: props.marginLeft,
              marginRight: props.marginRight,
              fontStyle: props.fontStyle,
              fontWeight: props.fontWeight,
              textAlignVertical: props.textAlignVertical,
              padding: props.padding,
              borderRadius: props.borderRadius,
              opacity: props.opacity,
              paddingHorizontal: props.paddingHorizontal,
              paddingVertical: props.paddingVertical,
              backgroundColor: props.backgroundColor,
              width: props.width,
            }}
            textTransform={props.textTransform}>
            {props.label}
          </RNText>
        )}
      </View>
    );
  }
};

export default Text;
