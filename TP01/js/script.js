function controlForm() {
    verifyPassword();
}
function verifyPassword() {
    var pw = document.getElementById("password").value;
    var confirmPw = document.getElementById("confirmPassword").value;

    if (pw == "") {
        alert("**Entrez un mot de passe!");
        return false;
    }

    if (pw.length < 8) {
        alert("**Le mot de passse doit contenir au moins 8 caractères");
        return false;
    }

    if (pw.length > 15) {
        alert("**Le mot de passe ne doit pas dépasser 15 caractères");
        return false;
    }
    if (pw != confirmPw) {
        alert("Les deux mots de passe doivent être identique");
    }
}


