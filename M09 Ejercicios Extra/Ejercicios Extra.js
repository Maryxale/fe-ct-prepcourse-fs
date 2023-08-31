/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.keys(objeto).map(function(clave) {
      return [clave,objeto[clave]];
   })

}
deObjetoAarray({A: 1, B: 2, C: 3});


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   string = string.toLowerCase();
   let resultado = {};
   for(let i = 0; i < string.length; i++){
      let letra = string[i];
      if(resultado[letra] === undefined){
         resultado[letra] = 1;
      }else{
         resultado[letra]++;
      }
   }
   return resultado;
}
let string = "acjfdehikk";
let resultado = numberOfCharacters(string);

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let touppercaseletras = '';
   let tolowercaseletras = '';
   
   for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         touppercaseletras += string[i];
      }else{
         tolowercaseletras += string[i];
      }

   }
   return touppercaseletras + tolowercaseletras;
}
capToFront("esMARIA");

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");
   var palabrasInvertidas = palabras.map((palabra) => palabra.split("").reverse().join(""));
  
   return palabrasInvertidas.join(" ");


}
asAmirror("Hola soy julia");


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();
   var numeroInvertido = numeroString.split("").reverse().join("");

   if(numeroString === numeroInvertido){
      return "Es capicua";
   }else{
      return "No es capicua";
   }
}
capicua(373);

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, '');
}
var strAntes = "abcdefg";
deleteAbc(strAntes);

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a,b){
      return a.length - b.length;
   });
   return arrayOfStrings;

}
var words = ["Hola","chao","Miranda", "tu"];
sortArray(words);

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter(el => array2.includes(el));
}
buscoInterseccion([1,2,3,4],[2,4,5,1]);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
