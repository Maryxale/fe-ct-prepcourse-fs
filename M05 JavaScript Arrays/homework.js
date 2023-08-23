/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];

}
let miArray = [1, 2, 3];
let elementoDelArray = devolverPrimerElemento(miArray);


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}
devolverUltimoElemento([11, 2, 3, 5, 12, 9]);


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
obtenerLargoDelArray([1, 8]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUnoo = array.map((numero) => {
      return numero + 1;
  })
  return masUnoo;
}
incrementarPorUno([2, 4, 6, 8, 10]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var elemento = array.push(elemento);
   return array;
}
agregarItemAlFinalDelArray(['A', 'E', 'I', 'O'],'U');

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var elemento = array.unshift(elemento);
   return array;
}
agregarItemAlComienzoDelArray([1, 2, 3, 4], 5);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var fraseArreglada = palabras.join(" ");
   return fraseArreglada;
}
dePalabrasAFrase(["Hola", "Miranda"]);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
arrayContiene([3, 6, 9, 12],6)

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;

   for (let i = 0; i < arrayOfNums.length; i++){
      suma += arrayOfNums[i];
   }
   return suma;
}
agregarNumeros([2, 4, 6, 8]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   for(var i = 0; i < resultadosTest.length; i++){
      suma += resultadosTest[i];
   }
   var promedio = suma / resultadosTest.length;
   return promedio;
}
promedioResultadosTest([10, 15, 11, 16, 12]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMayor = arrayOfNums[0];

    for(var i = 1; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] > numeroMayor){
            numeroMayor = arrayOfNums[i];
        }
    }
    return numeroMayor;
}
numeroMasGrande([5, 3, 7, 10]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0){
      return 0;
   }else if(arguments.length === 1){
      return arguments[0];
   }else{
      var producto = 1;
   }
   for(var i = 0; i < arguments.length; i++){
      producto *= arguments[i];
   }
   return producto;
}
multiplicarArgumentos();


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   for(let i = 0; i < array.length; i++){
      if(array[i] > 18){
         contador++;
      }
   }
   return contador;

}
cuentoElementos([20, 30, 10, 11]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana";
   }else{
      return "Es dia laboral";
   }

}
diaDeLaSemana(7);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return num.toString().startsWith('9');
}

empiezaConNueve(91);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   const elementoReferencia = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== elementoReferencia) {
        return false; 
      }
    }
  
    return true; 
}    
todosIguales([1, 1, 1, 1, 1]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   nuevosMeses = [];

   for(var i = 0; i < array.length; i++){
      var mes = array[i];
      if(mes === "Enero" || mes === "Marzo" || mes === "Noviembre"){
         nuevosMeses.push(mes);
      }
   }
   
      if (nuevosMeses.length === 3) {
         return nuevosMeses;
    } else {
      return "No se encontraron los meses pedidos";
    }
}
mesesDelAño(["Enero", "Marzo", "Noviembre","Julio"]);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
      for (var i = 0; i <= 10; i++) {
        tabla.push(6 * i);
      }
      return tabla;
    
}
tablaDelSeis();


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArreglo = [];
   for(var i = 0; i < array.length; i++){
      if(array[i] > 100){
         nuevoArreglo.push(array[i]);
      }
   }
   return nuevoArreglo;
}
mayorACien([20, 90, 120, 190]);


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arreglo = [];
  var suma = num;
  for (var i = 0; i < 10; i++) {
    suma = suma + 2;
    if (suma === i) break;
    else {
      arreglo.push(suma);
    }
  }
  if (i < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return arreglo;
  }
}
breakStatement(0);


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo = [];
   var suma = num;
   
   for (var i = 0; i < 10; i++) {
     if (i === 5) {
       continue;
     }
     suma = suma + 2;
     arreglo.push(suma);
   }
   
   return arreglo;
}
continueStatement(3);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
