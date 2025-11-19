// -------------------------
// Validation Formulaire Inscription
// -------------------------

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Champs
        let nom = document.getElementById("nom");
        let prenom = document.getElementById("prenom");
        let email = document.getElementById("email");
        let pass = document.getElementById("password");
        let langues = document.querySelectorAll("input[name='langues']:checked");

        // Regex
        const alphabetRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        let ok = true;

        // Nom
        if (!nom.value.trim()) {
            document.getElementById("errNom").textContent = "⚠ Le nom est obligatoire";
            document.getElementById("errNom").classList.remove("d-none");
            ok = false;
        } else if (!alphabetRegex.test(nom.value.trim())) {
            document.getElementById("errNom").textContent = "⚠ Le nom doit contenir uniquement des lettres";
            document.getElementById("errNom").classList.remove("d-none");
            ok = false;
        } else {
            document.getElementById("errNom").classList.add("d-none");
        }

        // Prénom
        if (!prenom.value.trim()) {
            document.getElementById("errPrenom").textContent = "⚠ Le prénom est obligatoire";
            document.getElementById("errPrenom").classList.remove("d-none");
            ok = false;
        } else if (!alphabetRegex.test(prenom.value.trim())) {
            document.getElementById("errPrenom").textContent = "⚠ Le prénom doit contenir uniquement des lettres";
            document.getElementById("errPrenom").classList.remove("d-none");
            ok = false;
        } else {
            document.getElementById("errPrenom").classList.add("d-none");
        }

        // Email
        if (!email.value.trim() || !mailRegex.test(email.value.trim())) {
            document.getElementById("errEmail").classList.remove("d-none");
            ok = false;
        } else {
            document.getElementById("errEmail").classList.add("d-none");
        }

        // Mot de passe
        if (!pass.value.trim() || !passRegex.test(pass.value.trim())) {
            document.getElementById("errPass").textContent = "⚠ Le mot de passe doit avoir 8 caractères, 1 majuscule, 1 chiffre et 1 symbole";
            document.getElementById("errPass").classList.remove("d-none");
            ok = false;
        } else {
            document.getElementById("errPass").classList.add("d-none");
        }

        // Langues
        if (langues.length === 0) {
            document.getElementById("errLangue").classList.remove("d-none");
            ok = false;
        } else {
            document.getElementById("errLangue").classList.add("d-none");
        }

        if (!ok) return;

        alert("🎉 Compte créé avec succès !");
        signupForm.reset();
    });
}
