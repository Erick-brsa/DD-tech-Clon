class Teclado extends Accesorios {
    static contadorTeclado = 0;
    constructor(nombre, marca, precio, description, img) {
        super(nombre, marca, precio, description, img);
        this._IdTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._IdTeclado;
    }
}