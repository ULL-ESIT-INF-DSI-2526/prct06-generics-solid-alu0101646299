import {Podcast} from "./Podcast"
import {Song} from "./Song"

/**
 * Clase genérica History que permite gestionar una colección de elementos reproducibles
 */
export class History<T extends Podcast | Song> {
  constructor(private readonly collection: T[] = []) { this.collection = collection; }

  add(element: T): void { this.collection.push(element); }

  remove(index: number): void { 
    if (index < 0 || index >= this.collection.length) { throw new Error("Índice incorrecto")}
    this.collection.splice(index, 1); 
  }

  get(index: number): T | undefined { 
    if (index < 0 || index >= this.collection.length) { throw new Error("Índice incorrecto")}
    return this.collection.at(index);
  }

  size(): number { return this.collection.length; }

  filter(predicado: (item: Podcast | Song) => boolean): History<T> { return new History(this.collection.filter(predicado)); }

  duration(): number { return this.collection.reduce((acc, element) => { return element.duration() + acc}, 0); }
}