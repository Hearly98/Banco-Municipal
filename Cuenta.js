export class Cuenta{
    #cliente;
    #saldo;

    constructor(tipo, cliente, numero, agencia, saldo){
        this.tipo=tipo;
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
        if(this.tipo== 'Corriente'){
            valor = valor * 1.05;
        }else if(this.tipo=='Ahorro'){
            valor = valor * 1.02;
        }
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