function calcularMediaAritmetica(lista){
    /*let sumaLista = 0;

    for (let i= 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
    };*/

    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
        );//este elemento va recibiendo una funcion y va sumando los elementos

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}