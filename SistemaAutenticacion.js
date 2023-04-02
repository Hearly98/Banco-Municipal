export class SistemaAutenticacion{
    //las funciones y atributos estaticos se instanciaban 1 sola vez
    static login(usuario,clave){
            return usuario.autenticable(clave);
    }
}

//interfaz es el punto donde existe la comunicacion, interfaz como atributo e interfaz como metodo