function colorch(button) {
    // Получаем элемент с id "squere"
    let square = document.getElementById("squere");    
    // Сначала убираем все классы кнопок, чтобы не было конфликтов
    square.className = '';    
    // Добавляем класс кнопки на квадрат
    square.classList.add(button.classList[1]); // button.classList[1] содержит класс цвета кнопки
}

function updateColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let square = document.getElementById("squere");
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Обработчики событий для ползунков
document.getElementById("red").addEventListener("input", updateColor);
document.getElementById("green").addEventListener("input", updateColor);
document.getElementById("blue").addEventListener("input", updateColor);0.2 * 0.2

