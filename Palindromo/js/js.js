function EsPalindromo(frase){
    var re = /[^A-Za-z0-9]/g;
 frase = frase.toLowerCase().replace(re, '');
 var len = frase.length;
 for (var i = 0; i < len/2; i++) {
   if (frase[i] !== frase[len - 1 - i]) {
       return false;
   }
 }
 return true;
}