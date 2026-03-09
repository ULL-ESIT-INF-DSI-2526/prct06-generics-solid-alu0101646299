import {Reproducible} from "./Reproducible"

/**
 * Clase concreta Song que implementa Reproducible\<string\>
 */
export class Song implements Reproducible<string> {
  private readonly titulo: string;
  private readonly artista: string;
  private readonly genero: string;
  private readonly album: string;
  private readonly duracion: number;

  constructor(titulo: string, artista: string, genero: string, album: string, duracion: number) {
    this.titulo = titulo;
    this.artista = artista;
    this.genero = genero;
    this.album = album;
    this.duracion = duracion;
  }

  getTitulo(): string { return this.titulo; }
  getArtista(): string { return this.artista; }
  getGenero(): string { return this.genero; }
  getAlbum(): string { return this.album; }

  duration(): number { return this.duracion; }
  data(): string { return this.titulo + ", " + this.artista + ", " + this.genero + ", " + this.album + ", " + this.duracion; }
}