//importando una clase
import {CuentaCorriente}from './cuentaCorriente.js';
//import {cliente} from './cliente.js';

//Nueva Instancia
const cuentaDeLeonardo = new CuentaCorriente();
let saldo = cuentaDeLeonardo.verSaldo();
console.log('el saldo actual es ' + saldo)
saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('el saldo actual es ' + saldo)
 saldo =cuentaDeLeonardo.retiroEnCuenta(50);
console.log('el saldo actual es ' + saldo)

