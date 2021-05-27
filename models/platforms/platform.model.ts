export interface PlatformInterface {
  sku: string;
  nome: string;
  descricao: string;
}

export function Platform({
  sku,
  nome,
  descricao,
}: PlatformInterface): PlatformInterface {
  return {
    sku,
    nome,
    descricao,
  };
}
