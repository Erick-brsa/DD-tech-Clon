class Monitor extends Accesorios {
    static contadorMonitor = 0;
    constructor(nombre, marca, precio, description, img) {
        super(nombre, marca, precio, description, img);
        this._IdMonitor = ++Monitor.contadorMonitor;
    }
    get idMonitor(){
        return this._IdMonitor;
    }
}