// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    // propriedade: valor
    nome: "Chaves",
    idade: 10, 
    cidade: "São Paulo",
    estado: "SP"
};

// Exibindo a estrutura do objeto
console.log(pessoa);

// Acessando determinadas propriedades
console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}.`
);

// Exemplo 2: objeto com array
const livro = {
    título: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [ // Array indexado 
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

// Exibindo a estrutura
console.log(livro);

// Acesso usando o nome da prop. e índice do array desta prop.
console.log(livro.volumes[1]);

// Exemplo 3: array de objetos
const livros = [
    {
        titulo:"Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    }
];

// Acessando através do índice a prop.
console.log(livros[1].autor);

const aluno = {
    nome: "Paulo",
    data: "09/09/1999",
    telefones: [
        "11-26843280",
        "11-987642580"
    ],
    endereco: {
        rua: "Franciso Coimbra",
        numero: "483",
        bairro: "Penha"
    }
};

console.log(aluno.nome);
console.log(aluno.telefones[1]);
console.log(aluno.endereco.bairro);

console.log(`O aluno ${aluno.nome}, cujo telefone celular é ${aluno.telefones[1]}, mora na ${aluno.endereco.bairro}.`);




// console.log(aluno.telefones);

// const endereço =  [
//     {
//         rua: "Francisco Coimbra",
//         número: "177",
//         bairro: "Penha"
//     }
// ];

// console.log(endereço[0]);





/* Crie um objeto chamado "aluno" contendo os seguintes dados:
Nome Completo
Data de Nascimento
(Use ARRAY) Lista de telefones (fixo e celular)
(DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 
rua
número
bairro
Mostre no console o nome do aluno, o telefone celular e o bairro em que mora.*/