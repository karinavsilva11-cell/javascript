let notas=[
    8,7,9,4,6,10,12
]
let verificar=notas.every(notas=>notas >0 &&notas<=10)
if(verificar){
    console.log("notas válidas");

}
else{
    console.log("notas inválidas")
}
