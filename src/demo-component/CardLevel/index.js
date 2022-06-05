import {BasicLayout} from 'layout/BasicLayout';
import React from 'react';
import {Card} from 'components/Card';

export const CardLevel = () => {
  return (
    <BasicLayout>
      <Card width={138.64} height={120} variant="4x" />
      <Card width={138.64} height={120} variant="6x" />
      <Card width={138.64} height={120} variant="12x" />
      <Card width={138.64} height={120} variant="24x" />
    </BasicLayout>
  );
};
