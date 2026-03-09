import {Reproducible} from "./Reproducible"

/**
 * Clase concreta Podcast que implementa Reproducible\<\{nombre: string; numEpisodio: number\}\>
 */
export class Podcast implements Reproducible<{nombre: string; numEpisodio: number}> {
  private readonly podcast: {nombre: string; numEpisodio: number};  
  private readonly tematica: string;
  private readonly nombrePresentador: string;
  private readonly fechaInicio: Date;
  private readonly fechaFin: Date;

  constructor(podcast: {nombre: string; numEpisodio: number}, tematica: string, nombrePresentador: string, fechaInicio: Date, fechaFin: Date) {
    this.podcast = podcast;
    this.tematica = tematica;
    this.nombrePresentador = nombrePresentador;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
  }

  getTematica(): string { return this.tematica; }
  getNombrePresentador(): string { return this.nombrePresentador; }
  getFechaInicio(): Date { return this.fechaInicio; }
  getFechaFin(): Date { return this.fechaFin; }

  duration(): number { return (this.fechaFin.getTime() - this.fechaInicio.getTime()) / 1000; }
  data(): {nombre: string; numEpisodio: number} { return this.podcast; }
}