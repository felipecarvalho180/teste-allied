export interface TabletInterface {
  sku: string;
  franquia: string;
  valor: string;
  ativo: boolean;
}

export interface ComputerInterface {
  sku: string;
  franquia: string;
  valor: string;
  aparelho: Equipment;
  ativo: boolean;
}

export interface WifiInterface {
  sku: string;
  franquia: string;
  valor: string;
  aparelho: Equipment;
  ativo: boolean;
}

export interface Equipment {
  nome: string;
  valor: string;
  numeroParcelas: number;
  valorParcela: string;
}

export function Tablet({
  sku,
  franquia,
  valor,
  ativo,
}: TabletInterface): TabletInterface {
  return {
    sku,
    franquia,
    valor,
    ativo,
  };
}

export function Computer({
  sku,
  franquia,
  valor,
  aparelho,
  ativo,
}: ComputerInterface): ComputerInterface {
  return {
    sku,
    franquia,
    aparelho: {
      nome: aparelho.nome,
      numeroParcelas: aparelho.numeroParcelas,
      valor: aparelho.valor,
      valorParcela: aparelho.valorParcela,
    },
    valor,
    ativo,
  };
}

export function Wifi({
  sku,
  franquia,
  valor,
  aparelho,
  ativo,
}: WifiInterface): WifiInterface {
  return {
    sku,
    franquia,
    aparelho: {
      nome: aparelho.nome,
      numeroParcelas: aparelho.numeroParcelas,
      valor: aparelho.valor,
      valorParcela: aparelho.valorParcela,
    },
    valor,
    ativo,
  };
}
