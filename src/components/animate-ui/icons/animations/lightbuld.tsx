import {type Variants } from 'motion/react';


import {
  
  type IconProps,
} from '@/components/animate-ui/icons/icon';



export type LightbulbProps = IconProps<keyof typeof animations>;

export const animations = {
  default: {
    path1: {
      initial: {
        rotate: 0,
        fill: 'transparent',
      },
      animate: {
        transformOrigin: 'bottom center',
        fill: 'currentColor',
        rotate: [0, -20, 15, -7, 0],
        fillOpacity: [0, 1, 0, 1, 0],
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
          rotate: {
            duration: 0.8,
            ease: 'easeInOut',
            times: [0, 0.4, 0.6, 0.8, 1],
          },
          fillOpacity: {
            duration: 0.3,
            ease: 'easeInOut',
            times: [0, 0.4, 0.6, 0.8, 1],
            delay: 0.4,
          },
        },
      },
    },
    path2: {
      initial: {
        rotate: 0,
      },
      animate: {
        transformOrigin: 'bottom center',
        rotate: [0, 0, 10, -5, 0],
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
          times: [0, 0.4, 0.6, 0.8, 1],
        },
      },
    },
    path3: {},
  } satisfies Record<string, Variants>,
} as const;
