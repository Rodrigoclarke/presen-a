document.getElementById('lista-presenca').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    var nome = document.getElementById('nome').value;

    // Verifica se o campo nome está preenchido
    if (nome.trim() !== '') {
        exibirMensagem('Obrigado por confirmar presença, ' + nome + '!');
    } else {
        exibirMensagem('Por favor, insira seu nome para confirmar presença.');
    }
});

function exibirMensagem(mensagem) {
    document.getElementById('mensagem').innerText = mensagem;
}
