function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangeName() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function onChangeTelefone() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function onChangeCidade() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function onChangeEstado() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function onChangeIdade() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function onChangeSexo() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function onChangeMotivodecontato() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function onChangeAreadetexto() {
    toggleButtonsDisable();
    togglePasswordErrors();
}


function enviar() {
    window.location.href = "pages/contato/index.html";
}

function register() {
    window.location.href = "pages/contato/index.html";
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function toggleNameErrors() {
    const name = form.name().value;
    form.nameRequiredError().style.display = name ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverEmailButton().disabled = !emailValid;

    const nameValid = inameValid();
    form.enviarButton().disabled = !emailValid || !nameValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isNameValid() {
    return form.name().value ? true : false;
}

function toggleTelefoneErrors() {
    const telefone = form.telefone().value;
    form.telefoneRequiredError().style.display = telefone ? "none" : "block";
}

function toggleCidadeErrors() {
    const cidade = form.name().value;
    form.cidadeRequiredError().style.display = cidade ? "none" : "block";
}

function toggleEstadoErrors() {
    const estado = form.name().value;
    form.estadoRequiredError().style.display = estado ? "none" : "block";
}

function toggleIdadeErrors() {
    const idade = form.name().value;
    form.idadeRequiredError().style.display = idade ? "none" : "block";
}

function toggleSexoErrors() {
    const sexo = form.name().value;
    form.sexoRequiredError().style.display = sexo ? "none" : "block";
}

function toggleMotivodeContatoErrors() {
    const motivodecontato = form.name().value;
    form.motivodecontatoRequiredError().style.display = moticodecontato ? "none" : "block";
}

function toggleAredetextoErrors() {
    const areadetexto = form.name().value;
    form.areadetextoRequiredError().style.display = areadetexto ? "none" : "block";
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    EnviarButton: () => document.getElementById("enviar-button"),

    name: () => document.getElementById("name"),
    nameRequiredError: () => document.getElementById("name-required-error"),
    recoverNameButton: () => document.getElementById("recover-name-button"),

    telefone: () => document.getElementById("telefone"),
    telefoneRequiredError: () => document.getElementById("telefone-required-error"),
    recoverTelefoneButton: () => document.getElementById("recover-telefone-button"),

    cidade: () => document.getElementById("cidade"),
    cidadeRequiredError: () => document.getElementById("cidade-required-error"),
    recoverCidadeButton: () => document.getElementById("recover-cidade-button"),

    estado: () => document.getElementById("estado"),
    estadoRequiredError: () => document.getElementById("estado-required-error"),
    recoverEstadoButton: () => document.getElementById("recover-estado-button"),

    idade: () => document.getElementById("idade"),
    idadeRequiredError: () => document.getElementById("idade-required-error"),
    recoverIdadeButton: () => document.getElementById("recover-idade-button"),

    sexo: () => document.getElementById("sexo"),
    SexoRequiredError: () => document.getElementById("sexo-required-error"),
    recoverSexoButton: () => document.getElementById("recover-sexo-button"),

    motivodecontato: () => document.getElementById("motivodecontato"),
    motivodecontatoRequiredError: () => document.getElementById("motivo de contato-required-error"),
    recoverMotivodecontatoButton: () => document.getElementById("recover-motivo de contato-button"),

    areadetexto: () => document.getElementById("areadetexto"),
    areadetextoRequiredError: () => document.getElementById("area de texto-required-error"),
    recoverAreadetextoButton: () => document.getElementById("recover-area de texto-button"),
}