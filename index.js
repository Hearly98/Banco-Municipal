//importando una clase
import {Cliente} from './cliente.js';
import {CuentaCorriente}from './cuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';

const cliente =new Cliente('Leonardo','1242412','123445');
const cliente2 =new Cliente('Maria', '1242512', '321414');

const cuentaDeLeonardo = new CuentaCorriente(cliente,'1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const CuentaAhorroLeonardo= new CuentaAhorro(cliente, '9985', '001', 0);
console.log(cuentaDeLeonardo);
console.log(CuentaAhorroLeonardo);