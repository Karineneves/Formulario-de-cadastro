function adicionarLinha() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if(nome && telefone) {
        var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow();

        var celulaNome = novaLinha.insertCell(0);
        var celulaTelefone = novaLinha.insertCell(1);

        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha os dois campos.");
    }
}