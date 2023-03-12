import "mocha";
import { expect } from "chai";
import { Biblioteca } from "../../src/ejercicio-3/biblioteca";
import { Artista } from "../../src/ejercicio-3/artista";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { Discografia } from "../../src/ejercicio-3/discografia";
import { Disco } from "../../src/ejercicio-3/disco";

describe("Test Clase Cancion", () => {
  let cancion_prueba: Cancion = new Cancion("El gallo sube", 3, ["clasicas", "pop"], true, 120000);
  it("get numero_reproducciones()", () => {
    expect(cancion_prueba.numero_reproducciones).to.be.eql(120000);
  });
  it("get single ()", () => {
    expect(cancion_prueba.single).to.be.eql(true);
  });

  it("get generos ()", () => {
    expect(cancion_prueba.generos).to.be.eql(["clasicas", "pop"]);
  });

  it("get duracion ()", () => {
    expect(cancion_prueba.duracion).to.be.eql(3);
  });

  it("get nombre ()", () => {
    expect(cancion_prueba.nombre).to.be.eql("El gallo sube");
  });
});