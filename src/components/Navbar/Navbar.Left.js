import {Button} from 'components/Button';
import {Text} from 'components/Text';
import {Col} from 'layout/Col';
import {Row} from 'layout/Row';
import React from 'react';
import {View} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {ColorBaseGrayEnum} from 'styles/Colors';
import {FontWeightSizeEnum, MarginEnum} from 'styles/Spacer';
import {alertBackAction} from 'utils/alertBackAction';

// navigation: any because it's same as navigation props from react-native-navigation library
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavbarLeft = (props) => (
  <View
    style={{padding: props.padding, backgroundColor: props.backgroundColor}}>
    <Row>
      {!props.hideButton && (
        <Col>
          <Button.Link
            onPress={
              props.onPress
                ? props.onPress
                : () =>
                    props.isExitBack
                      ? alertBackAction(props.navigation)
                      : props.navigation.goBack()
            }
            variant="navbar">
            <IconIonicons
              color={ColorBaseGrayEnum.gray600}
              name={props.nameIcon ?? 'arrow-back'}
              size={24}
            />
          </Button.Link>
        </Col>
      )}
      <Col>
        <Text
          fontWeight={FontWeightSizeEnum.bold}
          color={ColorBaseGrayEnum.gray600}
          label={props.route?.params?.title || props.title}
          marginLeft={MarginEnum['2x']}
        />
      </Col>
    </Row>
  </View>
);

export default NavbarLeft;
