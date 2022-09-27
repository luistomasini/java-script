// let agora = new Date();

// console.log(agora.toLocaleDateString('pt-BR'));


//-------------------------------------------------

// let carros = ["palio 98", "Toro", "Uno", 10, true, new Date(), function(){}];

// carros.forEach(function(value, index){

//     console.log(index, value)

// });

// ------------------------------------------------

let celular = function() {

    this.cor = 'prata';

    this.ligar = function(){

        console.log('uma ligação');
        return "ligando";

    }

}

let objeto = new celular();

console.log(objeto.ligar());