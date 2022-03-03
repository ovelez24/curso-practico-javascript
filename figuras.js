//codigo del cuadrado
console.group("cuadrados");
const ladocuadrado = 5;
console.log("los lados del cuadrado miden :" + ladocuadrado);

const perimetrocuadrado = ladocuadrado * 4;
console.log("El perimetro cuadrado mide :" + perimetrocuadrado);

const areacuadrado = ladocuadrado * ladocuadrado;
console.log("El area cuadrado mide :" + areacuadrado);
console.groupEnd();
//codigo del triangulo
console.group("triangulos");
const ladotriangulo = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
const alturatriangulo = 5.5;

console.log("La altura del triangulo mide :" + alturatriangulo);

console.log(
    "los lados del triangulo miedn:" 
    + ladotriangulo + " cm, " 
    + ladotriangulo2 + " cm, " 
    + basetriangulo 
    + " cm2");

const perimetroTriangulo = ladocuadrado + ladotriangulo2 + basetriangulo;

console.log("El perimetro del triangulo mide :" + perimetroTriangulo);

const areaTriangulo = (basetriangulo * alturatriangulo) / 2;

console.log("El area del triangulo mide :" + areaTriangulo);


    console.groupEnd();

console.group("circulos");


console.groupEnd();
