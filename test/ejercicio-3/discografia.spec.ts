import "mocha";
import { expect } from "chai";
import { Biblioteca } from "../../src/ejercicio-3/biblioteca";
import { Artista } from "../../src/ejercicio-3/artista";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { Discografia } from "../../src/ejercicio-3/discografia";
import { Disco } from "../../src/ejercicio-3/disco";
import { Single } from "../../src/ejercicio-3/single";

describe("Test Clase Discografía", () => {


  let cancion_prueba: Cancion = new Cancion("El gallo sube", 3, ["clasicas", "pop"], true, 120000);
  let conjunto_canciones_prueba : Cancion[] = [cancion_prueba];
  let disco_prueba : Disco = new Disco ("Disco de oro", 1999, [cancion_prueba]);
  let conjunto_discos : Disco[] = [disco_prueba];
  let discografia_prueba : Discografia<Disco> = new Discografia<Disco> (conjunto_discos);

  let single_prueba : Single = new Single ("Disco de oro", 1999, [cancion_prueba]);
  let conjunto_single : Single[] = [single_prueba];
  let discografia_prueba_2 : Discografia<Single> = new Discografia<Single> (conjunto_single);


  it("get recursos ()", () => {
    expect(discografia_prueba.recursos).to.be.eql(conjunto_discos);
  });

  it("get recursos ()", () => {
    expect(discografia_prueba_2.recursos).to.be.eql(conjunto_single);
  });

});