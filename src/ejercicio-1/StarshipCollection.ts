import {BasicGalacticCollection} from "./BasicGalacticCollection"
import {SearchByClass, SearchByYear} from "./GalacticRegistry"
import {Starship} from "./BasicInterfaces"

export class StarshipCollection extends BasicGalacticCollection<Starship>
  implements SearchByClass<Starship>, SearchByYear<Starship> {

  findByClass(shipClass: string): Starship[] { return this.registry.filter(ship => ship.shipClass === shipClass); }
  findByYear(year: string): Starship[] { return this.registry.filter(ship => ship.buildYear === year); }
}