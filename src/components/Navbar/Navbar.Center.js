import {Text} from 'components/Text';
import React from 'react';
import {Row} from 'layout/Row';
import {Col} from 'layout/Col';
import {ColorBaseGrayEnum} from 'styles/Colors';

const NavbarCenter = (props) => {
  return (
    <>
      <Row>
        <Col>
          <Text
            textAlign="center"
            label={props.title}
            color={ColorBaseGrayEnum.gray700}
            variant="large"
            bold
          />
        </Col>
      </Row>
      {props.subtitle && (
        <Row>
          <Col>
            <Text
              textAlign="center"
              label={props.subtitle}
              color={ColorBaseGrayEnum.gray500}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
export default NavbarCenter;
