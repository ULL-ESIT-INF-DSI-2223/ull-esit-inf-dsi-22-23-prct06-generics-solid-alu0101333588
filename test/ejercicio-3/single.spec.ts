import "mocha";
import { expect } from "chai";
import { Biblioteca } from "../../src/ejercicio-3/biblioteca";
import { Artista } from "../../src/ejercicio-3/artista";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { Discografia } from "../../src/ejercicio-3/discografia";
import { Disco } from "../../src/ejercicio-3/disco";
import { Single } from "../../src/ejercicio-3/single";

describe("Test Clase Single", () => {
  let cancion_prueba: Cancion = new Cancion(
    "El gallo sube",
    3,
    ["clasicas", "pop"],
    true,
    120000
  );
  let conjunto_canciones_prueba: Cancion[] = [cancion_prueba];
  let single_prueba: Single = new Single("El gallo sube", 1999, [
    cancion_prueba,
  ]);

  it("get nombre ()", () => {
    expect(single_prueba.nombre).to.be.eql("El gallo sube");
  });

  it("get ano ()", () => {
    expect(single_prueba.ano).to.be.eql(1999);
  });

  it("get canciones ()", () => {
    expect(single_prueba.versiones).to.be.eql(conjunto_canciones_prueba);
  });

  it("canciones_array ()", () => {
    expect(single_prueba.versiones_array()).to.be.eql(["El gallo sube"]);
  });

  it("numero_canciones ()", () => {
    expect(single_prueba.numero_versiones()).to.be.eql(1);
  });

  it("reproducciones_disco ()", () => {
    expect(single_prueba.reproducciones()).to.be.eql(120000);
  });
});
