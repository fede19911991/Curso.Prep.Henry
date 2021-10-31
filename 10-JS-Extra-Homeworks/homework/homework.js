// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
    i=0;
for(let clave in objeto){
  matriz[i] = [clave,objeto[clave]]
  i++;
}
return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj={};
  var letra = '';
  for (i=0;i<string.length;i++){
    letra = string.charAt(i);
      if(obj[letra]){
        obj[letra]=obj[letra]+1;
       }
      else{
        obj[letra]=1;
      }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var mayusculas = ''; minusculas= '';frase = ''; letra = '';
  for(i=0;i<s.length;i++){
    letra = s.charAt(i);
    if ((65<=letra.charCodeAt()) && (90>=letra.charCodeAt())){
        mayusculas = mayusculas + letra;
    }
    else {
        minusculas = minusculas + letra;
    }
}
frase = mayusculas + minusculas;
console.log(frase);
return frase;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var s=str;
  var a=[];
  var frase = ''; nuevo = '';
  a = str.split(' ');
  a.forEach(function (i,ind) {
      nuevo = ''; 
        for(j=i.length;j>=0;j--){
          nuevo = nuevo + i.charAt(j);
        }
      a[ind] = nuevo
    });
  frase = a.reduce(function(fra,el){
    return fra + ' ' + el;
  })
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var n = numero;
  var num = n.toString();
  for(i=0;i<num.length;i++){
    if (num.charAt(i) != num.charAt(num.length-1-i)){
      console.log('no');
      return 'No es capicua';
    }
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var str = cadena;
  var frase = '';
  for (i=0;i<str.length;i++){
    if ((str.charAt(i) == 'a') || (str.charAt(i) == 'b') || (str.charAt(i) == 'c')) {
      }
    else {
      frase = frase + str.charAt(i);
      }
  }
  return frase;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var ret = [];
  var n = 0;
  var total = arr.length;
  for (i=0;i<total;i++){
    var palabra = '';
    var max=0;
      arr.forEach(function(val,ind){
         if (max<=val.length){
           max = val.length;
           palabra = val;
           n = ind;
        }
      });
    arr.splice(n,1);
    ret.unshift(palabra);
  }
  return ret;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var contiene1=false,contiene2=false;
  var nuevo = [];
  for (j=0;j<100;j++){
   for (i=0;i<arreglo1.length;i++){
     if (arreglo1[i]==j){
      contiene1 = true;
     }
   }
   for (k=0;k<arreglo2.length;k++){
    if (arreglo2[k]==j){
     contiene2 = true;
    }
  }
   if (contiene1==true && contiene2==true){
     nuevo.push(j);
   }
   contiene1=false;
   contiene2=false;
  }
  return nuevo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
