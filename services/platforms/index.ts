import {
  Platform,
  PlatformInterface,
} from '../../models/platforms/platform.model';
import api from '../api';

export async function getPlatforms(): Promise<PlatformInterface[]> {
  const { data } = await api.get('/plataformas');

  return data.plataformas.map((plataform: PlatformInterface) =>
    Platform(plataform)
  );
}
