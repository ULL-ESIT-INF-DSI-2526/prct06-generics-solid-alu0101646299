export interface Entity {
  name: string;
}

export interface JediMaster extends Entity {
  affiliation: "República" | "Imperio" | "Sith" | "Independiente";
  power: number;
  originPlanet: string;
}

export interface Starship extends Entity {
  shipClass: string;
  buildYear: string;
}

export interface Holocron extends Entity {
  creationYear: string;
  originPlanet: string;
}