import { describe, test, expect, beforeEach } from 'vitest';
import { History } from '../src/ejercicio-6/History';
import { Podcast } from '../src/ejercicio-6/Podcast';
import { Song } from '../src/ejercicio-6/Song';

describe('History', () => {
  let myHistory = new History<Podcast | Song>();

  beforeEach(() => {
    myHistory = new History<Podcast | Song>();
  });

  test("add()", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    myHistory.add(myPodcast);
    expect(myHistory.get(0)).toStrictEqual(myPodcast);
  });

  test("remove()", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    myHistory.add(myPodcast);
    myHistory.remove(0);
    expect(() => myHistory.get(0)).toThrowError("Índice incorrecto");
  });

  test("remove() Error", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    myHistory.add(myPodcast);
    expect(() => myHistory.remove(1)).toThrowError("Índice incorrecto");
  });

  test("get()", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    myHistory.add(myPodcast);
    expect(myHistory.get(0)).toStrictEqual(myPodcast);
  });

  test("get() Error", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    myHistory.add(myPodcast);
    expect(() => myHistory.get(1)).toThrowError("Índice incorrecto");
  });

  test("size()", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    const mySong = new Song("titulo1", "artista1", "genero1", "album1", 60);
    myHistory.add(myPodcast);
    myHistory.add(mySong);
    expect(myHistory.size()).toBe(2);
  });

  test("filter()", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    const mySong = new Song("titulo1", "artista1", "genero1", "album1", 60);
    myHistory.add(myPodcast);
    myHistory.add(mySong);
    const myNewHistory = myHistory.filter(element => element === myPodcast);
    expect(myNewHistory.get(0)).toStrictEqual(myPodcast);
  });

  test("duration()", () => {
    const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));
    const mySong = new Song("titulo1", "artista1", "genero1", "album1", 60);
    myHistory.add(myPodcast);
    myHistory.add(mySong);
    expect(myHistory.duration()).toBe(3660);
  });
});

describe('Song', () => {
  const mySong = new Song("titulo1", "artista1", "genero1", "album1", 60);

  test("duration()", () => {
    expect(mySong.duration()).toBe(60);
  });

  test("data()", () => {
    expect(mySong.data()).toBe("titulo1, artista1, genero1, album1, 60");
  });

  test("getTitulo()", () => {
    expect(mySong.getTitulo()).toBe("titulo1");
  });

  test("getArtista()", () => {
    expect(mySong.getArtista()).toBe("artista1");
  });

  test("getGenero()", () => {
    expect(mySong.getGenero()).toBe("genero1");
  });

  test("getAlbum()", () => {
    expect(mySong.getAlbum()).toBe("album1");
  });
});

describe('Podcast', () => {
  const myPodcast = new Podcast({nombre: "podcast1", numEpisodio: 1}, "tematica1", "nombre1", new Date(2026, 3, 9, 10, 0, 0), new Date(2026, 3, 9, 11, 0, 0));

  test("duration()", () => {
    expect(myPodcast.duration()).toBe(3600);
  });

  test("data()", () => {
    expect(myPodcast.data()).toStrictEqual({nombre: "podcast1", numEpisodio: 1});
  });

  test("getTematica()", () => {
    expect(myPodcast.getTematica()).toBe("tematica1");
  });

  test("getNombrePresentador()", () => {
    expect(myPodcast.getNombrePresentador()).toBe("nombre1");
  });

  test("getFechaInicio()", () => {
    expect(myPodcast.getFechaInicio()).toStrictEqual(new Date(2026, 3, 9, 10, 0, 0));
  });

  test("getFechaFin()", () => {
    expect(myPodcast.getFechaFin()).toStrictEqual(new Date(2026, 3, 9, 11, 0, 0));
  });
});