import {
 
  type LegacyAnimationControls,
  type Variants,
  
} from 'motion/react';
import * as React from 'react';

type StaticAnimations = keyof typeof staticAnimations;
type TriggerProp<T = string> = boolean | StaticAnimations | T;
type Trigger = TriggerProp<string>;

type AnimateIconContextValue = {
  controls: LegacyAnimationControls | undefined;
  animation: StaticAnimations | string;
  loop: boolean;
  loopDelay: number;
  active: boolean;
  animate?: Trigger;
  initialOnAnimateEnd?: boolean;
  completeOnStop?: boolean;
  persistOnAnimateEnd?: boolean;
  delay?: number;
};

export const AnimateIconContext = React.createContext<AnimateIconContextValue | null>(
  null,
);


export const staticAnimations = {
  path: {
    initial: { pathLength: 1 },
    animate: {
      pathLength: [0.05, 1],
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  } as Variants,
  'path-loop': {
    initial: { pathLength: 1 },
    animate: {
      pathLength: [1, 0.05, 1],
      transition: {
        duration: 1.6,
        ease: 'easeInOut',
      },
    },
  } as Variants,
} as const;

export const pathClassName =
  "[&_[stroke-dasharray='1px_1px']]:![stroke-dasharray:1px_0px]";


  
export function useAnimateIconContext() {
    const context = React.useContext(AnimateIconContext);
    if (!context)
      return {
        controls: undefined,
        animation: 'default',
        loop: undefined,
        loopDelay: undefined,
        active: undefined,
        animate: undefined,
        initialOnAnimateEnd: undefined,
        completeOnStop: undefined,
        persistOnAnimateEnd: undefined,
        delay: undefined,
      };
    return context;
  }

export function getVariants<
  V extends { default: T; [key: string]: T },
  T extends Record<string, Variants>,
>(animations: V): T {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { animation: animationType } = useAnimateIconContext();

  let result: T;

  if (animationType in staticAnimations) {
    const variant = staticAnimations[animationType as StaticAnimations];
    result = {} as T;
    for (const key in animations.default) {
      if (
        (animationType === 'path' || animationType === 'path-loop') &&
        key.includes('group')
      )
        continue;
      result[key] = variant as T[Extract<keyof T, string>];
    }
  } else {
    result = (animations[animationType as keyof V] as T) ?? animations.default;
  }

  return result;
}