window.onload = function() {
  let sujeto = [
    "Pablo motos ",
    "Mi madre ",
    "Mi primo chico ",
    "Carmen Machi "
  ];
  let accion = [
    "se comió ",
    "me ha roto ",
    "ha hecho desaparecer ",
    "se ha encargado de ",
    "ha encogido a "
  ];
  let objeto = ["mi movil ", "mi tio ", "el coche ", "los niños "];
  let tiempo = [
    "anoche",
    "el enero del año pasado",
    "esta mañana",
    "cuando yo estaba en el baño",
    "entre las 7 y las 8 del mediodia"
  ];

  let rdm1 = Math.floor(Math.random() * sujeto.length);
  let rdm2 = Math.floor(Math.random() * accion.length);
  let rdm3 = Math.floor(Math.random() * objeto.length);
  let rdm4 = Math.floor(Math.random() * tiempo.length);

  document.querySelector("#excusa").innerHTML =
    sujeto[rdm1] + accion[rdm2] + objeto[rdm3] + tiempo[rdm4];
};
