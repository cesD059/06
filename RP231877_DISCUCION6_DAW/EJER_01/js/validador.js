function validateInput() {
    const inputType = document.getElementById('inputType').value;
    const inputField = document.getElementById('inputField').value;
    let isValid = false;
    let message = '';

    switch (inputType) {
        case 'ipv4':
            isValid = validateIPv4(inputField);
            message = isValid ? 'Dirección IPv4 válida' : 'Dirección IPv4 no válida';
            break;
        case 'url':
            isValid = validateURL(inputField);
            message = isValid ? 'URL válida' : 'URL no válida';
            break;
        case 'email':
            isValid = validateEmail(inputField);
            message = isValid ? 'Dirección de correo electrónico válida' : 'Dirección de correo electrónico no válida';
            break;
        default:
            message = 'Selecciona un tipo de validación';
    }

    document.getElementById('resultMessage').textContent = message;
}

function validateIPv4(ip) {
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Pattern.test(ip);
}

function validateURL(url) {
    const urlPattern = /^(https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    return urlPattern.test(url);
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}