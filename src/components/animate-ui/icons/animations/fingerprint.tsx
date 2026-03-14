import { type Variants } from 'motion/react';

import {
  type IconProps,
} from '@/components/animate-ui/icons/icon';


export type FingerprintProps = IconProps<keyof typeof animations>;

export const animations = {
  default: (() => {
    const variants: Record<string, Variants> = {
      group: {
        initial: {
          scale: 1,
        },
        animate: {
          scale: [1, 1.1, 1],
          transition: {
            ease: 'easeInOut',
            duration: 1.5,
          },
        },
      },
      path: {
        initial: {
          strokeOpacity: 0.2,
        },
      },
    };
    new Array(9).fill(0).forEach((_, i) => {
      variants[`path${i + 1}`] = {
        initial: {
          pathLength: 1,
        },
        animate: {
          pathLength: [1, 0.05, 1],
          transition: {
            pathLength: { duration: 1.5, ease: 'easeInOut' },
          },
        },
      };
    });
    return variants;
  })() satisfies Record<string, Variants>,
  'default-2': (() => {
    const variants: Record<string, Variants> = {
      group: {
        initial: {
          scale: 1,
        },
        animate: {
          scale: [1, 1.1, 1],
          transition: {
            ease: 'easeInOut',
            duration: 1.5,
          },
        },
      },
      path: {
        initial: {
          strokeOpacity: 0,
        },
      },
    };
    new Array(9).fill(0).forEach((_, i) => {
      variants[`path${i + 1}`] = {
        initial: {
          pathLength: 1,
        },
        animate: {
          pathLength: [1, 0.05, 1],
          transition: {
            pathLength: { duration: 1.5, ease: 'easeInOut' },
          },
        },
      };
    });
    return variants;
  })() satisfies Record<string, Variants>,
} as const;
