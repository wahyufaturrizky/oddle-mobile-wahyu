import {Text} from 'components/Text';
import {Row} from 'layout/Row';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ColorBaseEnum} from 'styles/Colors';
import {MarginEnum, FontWeightSizeEnum} from 'styles/Spacer';
import Button from './Button';

const ButtonFloating = ({
  onPress,
  right,
  left,
  top,
  bottom,
  iconName,
  color,
  label,
  showLabel,
  width,
  noAnimated,
}) => {
  const widthAnim = useRef(new Animated.Value(width || 131)).current;
  const [current, setCurent] = useState(0);

  const expand = useCallback(() => {
    Animated.timing(widthAnim, {
      toValue: width || 131,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [width, widthAnim]);

  const shrink = useCallback(() => {
    Animated.timing(widthAnim, {
      toValue: 40,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [widthAnim]);
  useEffect(() => {
    if (!showLabel) shrink();
    if (showLabel) expand();
  }, [expand, shrink, showLabel]);

  useEffect(() => {
    const listenerId = widthAnim.addListener((animated) => {
      setCurent(animated.value);
    });
    return () => {
      widthAnim.removeListener(listenerId);
    };
  }, [widthAnim, expand, shrink, showLabel]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        overflow: 'hidden',
        top: top || 'auto',
        right: right || 'auto',
        bottom: bottom || 'auto',
        left: left || 'auto',
        width: noAnimated ? undefined : widthAnim,
      }}>
      <Button.Link onPress={onPress} variant="navigation-tab">
        <Row>
          <IconFontAwesome5 name={iconName} color={color} size={16} />
          {label && current > 50 && (
            <Text
              style={{position: 'absolute', left: 15}}
              label={label}
              marginLeft={MarginEnum['0.5x']}
              color={ColorBaseEnum.white}
              fontWeight={FontWeightSizeEnum.bold}
            />
          )}
          {label && noAnimated && (
            <Text
              style={{position: 'absolute', left: 15}}
              label={label}
              marginLeft={MarginEnum['0.5x']}
              color={ColorBaseEnum.white}
              fontWeight={FontWeightSizeEnum.bold}
            />
          )}
        </Row>
      </Button.Link>
    </Animated.View>
  );
};

export default ButtonFloating;
