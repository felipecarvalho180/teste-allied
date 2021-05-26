import api from '../api';

interface GetPlansProps {
  sku: string;
}

export async function getPlans({ sku }: GetPlansProps) {
  const data = await api.get(`/planos/${sku}`);

  return data;
}
