/**
 * Interfaz genérica que establece el contrato que deberán cumplir 
 * todos los elementos que puedan formar parte de un historial de reproducción.
 */
export interface Reproducible<T> {
  data(): T;
  duration(): number;
}