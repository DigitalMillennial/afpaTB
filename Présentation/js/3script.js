let nameToFind = prompt("Entrez un nom à rechercher :");
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let i = tab.indexOf(nameToFind);
if(i !==-1){
    for(let n = i;n < tab.length -1;n++){
    tab[n] =tab[n+1];    
    }
    tab[tab.length-1] = ""; 
}
else{
    alert("nom introuvable");
}
alert(tab);