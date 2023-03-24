
//Creando una nueva clase para cuenta

import { Cuenta } from "./Cuenta.js";


export class CuentaCorriente extends Cuenta{

    static cantidadCuentas=0;
    //creando un constructor
    constructor(cliente, numero,agencia){
        //para acceder cosas del padre
        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
        //el constructor se ejecuta cada vez que se genera una instancia   
    }
    retiroEnCuenta(valor){
             //llamando al padre para que se ejecute la operacion
        super._retiroEnCuenta(valor, 5);
}
}
