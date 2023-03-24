//importando una clase
import {Cliente} from './cliente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';
const cliente =new Cliente('Leonardo','1242412','123445');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'1111'));
//const cliente2 =new Cliente('Maria', '1242512', '321414');

const empleado =new Empleado('Juan Perez', '831297213', 2000);
empleado.asignarClave('12345');
const gerente = new Gerente('Pedro Rivas', '2312323132',17000);
const director = new Director('Elena Moreno', '873218212', 150000);

console.log(SistemaAutenticacion.login(empleado,'12345'));

