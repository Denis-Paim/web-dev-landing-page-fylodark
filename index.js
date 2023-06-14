function toggleEmailErrors(){
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById("email-required-error").style.display = "block";
    } else {
        document.getElementById("email-required-error").style.display = "none";
    }

    if (validateEmail(email)) {
        document.getElementById("email-required-error").style.display = "none";
    } else {
        document.getElementById("email-required-error").style.display = "block";
    }
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}