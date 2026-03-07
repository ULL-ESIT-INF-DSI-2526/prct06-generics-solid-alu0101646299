import { describe, test, expect, beforeEach } from 'vitest';
import { JediMasterCollection } from '../src/ejercicio-1/JediMasterCollection';
import { StarshipCollection } from '../src/ejercicio-1/StarshipCollection';
import { HolocronCollection } from '../src/ejercicio-1//HolocronCollection';
import { JediMaster, Starship, Holocron } from '../src/ejercicio-1/BasicInterfaces';

describe('JediMasterCollection', () => {
  let jediCollection: JediMasterCollection;
  
  const yoda: JediMaster = { name: 'Yoda', affiliation: 'República', power: 99, originPlanet: 'Dagobah' };
  const vader: JediMaster = { name: 'Darth Vader', affiliation: 'Imperio', power: 95, originPlanet: 'Tatooine' };
  const luke: JediMaster = { name: 'Luke Skywalker', affiliation: 'República', power: 90, originPlanet: 'Tatooine' };

  beforeEach(() => {
    jediCollection = new JediMasterCollection();
    jediCollection.add(yoda);
    jediCollection.add(vader);
    jediCollection.add(luke);
  });

  test('add, getAll', () => {
    expect(jediCollection.getAll()).toContain(yoda);
  });

  test('remove', () => {
    jediCollection.remove(vader);
    expect(jediCollection.getAll()).not.toContain(vader);
  });

  test('findByName', () => {
    expect(jediCollection.findByName('Yoda')[0]).toEqual(yoda);
  });

  test('findByAffiliation', () => {
    const result = jediCollection.findByAffiliation('República');
    expect(result).toContain(yoda);
    expect(result).toContain(luke);
  });

  test('findByPower', () => {
    const result = jediCollection.findByPower(95);
    expect(result[0]).toEqual(vader);
  });

  test('findByOriginPlanet', () => {
    const result = jediCollection.findByOriginPlanet('Tatooine');
    expect(result).toContain(vader);
    expect(result).toContain(luke);
  });
});

describe('StarshipCollection', () => {
  let starshipCollection: StarshipCollection;

  const xWing: Starship = { name: 'X-Wing', shipClass: 'Caza Estelar', buildYear: '0 BBY' };
  const tieFighter: Starship = { name: 'TIE Fighter', shipClass: 'Caza Estelar', buildYear: '0 BBY' };
  const venator: Starship = { name: 'Crucero Venator', shipClass: 'Destructor', buildYear: '22 BBY' };

  beforeEach(() => {
    starshipCollection = new StarshipCollection();
    starshipCollection.add(xWing);
    starshipCollection.add(tieFighter);
    starshipCollection.add(venator);
  });

  test('findByClass', () => {
    const result = starshipCollection.findByClass('Caza Estelar');
    expect(result).toContain(xWing);
    expect(result).toContain(tieFighter);
  });

  test('findByYear', () => {
    const result = starshipCollection.findByYear('22 BBY');
    expect(result[0]).toEqual(venator);
  });
});

describe('HolocronCollection', () => {
  let holocronCollection: HolocronCollection;
  
  const sithHolocron: Holocron = { name: 'Holocrón de Revan', originPlanet: 'Korriban', creationYear: '3956 BBY' };
  const jediHolocron: Holocron = { name: 'Holocrón de Yoda', originPlanet: 'Coruscant', creationYear: '1000 BBY' };
  const anotherSithHolocron: Holocron = { name: 'Holocrón de Bane', originPlanet: 'Korriban', creationYear: '1000 BBY' };

  beforeEach(() => {
    holocronCollection = new HolocronCollection();
    holocronCollection.add(sithHolocron);
    holocronCollection.add(jediHolocron);
    holocronCollection.add(anotherSithHolocron);
  });

  test('findByOriginPlanet', () => {
    const result = holocronCollection.findByOriginPlanet('Korriban');
    expect(result).toContain(sithHolocron);
    expect(result).toContain(anotherSithHolocron);
  });

  test('findByYear', () => {
    const result = holocronCollection.findByYear('1000 BBY');
    expect(result).toContain(jediHolocron);
    expect(result).toContain(anotherSithHolocron);
  });
});