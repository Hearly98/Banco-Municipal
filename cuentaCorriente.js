import { Cliente } from "./cliente.js";
//Creando una nueva clase para cuenta
export class CuentaCorriente
{
    #cliente;
    numero;
    #saldo; //primitivo
    agencia;

    //set o asignador

    set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente= valor;
    }

    //get u obtener

    get cliente(){
       return this.#cliente;
    }

    //creando un constructor
    constructor(cliente, numero,agencia){
        this.cliente=cliente;
        this.#saldo=0;
        this.numero=numero;
        this.agencia=agencia;

        //el constructor se ejecuta cada vez que se genera una instancia
        
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
    //metodo para transferir entre cuentas
    tranferirParaCuenta(valor, cuentaDestino){
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}
