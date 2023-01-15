var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

var fondo = {
  url: "tile.png",
  cargaOK: false,
};
var vaca = {
  url: "vaca.png",
  cargaOK: false,
};
var pollo = {
  url: "pollo.png",
  cargaOK: false,
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
};

var cantidad = aleatorio(1, 7);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOK) {
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOK) {
    for (var p = 0; p < cantidad; p++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 9);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
