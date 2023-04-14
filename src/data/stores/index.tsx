import React from 'react';

import { WaysToSaveStore } from './ways-to-save';

let clientSideStores: any;

export interface IStores {
  waysToSaveStore: WaysToSaveStore
}

export function getStores(initialData = { 
  waysToSaveStore: {opportunities: [], degree: null, militaryActiveDuty: false}
}): IStores {
  if (typeof window === 'undefined') {
    return {
      waysToSaveStore: new WaysToSaveStore(initialData.waysToSaveStore)
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      waysToSaveStore: new WaysToSaveStore(initialData.waysToSaveStore)
    };
  }

  return clientSideStores;
}

const StoreContext = React.createContext({} as IStores);

export function StoreProvider(props: any) {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}
