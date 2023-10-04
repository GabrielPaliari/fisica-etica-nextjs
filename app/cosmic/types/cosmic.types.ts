export enum ETipoAtividade {
  BASICA = "BASICA",
  INV = "INV",
  ORG = "ORG",
  APL = "APL",
}

export type EtapaCosmic = {
  nome: string;
  fichas?: CosmicFile;
  atividades: Atividade[];
};

export type Atividade = {
  nome: string;
  tipo: ETipoAtividade;
  arquivos: {
    principal: CosmicFile;
    aluno?: CosmicFile;
    professor?: CosmicFile;
    complementares?: CosmicFile[];
  };
};

export type CosmicFile = string;
