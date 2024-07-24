let a = "100";  
let b = 100;    
let c = 1.00;   
let d = true;

// 1. Affichez "Ceci est une chaîne de caractères :" et concaténez cette chaîne avec la variable a pour afficher "Ceci est une chaîne de caractères : 100".
console.log("Ceci est une chaîne de caractères : " + a);
// 2.  Appliquez à b l'opérateur de décrémentation
b--; 
console.log(b)
// 3.  Ajoutez à c la valeur de a
c += parseFloat(a);
console.log(c)
// 4.  Inversez la valeur de d
d =!d;
console.log(d)