let tarefas =[
    "varrer a casa",
    "estudar",
    "ir para a escola",
    "ir para a casa",
    "ir no mercado",
]

alert("=== LISTA ANTES ===\nvarrer a casa\n estudar\nir para a escola\n ir para a casa\n ir no mercado")

console.log(tarefas);
tarefas.splice(1, 1);
tarefas.splice(2, 1, "dormir");
alert("=== LISTA DEPOIS ===\nvarrer a casa\nir para a escola\n dormir\n ir no mercado")
console.log(tarefas);
