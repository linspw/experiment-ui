import {
  reactive,
} from 'vue';
import { useWindowSize } from '@vueuse/core';


const screenSizes = {
  mobile: 570,
  tablet: 700,
  largeTablet: 800,
  desktop: 992,
  mediumDesktop: 1240,
  largeDesktop: 1440,
  bigDesktop: 1800,
};

export function useInterface() {
  const { width, height } = useWindowSize();

  const $interfaceState = reactive({

    window: {
      width,
      height,
      isSizeUp(sizeName: string) {
        return $interfaceState.window.width > screenSizes[sizeName as keyof typeof screenSizes];
      },
      isSizeDown(sizeName: string) {
        return $interfaceState.window.width <= screenSizes[sizeName as keyof typeof screenSizes];
      },
    },
  });

  return $interfaceState
}

