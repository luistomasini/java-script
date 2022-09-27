console.log("Olá Mundo!");
//---------------------------------------------------------------------
//Retire o /* e */ e o código irá funcionar

//Usando console.log com var
/*
var olaMundo = "Olá mundo!";

console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);
*/
//---------------------------------------------------------------------

//Usando == irá comparar o valor de duas expressões
/*
let a = 10;
const b = "10";

console.log(a == b);
*/
//---------------------------------------------------------------------

//Usando === irá comparar o valor e o tipo de dados
/*
let a = 10;
const b = "10";

console.log(a === b);
*/
//---------------------------------------------------------------------

//Usando !== irá comparar se os valores e tipos são diferentes
/*
let a = 10;
const b = "10";

console.log(a !== b);
*/
//---------------------------------------------------------------------

//Usando != irá comparar se os valores são diferentes
/*
let a = 10;
const b = "10";

console.log(a != b);
*/
//---------------------------------------------------------------------

//Usando && para analisar se duas condições são verdadeiras ao mesmo tempo
/*
let a = 10;
const b = "10";

console.log(a == b && typeof b == 'string');//irá dar true
console.log(a == b && typeof a == 'string');//irá dar false
*/
//---------------------------------------------------------------------

//Usando || mesmo se uma das condições estiver errada ele dará true, só dará false se as duas condições estiverem erradas
/*
let a = 10;
const b = "10";

console.log(a == b && typeof a == 'string');
*/
//---------------------------------------------------------------------

//if
/*
let cor = "verde";

if (cor === "verde") {

    console.log("siga");

} else if (cor === "amarelo") {

    console.log("atenção");

} else {

    console.log("pare");

}
*/
//---------------------------------------------------------------------

//for
/*
let n = 5;

for (let i = 0; i <= 10; i++) {

    console.log(`${i} X ${n} = ${i*n}`);
    //console.log(i + " X " + n + " = " + (i * n)); -> Jeito antigo

}
*/