//cliente

/*forma tradicional
const nombreCliente='Leonardo';
const dniCliente='13804050';
const numeroCuenta='1234567890';
const saldoCuenta =1000; */



//creando clase cliente
export class Cliente
{
    nombreCliente;
    dniCliente;
    rucCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rucCliente){
        this.nombreCliente=nombreCliente;
        this.dniCliente=dniCliente;
        this.rucCliente=rucCliente;
        this.#clave='';

    }

    asignarClave(clave){
        this.#clave=clave;
     }
//encapsulando en un metodo para que sea mas seguro
   autenticable(clave){
        return clave ==this.#clave;
     }
}