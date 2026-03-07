import {BasicGalacticCollection} from "./BasicGalacticCollection"
import {SearchByAfiliation, SearchByPower, SearchByOriginPlanet} from "./GalacticRegistry"
import {JediMaster} from "./BasicInterfaces"

export class JediMasterCollection extends BasicGalacticCollection<JediMaster> 
  implements SearchByAfiliation<JediMaster>, SearchByPower<JediMaster>, SearchByOriginPlanet<JediMaster> {

  findByAffiliation(affiliation: string): JediMaster[] { return this.registry.filter(jedi => jedi.affiliation === affiliation); }
  findByPower(power: number): JediMaster[] { return this.registry.filter(jedi => jedi.power === power); }
  findByOriginPlanet(planet: string): JediMaster[] { return this.registry.filter(jedi => jedi.originPlanet === planet); }
}