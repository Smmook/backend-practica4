export type Persona = {
  nombre: string;
  edad: number;
  id: string;
};

export type Planeta = {
  nombre: string;
  personas: Persona[];
  id: string;
};

export type Dimension = {
  nombre: string;
  planetas: Planeta[];
  id: string;
};
