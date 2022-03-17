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

const perimetroTriangulo = ladotriangulo + ladotriangulo2 + basetriangulo;

console.log("El perimetro del triangulo mide :" + perimetroTriangulo);

const areaTriangulo = (basetriangulo * alturatriangulo) / 2;

console.log("El area del triangulo mide :" + areaTriangulo);


    console.groupEnd();

console.group("circulos");

    const radioCirculo = 4;
    console.log("El radio del circulo es:" + radioCirculo + "cm");

    //Diametro

    const diametroCirculo = radioCirculo * 2;
    console.log("El diametro del circulo es:" + diametroCirculo + "cm");

    const PI = Math.PI;
    console.log("PI es:" + PI +  "cm");

    //circunferencia
    const perimetroCirculo = diametroCirculo * PI;
    console.log("El perimetro del circulo es:" + perimetroCirculo + "cm");

    //area 

    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log("El area del circulo es:" + areaCirculo + "cm");


console.groupEnd();

function perimetroC(lado){
    return lado * 4;
}

function areac (lado){
    return lado * lado;
}

function perimetrot (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areat(base, altura) {
    return (base * altura) / 2;
}

function diametroCi(radio) {
    return radio * 2;
}

function perimetroCi(radio) {
    const diametro = diametroCi(radio);
    return diametro * PI;
}

function areaCi(radio) {
    return (radio * radio) * PI;
}

//funcion interactuando con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroC(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areac(value);
    alert(area);
}