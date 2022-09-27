/*function somar(x1, x2) {

    return x1 + x2;

}

let resultado = somar(1, 2);

console.log(resultado);
*/

//---------------------------------------------

/*function calc(x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(1, 2, "+");

console.log(resultado);
*/

//---------------------------------------------

//Arrow Function
/*let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(1, 2, "*");

console.log(resultado);
*/

//---------------------------------------------

//Eventos
/*window.addEventListener('focus', event => {

    console.log("focus");

});

document.addEventListener('click', event => {

    console.log("click");

});
*/

//---------------------------------------------

//Datas
/*let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"));
*/

//---------------------------------------------

//Array
/*let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];

carros.forEach(function(value, index){

    console.log(index, value);

});
*/

//---------------------------------------------

//Objeto
/*let celular = function(){

    this.cor = "azul";

}

let objeto = new celular();

console.log(objeto.cor);
*/

/*let celular = function(){

    this.cor = "azul";

    this.ligar = function() {

        console.log("uma ligação");
        return "ligando";

    }

}

let objeto = new celular();

console.log(objeto.ligar());
*/