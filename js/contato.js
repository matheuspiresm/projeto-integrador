window.onload = function () {
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var nome = document.getElementById('nome');
    var mensagem = document.getElementById('mensagem');

    nome.addEventListener('input', function () {
        var pattern = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;
        if (!pattern.test(nome.value)) {
            nome.setCustomValidity("Por favor, insira pelo menos um nome e um sobrenome.");
            nome.classList.add('invalid', 'white-text');
        } else {
            nome.setCustomValidity("");
            nome.classList.remove('invalid', 'white-text');
        }
    });

    email.addEventListener('input', function () {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Por favor, insira um endereço de email válido.");
            email.classList.add('invalid', 'white-text');
        } else {
            email.setCustomValidity("");
            email.classList.remove('invalid', 'white-text');
        }
    });

    telefone.addEventListener('input', function () {
        var pattern = /^\d{2}\s\d{5}\d{4}$/;
        if (!pattern.test(telefone.value)) {
            telefone.setCustomValidity("Por favor, insira um número de telefone no formato 12 345678910.");
            telefone.classList.add('invalid', 'white-text');
        } else {
            telefone.setCustomValidity("");
            telefone.classList.remove('invalid', 'white-text');
        }
    });

    mensagem.addEventListener('input', function () {
        if (mensagem.value.length < 20) {
            mensagem.setCustomValidity("Por favor, insira pelo menos 20 caracteres.");
            mensagem.classList.add('invalid', 'white-text');
        } else {
            mensagem.setCustomValidity("");
            mensagem.classList.remove('invalid', 'white-text');
        }
    });
}
