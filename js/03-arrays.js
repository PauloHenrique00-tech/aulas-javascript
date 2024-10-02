// Declarando um array
let alunos = ["Jon Oliva", "Ozzy Osbourne", "Tom Araya"];

// Exibindo a estrutura do array
console.log(alunos);

// Acessando um elemento específico do array
console.log(`${alunos[2]} é o vocalista da banda Slayer! 🤘`);

/* Mini-exercícios

1) Crie um novo array contendo o nome de 7 coisas que você gosta (artista, música, livro, comida... sei la, inventa!)

2) Em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e do sétimo elemento do array. Use concatenação OU template string. */ 

let gostos = ["Grand Blue", "Tower of God", "Chainsaw Man", "Rick and Morty", "Entrelinhas Pontilhadas", "One Piece", "Demon Slayer"]

console.log(gostos);

console.log(`O futuro é pica! - ${gostos[2]}`);

/* Array como Matriz de 2 dimensões */
const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express", ["Apache", "IIS"] ]
];

// console.log(tecnologias);
console.log( tecnologias[2][4][0] ); // Apache
console.log( tecnologias[0][2] ); // JavaScript
console.log( tecnologias[1][0] ); // Figma
console.log( tecnologias[2][3] ); // Express
console.log( tecnologias[0][0] ); // HTML5





    
     