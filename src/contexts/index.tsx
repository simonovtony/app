import { Steps } from '@/types/enums';
import { emptyCallback } from '@/utilities';
import { createContext } from 'react';

export interface StoreContext {
  isFirstRender: boolean;
  step: Steps;
  setStep: (newSteps: Steps) => void;
}

export const Store = createContext<StoreContext>({
  isFirstRender: true,
  step: Steps.Content,
  setStep: emptyCallback
});