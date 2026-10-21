let notas=[8,7,9,4,6,10];
let verificar=notas.some(nota=>nota < 5);
if(verificar===true){
    console.log("pelo menos um aluno possui nota abaixo de 5");
}
else{
    console.log("nenhum aluno possui a nota abaixo de 5")
}
