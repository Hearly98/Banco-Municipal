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
    #saldo;
    agencia;

    //creando un constructor
    constructor(){
        this.#saldo=0;
        this.numero='';
        this.agencia='';

    }

    
    //creando un metodo
    //deposito
    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor; //this te define la cuenta corriente actual, puede ser [1,2,3.....]
        }
    }
    retiroEnCuenta(valor){
        if(valor<=this.#saldo){
            this.#saldo -= valor;
        }

    }
}

//Nueva Instancia
cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.depositoEnCuenta(100);
cuentaDeLeonardo.numero='21312412';
cuentaDeLeonardo.agencia=1001;
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retiroEnCuenta(50);
console.log(cuentaDeLeonardo);


/*
//creando una constante que tome el valor del nuevo arreglo

const cliente1= new Cliente();
cliente1.nombreCliente='José';
cliente1.dniCliente='123412';
cliente1.rucCliente='10123142142';*/


