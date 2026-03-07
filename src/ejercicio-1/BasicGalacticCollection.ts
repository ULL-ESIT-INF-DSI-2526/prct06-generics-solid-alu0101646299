import {GalacticRegistry, SearchByName} from "./GalacticRegistry"
import {Entity} from "./BasicInterfaces"

export abstract class BasicGalacticCollection<T extends Entity> implements GalacticRegistry<T>, SearchByName<T> {
  protected registry: T[] = [];

  add(item: T): void { this.registry.push(item); }
  remove(item: T): void { this.registry = this.registry.filter(current => current !== item); }
  getAll(): T[] { return this.registry; }

  findByName(name: string): T[] { return this.registry.filter(item => item.name === name); }
}