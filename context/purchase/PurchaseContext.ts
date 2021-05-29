import { createContext } from 'react';
import { ComputerInterface, TabletInterface, WifiInterface } from '../../models/plans/plans.model';
import { PlatformInterface } from '../../models/platforms/platform.model';

interface PurchaseContextInterface {
  platform: PlatformInterface;
  plan: ComputerInterface | TabletInterface | WifiInterface;
  selectPlatform: (selectedPlatform: PlatformInterface) => void;
  selectPlan: (selectedPlan: ComputerInterface | TabletInterface | WifiInterface) => void;
}

export const PurchaseContext = createContext({} as PurchaseContextInterface);

PurchaseContext.displayName = 'PurchaseContext';