'use client';

import { useCallback, useContext, useState, useEffect } from 'react';

import Layout from '@/components/Layout'
import Content from '@/features/Content';
import Detail from '@/features/Detail';
import { Store, StoreContext } from '@/contexts';
import { Steps } from '@/types/enums';
import { Done } from '@/features/Done';

export default function Home() {
  const [storeState, setStoreState] = useState<StoreContext>(useContext(Store));

  const {
    isFirstRender,
    step
  } = storeState;

  storeState.setStep = useCallback((newStep: Steps) => {
    setStoreState({
      ...storeState,
      step: newStep,
      isFirstRender: false,
    })
  }, [storeState]);

  return (
    <Layout>
      <Store.Provider value={storeState}>
        <Content isOpen={step === Steps.Content} />
        {!isFirstRender && (
          <Detail isOpen={step === Steps.Detail} />
        )}
        {!isFirstRender && (
          <Done isOpen={step === Steps.Done} />
        )}
      </Store.Provider>
    </Layout>
  )
}
