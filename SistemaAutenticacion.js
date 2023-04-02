export class SistemaAutenticacion{
    //las funciones y atributos estaticos se instanciaban 1 sola vez
    static login(usuario,clave){
    //operador in ->
        if("autenticable" in usuario && usuario.autenticable instanceof Function){
            //autenticar si es un atributo o una funcion
            return usuario.autenticable(clave);
        }
           return false;
            //asi el cliente ya sabrá que si no existe la autenticacion no ejecutará
}
    }
   

//interfaz es el punto donde existe la comunicacion, interfaz como atributo e interfaz como metodo