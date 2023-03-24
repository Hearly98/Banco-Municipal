import {Cuenta} from "./Cuenta.js";
export class CuentaNomina extends Cuenta{
    static cantidadCuentas=0;

    constructor(cliente, numero,agencia, saldo){
        super(cliente,numero,agencia,saldo);
    }
    retiroEnCuenta(valor){
        super._retiroEnCuenta(valor, 1);
}
}