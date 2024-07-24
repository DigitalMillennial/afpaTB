function chek(form) {
    const mailRegex = /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const villeRegex = /^[A-Za-z\s-]+$/;
    const indexRegex = /^[0-9]{5}$/;

    let soc = form['nom'].value;
    let percont = form['prenom'].value;
    let adr = form['adresse'].value;
    let codpost = form['code_postal'].value;
    let mail = form['email'].value;

    if (!mailRegex.test(mail)) {
        alert("Adresse e-mail invalide");
        return false;
    }
    if (!indexRegex.test(codpost)) {
        alert("Vous avez entré moins de 5 caractères dans le code postal");
        return false;
    }
    if (!villeRegex.test(soc)) {
        alert("Nom de société invalide");
        return false;
    }
    if (!villeRegex.test(percont)) {
        alert("Nom de la personne à contacter invalide");
        return false;
    }
    if (adr.length < 5) {
        alert("L'adresse doit contenir au moins 5 caractères");
        return false;
    }
    return true;
}
