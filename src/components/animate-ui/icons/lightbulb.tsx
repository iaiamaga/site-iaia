'use client';

// import * as React from 'react';
import { motion} from 'motion/react';


import {
  
  IconWrapper,
} from '@/components/animate-ui/icons/icon';

import { getVariants, useAnimateIconContext, } from '@/components/animate-ui/icons/utils';
import { animations } from '@/components/animate-ui/icons/animations/lightbuld';
import type { LightbulbProps } from '@/components/animate-ui/icons/animations/lightbuld';

function IconComponent({ size, ...props }: LightbulbProps) {
  const { controls } = useAnimateIconContext();
  const variants = getVariants(animations);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        variants={variants.path1}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M9 18h6"
        variants={variants.path2}
        initial="initial"
        animate={controls}
      />
      <motion.path
        d="M10 22h4"
        variants={variants.path3}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function Lightbulb(props: LightbulbProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  Lightbulb,
  Lightbulb as LightbulbIcon,
  type LightbulbProps,
  type LightbulbProps as LightbulbIconProps,
};
