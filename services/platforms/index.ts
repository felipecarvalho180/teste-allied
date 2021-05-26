import api from '../api';

export async function getPlatforms() {
  const { data } = await api.get('/plataformas');

  return data;
}
