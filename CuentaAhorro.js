export class CuentaAhorro{
    //definicion de atributos privados
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo){
        this.#cliente=cliente;
        this.numero=numero;
        this.agencia=agencia;
        this.#saldo=saldo;
    }
     depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor; 
            return this.#saldo;
        }
    }
    retiroEnCuenta(valor){
        if(valor<=this.#saldo){
            this.#saldo -= valor;
            return this.#saldo;
        }
    }
    verSaldo(){
        return this.#saldo;
    }
    tranferirParaCuenta(valor, cuentaDestino){
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}