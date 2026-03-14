import { type Variants } from 'motion/react';

import {
  type IconProps,
} from '@/components/animate-ui/icons/icon';

export type ClapperboardProps = IconProps<keyof typeof animations>;

export const animations = {
  default: {
    group1: {
      initial: {
        rotate: 0,
        scale: 1,
      },
      animate: {
        rotate: [0, -5, 7, 0],
        scale: [1, 0.9, 1.1, 1],
        transition: {
          duration: 1.2,
          ease: 'easeInOut',
        },
      },
    },
    group2: {
      initial: {
        rotate: 0,
      },
      animate: {
        rotate: [0, -4, 15, 0],
        transformOrigin: 'bottom left',
        transition: {
          duration: 1.2,
          ease: 'easeInOut',
        },
      },
    },
    path1: {},
    path2: {},
    path3: {},
    path4: {},
  } satisfies Record<string, Variants>,
} as const;
