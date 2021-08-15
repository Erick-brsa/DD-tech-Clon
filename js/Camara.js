class Camara extends Accesorios {
    static contadorCamara = 0;
    constructor(nombre, marca, precio, description, img) {
        super(nombre, marca, precio, description, img);
        this._IdCamara = ++Camara.contadorCamara;
    }
    get idCamara(){
        return this._IdCamara;
    }
}