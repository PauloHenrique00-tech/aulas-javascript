/* Principais comandos de repetição

- while -> ENQUANTO
- for -> PARA

São comandos de uso geral, existem em praticamente qualquer linguagem de programação. */ 

// Exemplo 1: while
let contador = 1;

while ( contador <=5 ) {
    console.log("Valor do contador é: "+contador);
    contador++;  // ++ Operador de incremento
}

console.log("---\n");

// Exemplo 2: for
for( let contador = 1; contador <= 10; contador++  ){
    // alert("Oieeee pela "+contador+"ª vez!)
  console.log("Oieeee pela "+contador+"ª vez!");  
}

console.log("Chega chato pra caramba!!!");

/* Nomenclatura para variáveis de controle
Embora possamos dar qualquer nome (como contador por exemplo). geralmente são usadas as letras i, j ou k (ou outras letras se necessário). */ 
for(let i = 1; i <= 3; i++){
    console.log("Valor de i é: "+i);
}

/* Loops exclusivos do JS para estruturas de dados */
// for/of -> loop para arrays
const mangas = ["One Piece", "Grand Blue", "Tower of God", "Tokyo Ghoul", "Chainsaw Man", "Mushoku Tensei", "Re:Zero"];

for(const manga of mangas) {
    console.log(manga);  
}

console.log("\n---");


// Usando o for tradicional

// Guardando o tamanho do array uma vez (fazendo cache do array)
/* let quantidade = mangas.length 
for( let i = 0; i < quantidade; i++ ){
    console.log(mangas[i])
 }*/ 


for( let i = 0; i < mangas.length; i++ ){

    /* Usamos i dentro dos colchetes como índice dinâmico do array */ 
    console.log(mangas[i]);
}

// for/in -> loop para objetos
const pessoa = {
    nome: "Isagi Yoichi",
    idade: 16,
    cidade: "Tóquio",
    estado: "SP",
    email: "fulano@provedor.com",
    time: "Z"
};

for(const prop in pessoa){
    // Mostra somente o nome da propriedade
    console.log(prop);

    // Mostra somente o valor da propriedade
    console.log(pessoa[prop]);
}

console.log("\n---");

/* Exercícios
1) Faça um array chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "nome" (com os nomes dos clientes:
"Cliente A", "Cliente B" e "Cliente C").

2) Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
- Cliente: Goku, id: 1
- Cliente: Naruto, id: 2
- Cliente: Shiryu, id: 3
*/

const clientes = [
    {
        clienteA:"Isagi Yoichi",
        id: 1
    },
    {
        clienteB: "Meguru Bachira",
        id: 2
    },
    {
        clienteC: "Chigiri",
        id: 3
    }
];

for(const prop in clientes){
    console.log(prop);

    console.log(clientes[prop]);
}


// alt gr + ª