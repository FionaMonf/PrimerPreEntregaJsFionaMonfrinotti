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
const areaRectangulo = (base, altura) => {
  return base * altura;
};

let repetir = true;
while (repetir) {
  let figura = prompt(
    "Elige una de las siguientes figuras: Para cuadrado ingresa C, para triangulo ingresa T, para circulo ingresa CI, para rectangulo ingresa R "
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
      prompt("Escribe su radio");
      break;

    case "R":
      prompt("Escribe la medida de su base");
      prompt("Escribe la medida de su altura");
      break;
  }

  alert("El area resultante es: " + resultado);

  let continua = prompt("Si quiere calcular otra area ingrese S");

  if (continua != "S" && continua != "s") repetir = false;
}
