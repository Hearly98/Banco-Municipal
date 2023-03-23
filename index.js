//importando una clase
import {Cliente} from './cliente.js';
//import {CuentaCorriente}from './cuentaCorriente.js';
//import { CuentaAhorro } from './CuentaAhorro.js';
import { Cuenta } from './Cuenta.js';

const cliente =new Cliente('Leonardo','1242412','123445');
const cliente2 =new Cliente('Maria', '1242512', '321414');

const cuentaDeLeonardo = new Cuenta('Corriente',cliente,'1', '001', 0);
const cuentaDeMaria = new Cuenta('Corriente', cliente2, '2', '002', 0);

const cuentaAhorroLeonardo= new Cuenta('Ahorro', cliente, '9985', '001', 0);
console.log(cuentaDeLeonardo);

//operaciones sobre las cuentas
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retiroEnCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retiroEnCuenta(70);
console.log(cuentaAhorroLeonardo.verSaldo());