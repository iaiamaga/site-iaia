import { type Variants } from 'motion/react';
import {

  type IconProps,
} from '@/components/animate-ui/icons/icon';



export type PauseProps = IconProps<keyof typeof animations>;

export const animations = {
  default: {
    rect1: {
      initial: {
        x: 0,
      },
      animate: {
        x: 1.5,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      },
    },
    rect2: {
      initial: {
        x: 0,
      },
      animate: {
        x: -1.5,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      },
    },
  } satisfies Record<string, Variants>,
  'default-loop': {
    rect1: {
      initial: {
        x: 0,
      },
      animate: {
        x: [0, 1.5, 0],
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
        },
      },
    },
    rect2: {
      initial: {
        x: 0,
      },
      animate: {
        x: [0, -1.5, 0],
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
        },
      },
    },
  } satisfies Record<string, Variants>,
} as const;

