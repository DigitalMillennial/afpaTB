/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
*/
let noms = ""; // Переменная для хранения имен
let compteur = 0; // Переменная для подсчета имен
let nom; 

while (true) {
    nom = prompt("Entrez votre nom"); // Запрашиваем имя у пользователя
    if (nom === null || nom === "") { // Проверяем, не является ли введенное значение пустым или равным null
        break; // Прекращаем цикл, если пользователь оставил поле пустым или нажал "Отмена"
    }
    if (compteur > 0) {
        noms += ", "; // Добавляем запятую и пробел между именами
    }
    noms += nom; // Добавляем введенное имя к строке
    compteur++; // Увеличиваем счетчик
}

console.log("Vous avez entré " + compteur + " noms."); // Выводим количество введенных имен
console.log("Les noms entrés sont: " + noms); 

