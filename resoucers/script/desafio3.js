let jogos =[
    "minecraft",
    "The sims",
    "roblox",
    "Terraria",
    "stardew valley"
];

let termine=prompt("digite um nome de um jogo , é direi se estar na lista:".toLowerCase());

if(jogos.includes (termine)){
    alert("jogo na lista")
}
else{
    alert("jogo fora da lista")
}