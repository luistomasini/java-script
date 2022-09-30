/* 1 - class e construtor */

class CalcController {

    constructor() {

        this._operation = [];
        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }
/* 4 - Data e Hora com Interval */

    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);
    }

 /* 6 - Vários eventos */

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }

 /* 7.1 - Método do botão AC */

    clearAll(){

        this._operation = [];

    }

 /* 7.2 - Método do botão CE */

    clearEntry(){

        this._operation.pop();

    }

 /* 8 -  Verificação de Number ou NaN*/

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }
    

 /* 7.4 - Método dos operadores */

    setLastOperation(value){

        this._operation[this._operation.length - 1] = value

    }

    isOperator(value){

        return (['=', '-', '*', '%', '/'].indexOf(value) > -1);
    
    }

    addOperation(value){

        console.log('A', isNaN(this.getLastOperation()));

        if (isNaN(this.getLastOperation())) {
            //String

            if(this.isOperator(value)) {
                //Trocar o operador

                this._setLastOperation(value);

            } else if (isNaN(value)) {

                //Outra coisa
                console.log(value);

            } else {   

                this._operation.push(value);

            }


        } else {
            //Number
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));        
        }

        console.log(this._operation);

    }

/* 7.3 - Método referente ao defaul do swicth */

    setError(){

        this.displayCalc = "Error";

    }

 /* 7 - Switch botõs operacionais */

    execBtn(value){
        console.log(value)

        switch (value) {

            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+')
                break;

            case 'subtracao':
                this.addOperation('-')
                break;

            case 'divisao':
                this.addOperation('/')
                break;

            case 'multiplicacao':
                this.addOperation('*')
                break;

            case 'porcento':
                this.addOperation('%')
                break;

            case 'igual':

                break;

            case 'ponto':
                this.addOperation('.')
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }

    }

/* 5 - Eventos botões */

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            } )

        })

    }

/* 3 - Data e Hora */

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

/* 2 - Data e Hora */

    get displayTime(){
        return this._timeEl.innerHTML
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value
    }

    get displayDate(){
        return this._dateEl.innerHTML
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

}