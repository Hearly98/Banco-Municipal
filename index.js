//importando una clase
import {Cliente} from './cliente.js';
import {Cuenta} from './Cuentas/Cuenta.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import {CuentaNomina} from './Cuentas/CuentaNomina.js';
import {CuentaCorriente} from './Cuentas/cuentaCorriente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

//datos

//clientes

//Cuenta Leonardo
const cliente =new Cliente('Leonardo','1242412','123445');
const cuentaDeLeonardo = new CuentaAhorro(cliente, '1', '001', 0);
let saldo = cuentaDeLeonardo.verSaldo();
saldo=cuentaDeLeonardo.depositoEnCuenta(150); 
cliente.asignarClave('1111');


console.log(cuentaDeLeonardo);
console.log(cuentaDeLeonardo.cliente);
console.log('El saldo actual (cuentaLeonardo) ' + saldo);  
console.log('clave es: ' + SistemaAutenticacion.login(cliente,'1111'));

//Cuenta Maria
const cliente2 =new Cliente('Maria', '1242512', '321414');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

 saldo = cuentaDeMaria.verSaldo();
saldo=cuentaDeMaria.depositoEnCuenta(100);
 

console.log(cuentaDeMaria);
console.log(cuentaDeMaria.cliente);
console.log('El saldo actual(cuentaDeMaria) ' + saldo);  

//Cuenta Jose
const cliente3 =new Cliente('Jose', '623423', '31231');
const cuentaDeJose = new CuentaNomina(cliente3, '2', '002', 0);
 saldo = cuentaDeJose.verSaldo();
saldo=cuentaDeJose.depositoEnCuenta(200);

console.log(cuentaDeJose);
console.log(cuentaDeJose.cliente);
console.log('El saldo actual(cuentaDeJose) '+ saldo);   
//empleados

const empleado =new Empleado('Juan Perez', '831297213', 2000);
empleado.asignarClave('12345');
console.log('clave es: ' + SistemaAutenticacion.login(empleado,'12345'));
const gerente = new Gerente('Pedro Rivas', '2312323132',17000);

//gerente
gerente.asignarClave('53412');
console.log('clave es: '  + SistemaAutenticacion.login(gerente,'53412'));

//director
const director = new Director('Elena Moreno', '873218212', 150000);
director.asignarClave('214124');
console.log('clave es: ' + SistemaAutenticacion.login(director,'12345'));


