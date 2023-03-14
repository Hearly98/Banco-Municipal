//cliente

/*forma tradicional
const nombreCliente='Leonardo';
const dniCliente='13804050';
const numeroCuenta='1234567890';
const saldoCuenta =1000; */


//creando clase cliente


class Cliente
{
    nombreCliente;
    dniCliente;
    rucCliente;
}
//Creando una nueva clase para cuenta
class CuentaCorriente
{
    numero;
    saldo;
    agencia;

    //creando un metodo
    //deposito
    depositoEnCuenta(valor){
        this.saldo+=valor; //this te define la cuenta corriente actual, puede ser [1,2,3.....]
    }
    retiroEnCuenta(valor){
        this.saldo -=valor;
    }
}
//creando una constante que tome el valor del nuevo arreglo

const cliente1= new Cliente();
cliente1.nombreCliente='José';
cliente1.dniCliente='123412';
cliente1.rucCliente='10123142142';

//Incluyendo los valores a la nueva clase CuentaCorriente

const cuentaCorriente1= new CuentaCorriente();
cuentaCorriente1.numero='232323';
cuentaCorriente1.saldo=5000;
cuentaCorriente1.agencia=1001;

const cliente2= new Cliente();
cliente2.nombreCliente='Leonardo';
cliente2.dniCliente='13804050';
cliente2.rucCliente='10123142142';

const cuentaCorriente2= new CuentaCorriente();
cuentaCorriente2.numero='1234567890';
cuentaCorriente2.saldo=1000;
cuentaCorriente2.agencia=1002;

const cliente3= new Cliente();
cliente3.nombreCliente='Julia';
cliente3.dniCliente='542342324';
cliente3.rucCliente='10123142142';


const cuentaCorriente3= new CuentaCorriente();
cuentaCorriente3.numero='342325231';
cuentaCorriente3.saldo=1000;
cuentaCorriente3.agencia=1001;
//agregando operacion de entrada de dinero o deposito
cuentaCorriente3.depositoEnCuenta(100);



console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
console.log(cliente3);
console.log(cuentaCorriente3);