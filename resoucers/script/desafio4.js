let livros = ["pequeno p.","Alice no pais das maravilhas","crepusculo","mil e uma noites","into the pit"]
let Livrobuscado=prompt("digite o nome do livro:").toLowerCase();
let posicao =livros.findIndex(livros=> livros.toLowerCase()===Livrobuscado);

if (posicao === -1) {
    alert("Livro não encontrado.");
} else {
    alert("Livro encontrado na posição " + posicao + ".");
}
