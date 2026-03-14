'use client';

// import * as React from 'react';


import {
  
  IconWrapper,
 
} from '@/components/animate-ui/icons/icon';
import type { PauseProps } from '@/components/animate-ui/icons/animations/pause';
import { getVariants, useAnimateIconContext, } from '@/components/animate-ui/icons/utils';
import { motion} from 'motion/react';
import { animations } from '@/components/animate-ui/icons/animations/pause';

function Pause(props: PauseProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}
export function IconComponent({ size, ...props }: PauseProps) {
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
      <motion.rect
        x={14}
        y={4}
        width={4}
        height={16}
        rx={1}
        variants={variants.rect1}
        initial="initial"
        animate={controls}
      />
      <motion.rect
        x={6}
        y={4}
        width={4}
        height={16}
        rx={1}
        variants={variants.rect2}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}
export {
  Pause,
  Pause as PauseIcon,
  type PauseProps,
  type PauseProps as PauseIconProps,
};
