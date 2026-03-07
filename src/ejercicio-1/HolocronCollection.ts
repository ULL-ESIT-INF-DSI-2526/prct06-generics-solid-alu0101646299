import {BasicGalacticCollection} from "./BasicGalacticCollection"
import {SearchByOriginPlanet, SearchByYear} from "./GalacticRegistry"
import {Holocron} from "./BasicInterfaces"

export class HolocronCollection extends BasicGalacticCollection<Holocron>
  implements SearchByOriginPlanet<Holocron>, SearchByYear<Holocron> {

  findByOriginPlanet(planet: string): Holocron[] { return this.registry.filter(holocron => holocron.originPlanet === planet); }
  findByYear(year: string): Holocron[] { return this.registry.filter(holocron => holocron.creationYear === year); }
}