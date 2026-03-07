export interface GalacticRegistry<T> {
  add(item: T): void;
  remove(item: T): void;
  getAll(): T[];
}

export interface SearchByName<T> {
  findByName(name: string): T[];
}

export interface SearchByAfiliation<T> {
  findByAffiliation(affiliation: string): T[];
}

export interface SearchByPower<T> {
  findByPower(power: number): T[];
}

export interface SearchByClass<T> {
  findByClass(shipClass: string): T[];
}

export interface SearchByYear<T> {
  findByYear(year: string): T[];
}

export interface SearchByOriginPlanet<T> {
  findByOriginPlanet(planet: string): T[];
}