//var y = 0; // é comentario de uma linha
/*comentario de mais de uma linha*/
// const PRECO -> sempre colocar uma const em maisculo

/*function soma(a,b){
    console.log(a+b); // apenas mostra na tela o valor;
    return a+b; // retorna o valor ainda deixa na memoria para ser manipulado depois
}*/
//console.log("hello world");
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}


