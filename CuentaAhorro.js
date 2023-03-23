import {Cuenta} from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{
    constructor(cliente, numero,agencia,saldo){
        //en el caso de cuenta de ahorro si se puede definir el saldo inicial
        super(cliente,numero,agencia,saldo);
        }

        retiroEnCuenta(valor){
       super._retiroEnCuenta(valor, 2);
        }
}