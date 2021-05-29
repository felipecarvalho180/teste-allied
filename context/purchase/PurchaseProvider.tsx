import React, { useState } from 'react';
import {
  ComputerInterface,
  TabletInterface,
  WifiInterface,
} from '../../models/plans/plans.model';
import { PlatformInterface } from '../../models/platforms/platform.model';
import { PurchaseContext } from './PurchaseContext';

const PurchaseProvider: React.FC = ({ children }) => {
  const [platform, setPlatform] = useState<PlatformInterface>();
  const [plan, setPlan] =
    useState<ComputerInterface | TabletInterface | WifiInterface>();

  function selectPlatform(selectedPlatform: PlatformInterface) {
    setPlatform(selectedPlatform);
  }

  function selectPlan(
    selectedPlan: ComputerInterface | TabletInterface | WifiInterface
  ) {
    setPlan(selectedPlan);
  }

  return (
    <PurchaseContext.Provider
      value={{
        platform,
        plan,
        selectPlatform,
        selectPlan,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseProvider;
