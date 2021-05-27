import {
  Computer,
  ComputerInterface,
  Tablet,
  TabletInterface,
  Wifi,
  WifiInterface,
} from '../../models/plans/plans.model';
import api from '../api';

interface GetPlansProps {
  sku: string;
}

export async function getPlans({
  sku,
}: GetPlansProps): Promise<
  TabletInterface | ComputerInterface | WifiInterface
> {
  const { data } = await api.get(`/planos/${sku}`);

  if (sku == 'TBT01') {
    return data.planos.map((plano: TabletInterface) => Tablet(plano));
  }

  if (sku == 'CPT02') {
    return data.planos.map((plano: ComputerInterface) => Computer(plano));
  }

  if (sku == 'WF03') {
    return data.planos.map((plano: WifiInterface) => Wifi(plano));
  }
}
