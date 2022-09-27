class celular {

    constructor(){

        this.cor = "azul";

    }

    ligar(){

        console.log("uma ligação");
        return "ligando";

    }

}

let objeto = new celular();

console.log(objeto.ligar());