'use client';

// import * as React from 'react';



import {
  
  IconWrapper,
 
} from '@/components/animate-ui/icons/icon';

import { IconComponent, StarProps } from '@/components/animate-ui/icons/animations/star';

function Star(props: StarProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  Star,
  Star as StarIcon,
  type StarProps,
  type StarProps as StarIconProps,
};
