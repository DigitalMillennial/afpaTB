let chiffre = prompt("Entrez le nombre à multiplier");
let number = Number(chiffre);
if (!isNaN(number) && number !== 0) {
    function TableMultiplication(number) {
        let result = ""; 
        for (let i = 1; i <= 10; i++) {    
            result += i + " x " + number + " = " + (i * number) + "\n";
        }
        alert(result);
    }
    TableMultiplication(number);
} else {
    alert("Veuillez entrer un nombre valide."); 
}
