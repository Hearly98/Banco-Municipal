//importando una clase
import {Cliente} from './cliente.js';
import {CuentaCorriente}from './cuentaCorriente.js';


const cliente =new Cliente('Leonardo','1242412','123445');
const cliente2 =new Cliente('Maria', '1242512', '321414');

const cuentaDeLeonardo = new CuentaCorriente(cliente,'1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');
//Nueva Instancia

let saldo = cuentaDeLeonardo.verSaldo();
saldo=cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El saldo actual(cuentaLeonardo) '+saldo);   

    console.log(cuentaDeLeonardo.cliente);
    console.log(cuentaDeMaria.cliente);

