import "mocha";
import { expect } from "chai";
import { ColeccionDocumentales } from "../../src/ejercicio-1/ColeccionDocumentales";

describe(" Tests de 'ColeccionDocumentales' ", () => {
  let documentalescoleccion: ColeccionDocumentales = new ColeccionDocumentales([
    {
      titulo_: "Los tiburones no matan (tanto)",
      fecha_: [23, "mayo", 2030],
      sinopsis_: "los tiburones tienen fama de asesinos",
      tematica_: "animales",
      plataforma_: "HBO MAX",
      duracion_: 50,
    },
    {
      titulo_: "El león come gambas (MasterChef)",
      fecha_: [26, "febrero", 2030],
      sinopsis_: "la historia detrás del famoso plato",
      tematica_: "animales",
      plataforma_: "Netflix",
      duracion_: 62,
    },
    {
      titulo_: "Las serpientes asesinas",
      fecha_: [12, "junio", 2050],
      sinopsis_: "el animal más mortifero de todos los tiempos",
      tematica_: "animales",
      plataforma_: "Netflix",
      duracion_: 50,
    },
  ]);
  it("busquedaporNombre()", () => {
    expect(
      documentalescoleccion.busquedaporNombre("Los tiburones no matan (tanto)")
    ).to.be.eql({
      titulo_: "Los tiburones no matan (tanto)",
      fecha_: [23, "mayo", 2030],
      sinopsis_: "los tiburones tienen fama de asesinos",
      tematica_: "animales",
      plataforma_: "HBO MAX",
      duracion_: 50,
    });
  });
  it("busquedaporAno()", () => {
    expect(documentalescoleccion.busquedaporAno(2030)).to.be.eql([
      {
        titulo_: "Los tiburones no matan (tanto)",
        fecha_: [23, "mayo", 2030],
        sinopsis_: "los tiburones tienen fama de asesinos",
        tematica_: "animales",
        plataforma_: "HBO MAX",
        duracion_: 50,
      },
      {
        titulo_: "El león come gambas (MasterChef)",
        fecha_: [26, "febrero", 2030],
        sinopsis_: "la historia detrás del famoso plato",
        tematica_: "animales",
        plataforma_: "Netflix",
        duracion_: 62,
      },
    ]);
  });

  it("busquedaporPlataforma()", () => {
    expect(documentalescoleccion.busquedaporPlataforma("Netflix")).to.be.eql([
      {
        titulo_: "El león come gambas (MasterChef)",
        fecha_: [26, "febrero", 2030],
        sinopsis_: "la historia detrás del famoso plato",
        tematica_: "animales",
        plataforma_: "Netflix",
        duracion_: 62,
      },
      {
        titulo_: "Las serpientes asesinas",
        fecha_: [12, "junio", 2050],
        sinopsis_: "el animal más mortifero de todos los tiempos",
        tematica_: "animales",
        plataforma_: "Netflix",
        duracion_: 50,
      },
    ]);
  });

  it("busquedaporTematica()", () => {
    expect(documentalescoleccion.busquedaporTematica("animales")).to.be.eql([
      {
        titulo_: "Los tiburones no matan (tanto)",
        fecha_: [23, "mayo", 2030],
        sinopsis_: "los tiburones tienen fama de asesinos",
        tematica_: "animales",
        plataforma_: "HBO MAX",
        duracion_: 50,
      },
      {
        titulo_: "El león come gambas (MasterChef)",
        fecha_: [26, "febrero", 2030],
        sinopsis_: "la historia detrás del famoso plato",
        tematica_: "animales",
        plataforma_: "Netflix",
        duracion_: 62,
      },
      {
        titulo_: "Las serpientes asesinas",
        fecha_: [12, "junio", 2050],
        sinopsis_: "el animal más mortifero de todos los tiempos",
        tematica_: "animales",
        plataforma_: "Netflix",
        duracion_: 50,
      },
    ]);
  });
});
