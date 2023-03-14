
//Creando una nueva clase para cuenta
export class CuentaCorriente
{
    numero;
    #saldo;
    agencia;

    //creando un constructor
    constructor(){
        this.#saldo=0;
        this.numero='';
        this.agencia='';

    }

    
    //creando un metodo
    //deposito
    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor; //this te define la cuenta corriente actual, puede ser [1,2,3.....]
            return this.#saldo;
        }
    }
    retiroEnCuenta(valor){
        if(valor<=this.#saldo){
            this.#saldo -= valor;
            return this.#saldo;
        }
    }
    //creando un funcion para retornar el saldo
    verSaldo(){
        return this.#saldo;
    }
}
