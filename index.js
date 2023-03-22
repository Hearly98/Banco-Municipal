//importando una clase
import {Cliente} from './cliente.js';
import {CuentaCorriente}from './cuentaCorriente.js';


const cliente =new Cliente();
cliente.nombreCliente='Leonardo';
cliente.dniCliente='1242412';
cliente.rucCliente='123445';
//Nueva Instancia
const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero='1';
cuentaDeLeonardo.agencia='001';
cuentaDeLeonardo.cliente= cliente;

console.log(cuentaDeLeonardo);
console.log(CuentaCorriente);
let saldo = cuentaDeLeonardo.verSaldo();
console.log('el saldo actual es ' + saldo)
saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('el saldo actual es ' + saldo)
 saldo =cuentaDeLeonardo.retiroEnCuenta(50);
console.log('el saldo actual es ' + saldo)

