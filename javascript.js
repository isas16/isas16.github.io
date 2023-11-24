// Preencher select de estados usando a API do IBGE
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then(response => response.json())
.then(data => {
    const ufSelect = document.getElementById('uf');
    data.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.textContent = estado.sigla;
        ufSelect.appendChild(option);
    });
});

// Atualizar região e preencher select de cidades ao selecionar um estado
document.getElementById('uf').addEventListener('change', function () {
const uf = this.value;
document.getElementById('regiao').value = '';
document.getElementById('cidade').innerHTML = '';

fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('regiao').value = data.regiao.nome;
    });

fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    .then(response => response.json())
    .then(data => {
        const cidadeSelect = document.getElementById('cidade');
        data.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade.nome;
            option.textContent = cidade.nome;
            cidadeSelect.appendChild(option);
        });
    });
});

function salvarCadastro() {
const cadastro = {
    nome: document.getElementById('nome').value,
    genero: document.getElementById('genero').value,
    idade: document.getElementById('idade').value,
    uf: document.getElementById('uf').value,
    regiao: document.getElementById('regiao').value,
    cidade: document.getElementById('cidade').value,
    telefone: document.getElementById('telefone').value,
    email: document.getElementById('email').value
};

// Implemente a lógica para salvar o cadastro em uma tabela temporária na RAM
// Pode ser um array em JavaScript, por exemplo
const cadastros = [];
cadastros.push(cadastro);

// Limpar os campos após salvar
document.getElementById('cadastroForm').reset();

console.log('Cadastro salvo:', cadastro);
}

function excluirCadastros() {
// Implemente a lógica para excluir os cadastros
// Pode ser um simples reset do array de cadastros
const cadastros = [];

console.log('Cadastros excluídos');
}
