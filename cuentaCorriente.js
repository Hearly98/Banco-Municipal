import { Cliente } from "./cliente.js";
import {Cuenta} from "./Cuenta.js";
//Creando una nueva clase para cuenta


export class CuentaCorriente extends Cuenta
{

    static cantidadCuentas=0;
    //creando un constructor
    constructor(cliente, numero,agencia){
        //para acceder cosas del padre
        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
        //el constructor se ejecuta cada vez que se genera una instancia   
    }
}
