import React from 'react';

import { WaysToSaveStore } from './ways-to-save';
import { ApplicationFormStore } from './application-form';

let clientSideStores: any;

export interface IStores {
  waysToSaveStore: WaysToSaveStore;
  applicationFormStore: ApplicationFormStore;
}

export function getStores(initialData = { 
  waysToSaveStore: {opportunities: [], degree: null, militaryActiveDuty: false},
  applicationFormStore: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    postalCode: '',
    militaryAffiliation: ''
  }
}): IStores {
  if (typeof window === 'undefined') {
    return {
      waysToSaveStore: new WaysToSaveStore(initialData.waysToSaveStore),
      applicationFormStore: new ApplicationFormStore(initialData.applicationFormStore)
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      waysToSaveStore: new WaysToSaveStore(initialData.waysToSaveStore),
      applicationFormStore: new ApplicationFormStore(initialData.applicationFormStore)
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
