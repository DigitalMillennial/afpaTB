//...Exercice 1 - Parité
let num = prompt("Entrez votre numéro")
if(num%2 ==0)
{
    alert("Ton numéro est pair")
}
else {
    alert("Votre numéro est impair")
} 
//...Exercice 2 - Age
let age = prompt("indiquez votre âge")
if(age >= 18)
    {
     alert("tu es déjà un adulte")
    }
if(age <18&&age>0)
    {
     alert("tu es un bébé")
    }
else {
      alert("Veuillez saisir les informations correctes")
    }
// Exercice 3 - Calculette
let num1 = prompt("Entrez le premier numéro")
let num2 = prompt("Entrez le deuxième numéro")
let act = prompt("Sélectionnez une action pour les numéros saisis (+, -,*,/)")
num1 = Number(num1)
num2 = Number(num2)
switch (act)
{   
  case "+" :
    alert(num1 + num2);  
     break; 

  case "-"  :
    alert(num1 - num2);  
     break;

  case "*":
    alert(num1 * num2);
     break; 

  case "/":
    if (num2 == 0)
    {
        alert("ne divise pas par zéro")
    }
    else {
        alert(num1 / num2)
    }    
    break; 
} 
