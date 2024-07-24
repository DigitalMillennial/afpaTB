let jeunes = 0;
let moyens = 0;
let vieux = 0;

function hagi(event) {
    event.preventDefault(); // Prevent the default form submission

    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value, 10);

    if (isNaN(age)) {
        alert("Veuillez entrer un âge valide.");
        return;
    }

    if (age < 20) {
        jeunes++;
    } else if (age <= 40) {
        moyens++;
    } else {
        vieux++;
    }

    document.getElementById('a20').innerText = jeunes;
    document.getElementById('20_40').innerText = moyens;
    document.getElementById('40plus').innerText = vieux;

    if (age === 100) {
        document.querySelector('form').removeEventListener('submit', hagi);
        alert("Le comptage est terminé.");
    }

    ageInput.value = '';
    ageInput.focus();
}

// Attach the event listener to the form
document.getElementById('ageForm').addEventListener('submit', hagi);
