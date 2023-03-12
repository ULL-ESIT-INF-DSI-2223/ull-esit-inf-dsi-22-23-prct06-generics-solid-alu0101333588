/**
 * Interfaz 'Streamable' de tipo genérico T
 * @param busquedaporAno para buscar por año
 * @param busquedaporNombre para realizar busquedas por títulos
 * @param busquedaporGenero para buscar contenido por géneros
 * @param busquedaporPlataforma para buscar contenido por plataforma de contenidos
 */

export interface Streamable<T> {
  /**
   * Función para realizar busquedas por año
   * @param ano el año del contenido a buscar
   * @returns array de tipo genérico T
   */
  busquedaporAno(ano: number): T[];

  /**
   * Función para realizar busquedas por nombre
   * @param nombre el nombre del contenido a buscar
   * @returns T : tipo genérico
   */
  busquedaporNombre(nombre: string): T | boolean;

  /**
   * Función para realizar busquedas por plataforma de contenidos
   * @param plataforma plataforma del contenido a buscar
   * @returns array de tipo genérico T
   */
  busquedaporPlataforma(plataforma: string): T[];

  /**
   * Función para realizar busquedas por temática-género
   * @param tema el tema del contenido a buscar
   * @returns array de tipo genérico T
   */
  busquedaporTematica(tema: string): T[];
}
