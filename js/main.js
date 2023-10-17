const PI = 3.1416;
const areaCuadrado = (lado) => {
  return lado * lado;
};
const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
};
const areaCirculo = (radio) => {
  return PI * radio * radio;
};
const areaRectangulo = (baseR, alturaR) => {
  return baseR * alturaR;
};

let repetir = true;
while (repetir) {
  let figura = prompt(
    "Elige una de las siguientes figuras para calcular su area: Para cuadrado ingresa C, para triangulo ingresa T, para circulo ingresa CI, para rectangulo ingresa R "
  );
  let noEsValido = true;
  let resultado = 0;
  switch (figura) {
    case "C":
      while (noEsValido) {
        let lado = parseInt(
          prompt("Escribe la medida de uno de sus lados"),
          10
        );
        if (lado > 0) {
          resultado = areaCuadrado(lado);
          noEsValido = false;
        } else {
          alert("Debe ingresar un valor mayor que cero");
        }
      }
      break;

    case "T":
      while (noEsValido) {
        let base = parseInt(prompt("Escribe la medida de su base"), 10);
        let altura = parseInt(prompt("Escribe la medida de su altura"), 10);
        if (base && altura > 0) {
          resultado = areaTriangulo(base, altura);
          noEsValido = false;
        } else {
          alert("Debe ingresar un valor mayor que cero");
        }
      }
      break;

    case "CI":
      while (noEsValido) {
        let radio = parseInt(prompt("Escribe su radio"), 10);
        if (radio > 0) {
          resultado = areaCirculo(radio);
          noEsValido = false;
        } else {
          alert("Debe ingresar un valor mayor que cero");
        }
      }

      break;

    case "R":
      while (noEsValido) {
        let baseR = parseInt(prompt("Escribe la medida de su base"), 10);
        let alturaR = parseInt(prompt("Escribe la medida de su altura"), 10);
        if (baseR && alturaR > 0) {
          resultado = areaRectangulo(baseR, alturaR);
          noEsValido = false;
        } else {
          alert("Debe ingresar un valor mayor que cero");
        }
      }

      break;
  }

  alert("El area resultante es: " + resultado);

  let continua = prompt("Si quiere calcular otra area ingrese S");

  if (continua != "S" && continua != "s") repetir = false;
  else {
    alert("Adios :)");
  }
}
