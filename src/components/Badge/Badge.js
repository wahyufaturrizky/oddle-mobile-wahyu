import React from 'react';
import {BadgeCircle} from './Badge.Circle.';
import {BadgeNormal} from './Badge.Normal';

const Badge = (props: {children: React.ReactNode}) => {
  return props.children;
};

Badge.Normal = BadgeNormal;
Badge.Circle = BadgeCircle;

export default Badge;
